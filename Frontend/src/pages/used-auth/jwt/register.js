import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Link,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { GuestGuard } from '../../../guards/guest-guard';
import { IssuerGuard } from '../../../guards/issuer-guard';
import { useAuth } from '../../../hooks/use-auth';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as AuthLayout } from '../../../layouts/auth/classic-layout';
import { paths } from '../../../paths';
import { AuthIssuer } from '../../../sections/auth/auth-issuer';
import { Issuer } from '../../../utils/auth';

const useParams = () => {
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo') || undefined;

  return {
    returnTo
  };
};

const initialValues = {
  email: '',
  username: '',
  password: '',
  accountType: 'LEARNER',
  policy: true,
  submit: null
};

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Phải đúng định dạng email')
    .max(255)
    .required('Email không được trống'),
  username: Yup
    .string()
    .max(255)
    .required('Tên đăng nhập không được trống'),
  password: Yup
    .string()
    .min(7)
    .max(255)
    .required('Mật khẩu không được trống')
});

const Page = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { returnTo } = useParams();
  const { signUp } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await signUp({email: values.email, username: values.username, password: values.password, accountType: values.accountType});

        if (isMounted()) {
          router.push(returnTo || paths.dashboard.index);
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  usePageView();

  return (
    <>
      <Head>
        <title>
          Đăng kí | HNM Learning System
        </title>
      </Head>
      <div>
        <Card elevation={16}>
          <CardHeader
            subheader={(
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Đã có tài khoản
                &nbsp;
                <Link
                  component={NextLink}
                  href={paths.usedAuth.jwt.login}
                  underline="hover"
                  variant="subtitle2"
                >
                  Đăng nhập
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            title="Đăng kí"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.username && formik.errors.username)}
                  fullWidth
                  helperText={formik.touched.username && formik.errors.username}
                  label="Tên đăng nhập"
                  name="username"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Mật khẩu"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Who are you?"
                  name="accountType"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.accountType}
                >
                  <MenuItem value={"LEARNER"}>LEARNER</MenuItem>
                  <MenuItem value={"INSTRUCTOR"}>INSTRUCTOR</MenuItem>
              </Select>
            </Stack>
              {/* <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1,
                  mt: 1
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  I have read the
                  {' '}
                  <Link
                    component="a"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {!!(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                  {formik.errors.policy}
                </FormHelperText>
              )} */}
              {formik.errors.submit && (
                <FormHelperText
                  error
                  sx={{ mt: 3 }}
                >
                  {formik.errors.submit}
                </FormHelperText>
              )}
              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Đăng kí
              </Button>
            </form>
          </CardContent>
        </Card>
        {/* <Box sx={{ mt: 3 }}>
          <AuthIssuer issuer={issuer} />
        </Box> */}
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <IssuerGuard issuer={Issuer.JWT}>
    <GuestGuard>
      <AuthLayout>
        {page}
      </AuthLayout>
    </GuestGuard>
  </IssuerGuard>
);

export default Page;
