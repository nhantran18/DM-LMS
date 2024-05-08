import Head from 'next/head';
import { addDays, subDays, subHours, subMinutes } from 'date-fns';
import { useCallback, useState } from 'react';
import NextLink from 'next/link';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { usePageView } from '../../../hooks/use-page-view';
import { useSettings } from '../../../hooks/use-settings';
import { Layout as DashboardLayout } from '../../../layouts/dashboard';
import { OverviewBanner } from '../../../sections/dashboard/overview/overview-banner';
import { OverviewDoneTasks } from '../../../sections/dashboard/overview/overview-done-tasks';
import { OverviewEvents } from '../../../sections/dashboard/overview/overview-events';
import { OverviewInbox } from '../../../sections/dashboard/overview/overview-inbox';
import { OverviewTransactions } from '../../../sections/dashboard/overview/overview-transactions';
import { OverviewPendingIssues } from '../../../sections/dashboard/overview/overview-pending-issues';
import { OverviewSubscriptionUsage } from '../../../sections/dashboard/overview/overview-subscription-usage';
import { OverviewHelp } from '../../../sections/dashboard/overview/overview-help';
import { OverviewJobs } from '../../../sections/dashboard/overview/overview-jobs';
import { OverviewOpenTickets } from '../../../sections/dashboard/overview/overview-open-tickets';
import { OverviewTips } from '../../../sections/dashboard/overview/overview-tips';
import { Course } from '../../../sections/dashboard/overview/course';
import { paths } from '../../../paths';
import { exploreApi } from '../../../api/explore';

// import { CreateCourseDialog } from '../../../sections/dashboard/explore/create-course-dialog';

const now = new Date();

const Page = () => {
  const settings = useSettings();
  const [listCourses, setListCourses] = useState([]);
  // const [openCreateCourseDialog, setOpenCreateCourseDialog] = useState(false)

  const getCourses = useCallback(async () => {
    try {
      const response = await exploreApi.getListCourse();

      if (isMounted()) {
        setListCourses([...response.data]);
      }
    } catch (err) {
      console.error(err);
    }
  }, [])

  usePageView();

  return (
    <>
      <Head>
        <title>
          Dashboard: Overview | Devias Kit PRO
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <div>
                  <Typography variant="h4">
                    Các khoá học mới
                  </Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      component={NextLink}
                      href={`${paths.dashboard.explore}/create`}
                      // onClick={() => setOpenCreateCourseDialog(true)}
                      startIcon={(
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                    >
                      Tạo khoá học mới
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            {listCourses.map((_course) => 
            {<Grid
              xs={12}
              md={4}
            >
              <Course
                title={_course.name}
                amount={_course.amountOfTime} />  
            </Grid>
            })}
            {/* <Grid
              xs={12}
              md={4}
            >
              <OverviewPendingIssues amount={12} />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <OverviewOpenTickets amount={5} />
            </Grid> */}
            <Grid
              xs={12}
              md={7}
            >
              <OverviewBanner />
            </Grid>
            <Grid
              xs={12}
              md={5}
            >
              <OverviewTips
                sx={{ height: '100%' }}
                tips={[
                  {
                    title: 'New fresh design.',
                    content: 'Your favorite template has a new trendy look, more customization options, screens & more.'
                  },
                  {
                    title: 'Tip 2.',
                    content: 'Tip content'
                  },
                  {
                    title: 'Tip 3.',
                    content: 'Tip content'
                  }
                ]}
              />
            </Grid>
          </Grid>
          {/* {
            openCreateCourseDialog && (
              <CreateCourseDialog
                openCreateCourseDialog={openCreateCourseDialog}
                setOpenCreateCourseDialog={setOpenCreateCourseDialog}
              />
            )
          } */}
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
