import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  Input,
} from '@mui/material';
import { forumApi } from '../../../api/forum';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { paths } from '../../../paths';
import { ForumCard } from '../../../sections/dashboard/forum/forum-card';
import { BreadcrumbsSeparator } from '../../../components/breadcrumbs-separator';

const useForums = () => {
  const isMounted = useMounted();
  const [forums, setForums] = useState([]);

  const getForums = useCallback(async () => {
    try {
      const response = await forumApi.getForums();

      if (isMounted()) {
        setForums(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getForums();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return forums;
};

const Page = () => {
  const forums = useForums();

  usePageView();

  return (
    <>
      <Head>
        <title>
          Forum: Forum List
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Typography variant="h3">
              Diễn đàn
            </Typography>
            <Breadcrumbs separator={<BreadcrumbsSeparator />}>
              <Link
                color="text.primary"
                component={NextLink}
                href={paths.dashboard.index}
                variant="subtitle2"
              >
                Dashboard
              </Link>
              <Link
                color="text.primary"
                component={NextLink}
                href={paths.dashboard.forum.index}
                variant="subtitle2"
              >
                Diễn đàn
              </Link>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Danh sách
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Card
            elevation={16}
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              px: 3,
              py: 2, 
              mb: 8,
              mt: 6,
            }}
          >
            <SvgIcon fontSize="large" htmlColor="#848C97" >
              <SearchMdIcon />
            </SvgIcon>
            <Input placeholder="Tìm kiếm chủ đề trên diễn đàn..." autoComplete disableUnderline fullWidth sx={{marginLeft: 2}} inputProps={{ style: { fontSize: '17px' } }}/>
          </Card>
          <Card
            elevation={16}
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              px: 3,
              py: 2, 
              position: 'fixed',
              bottom: 30,
              right : 100,
              width: 500,
            }}
          >
            <Typography variant="subtitle1">
              Tạo chủ đề mới để trao đổi cùng cộng đồng!
            </Typography>
            <Button
              component={NextLink}
              href={paths.dashboard.blog.postCreate}
              variant="contained"
            >
              Tạo ngay
            </Button>
          </Card>
          <Typography variant="h4">
            Bài đăng gần đây
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
            variant="body1"
          >
            Khám phá những bài viết mới về chủ đề Trí Tuệ Nhân Tạo từ cộng đông của chúng tôi.
          </Typography>
          <Typography
            color="text.secondary"
            variant="body1"
          >
            Những thứ bạn quan tâm có thể được tìm thấy ngay đây thôi.
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Grid
            container
            spacing={4}
          >
            {forums.map((forum) => (
              <Grid
                key={forum.title}
                xs={12}
                md={6}
              >
                <ForumCard
                  authorAvatar={forum.author.avatar}
                  authorName={forum.author.name}
                  category={forum.category}
                  cover={forum.cover}
                  publishedAt={forum.publishedAt}
                  readTime={forum.readTime}
                  shortDescription={forum.shortDescription}
                  title={forum.title}
                  sx={{ height: '100%' }}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={1}
            sx={{
              mt: 4,
              mb: 8
            }}
          >
            <Button
              disabled
              startIcon={(
                <SvgIcon>
                  <ArrowLeftIcon />
                </SvgIcon>
              )}
            >
              Mới hơn
            </Button>
            <Button
              endIcon={(
                <SvgIcon>
                  <ArrowRightIcon />
                </SvgIcon>
              )}
            >
              Cũ hơn
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
