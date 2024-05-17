import { Chip, SvgIcon } from '@mui/material';
import AlignLeft02Icon from '../../icons/untitled-ui/duocolor/align-left-02';
import BarChartSquare02Icon from '../../icons/untitled-ui/duocolor/bar-chart-square-02';
import Building04Icon from '../../icons/untitled-ui/duocolor/building-04';
import CalendarIcon from '../../icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from '../../icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from '../../icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from '../../icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from '../../icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from '../../icons/untitled-ui/duocolor/graduation-hat-01';
import HomeSmileIcon from '../../icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from '../../icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from '../../icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from '../../icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from '../../icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from '../../icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from '../../icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from '../../icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from '../../icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from '../../icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from '../../icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from '../../icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from '../../icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from '../../icons/untitled-ui/duocolor/upload-04';
import Users03Icon from '../../icons/untitled-ui/duocolor/users-03';
import XSquareIcon from '../../icons/untitled-ui/duocolor/x-square';
import RouteIcon from '@mui/icons-material/Route';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import { tokens } from '../../locales/tokens';
import { paths } from '../../paths';
import { useAuth } from '../../hooks/use-auth';

// navigation silde


export const getSections = (t, accountType) => [
  {
    items: [
      {
        title: t(tokens.nav.overview),
        path: paths.dashboard.index,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.academy),
        path: paths.dashboard.academy.index,
        icon: (
          <SvgIcon fontSize="small">
            <GraduationHat01Icon />
          </SvgIcon>
        ),
        // items: [
        //   {
        //     title: t(tokens.nav.dashboard),
        //     path: paths.dashboard.academy.index
        //   },
        //   {
        //     title: t(tokens.nav.course),
        //     path: paths.dashboard.academy.courseDetails
        //   }
        // ]
      },
      {
        title: t(tokens.nav.explore),
        path: paths.dashboard.explore,
        icon: (
          <SvgIcon fontSize="small">
            <RouteIcon />
          </SvgIcon>
        )
      },
      // {
      //   title: t(tokens.nav.analytics),
      //   path: paths.dashboard.analytics,
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <BarChartSquare02Icon />
      //     </SvgIcon>
      //   )
      // },
      // {
      //   title: t(tokens.nav.ecommerce),
      //   path: paths.dashboard.ecommerce,
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <LineChartUp04Icon />
      //     </SvgIcon>
      //   )
      // },
      // {
      //   title: t(tokens.nav.crypto),
      //   path: paths.dashboard.crypto,
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <CurrencyBitcoinCircleIcon />
      //     </SvgIcon>
      //   ),
      //   label: (
      //     <Chip
      //       color="primary"
      //       label="New"
      //       size="small"
      //     />
      //   )
      // }
    ]
  },
  {
    subheader: t(tokens.nav.models),
    items: [
      {
        title: t(tokens.nav.model),
        path: paths.dashboard.model,
        icon: (
          <SvgIcon fontSize="small">
            <ModelTrainingOutlinedIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.modelList),
            path: paths.dashboard.model.index
          },
          {
            title: t(tokens.nav.modelCreate),
            path: paths.dashboard.model.create
          }
        ]
      },
      {
        title: t(tokens.nav.notebook),
        path: paths.dashboard.code,
        icon: (
          <SvgIcon fontSize="small">
            <CodeOutlinedIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.notebookList),
            path: paths.dashboard.notebook.index
          },
          {
            title: t(tokens.nav.notebookCreate),
            path: paths.dashboard.notebook.create
          }
        ]
      },
      {
        title: t(tokens.nav.dataset),
        path: paths.dashboard.dataset,
        icon: (
          <SvgIcon fontSize="small">
            <TableChartOutlinedIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.datasetList),
            path: paths.dashboard.dataset.index
          },
          {
            title: t(tokens.nav.datasetCreate),
            path: paths.dashboard.dataset.create
          }
        ]
      },
    ]
  },
  {
    subheader: t(tokens.nav.communications),
    items: [
      {
        title: t(tokens.nav.forum),
        path: paths.dashboard.forum.index,
        icon: (
          <SvgIcon fontSize="small">
            <Users03Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.forumList),
            path: paths.dashboard.forum.index
          },
          {
            title: t(tokens.nav.forumCreate),
            path: paths.dashboard.forum.create
          }
        ]
      },
      // {
      //   title: t(tokens.nav.chat),
      //   path: paths.dashboard.chat,
      //   icon: (
      //     <SvgIcon fontSize="small">
      //       <MessageChatSquareIcon />
      //     </SvgIcon>
      //   )
      // },
    ]
  },
  {
    subheader: t(tokens.nav.personal),
    items: [
      {
        title: t(tokens.nav.personal_info),
        path: paths.dashboard.personal_info,
        icon: (
          <SvgIcon fontSize="small">
            <AccountBoxOutlinedIcon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.learningPath),
        path: paths.dashboard.learningPaths.index,
        icon: (
          <SvgIcon fontSize="small">
            <RouteIcon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.calendar),
        path: paths.dashboard.calendar,
        icon: (
          <SvgIcon fontSize="small">
            <CalendarIcon />
          </SvgIcon>
        )
      }
    ]
  },
   {
    subheader: t(tokens.nav.admin),
    items: [
      {
        title: t(tokens.nav.lm_manage),
        path: paths.dashboard.lm_manage,
        icon: (
          <SvgIcon fontSize="small">
            <ArticleOutlinedIcon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.topic_manage),
        path: paths.dashboard.topic_manage,
        icon: (
          <SvgIcon fontSize="small">
            <AccountTreeOutlinedIcon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.account_manage),
        path: paths.dashboard.account_manage,
        icon: (
          <SvgIcon fontSize="small">
            <ManageAccountsOutlinedIcon />
          </SvgIcon>
        )
      },
    ]
  },
  {
    subheader: t(tokens.nav.concepts),
    items: [
      {
        title: t(tokens.nav.customers),
        path: paths.dashboard.customers.index,
        icon: (
          <SvgIcon fontSize="small">
            <Users03Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.customers.index
          },
          {
            title: t(tokens.nav.details),
            path: paths.dashboard.customers.details
          },
          {
            title: t(tokens.nav.edit),
            path: paths.dashboard.customers.edit
          }
        ]
      },
      {
        title: t(tokens.nav.productList),
        path: paths.dashboard.products.index,
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBag03Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.products.index
          },
          {
            title: t(tokens.nav.create),
            path: paths.dashboard.products.create
          }
        ]
      },
      {
        title: t(tokens.nav.orderList),
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingCart01Icon />
          </SvgIcon>
        ),
        path: paths.dashboard.orders.index,
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.orders.index
          },
          {
            title: t(tokens.nav.details),
            path: paths.dashboard.orders.details
          }
        ]
      },
      {
        title: t(tokens.nav.invoiceList),
        path: paths.dashboard.invoices.index,
        icon: (
          <SvgIcon fontSize="small">
            <ReceiptCheckIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.invoices.index
          },
          {
            title: t(tokens.nav.details),
            path: paths.dashboard.invoices.details
          }
        ]
      },
      {
        title: t(tokens.nav.logistics),
        path: paths.dashboard.logistics.index,
        icon: (
          <SvgIcon fontSize="small">
            <Truck01Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.dashboard),
            path: paths.dashboard.logistics.index
          },
          {
            title: t(tokens.nav.fleet),
            path: paths.dashboard.logistics.fleet
          }
        ]
      },
      {
        title: t(tokens.nav.jobList),
        path: paths.dashboard.jobs.index,
        icon: (
          <SvgIcon fontSize="small">
            <Building04Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.browse),
            path: paths.dashboard.jobs.index
          },
          {
            title: t(tokens.nav.details),
            path: paths.dashboard.jobs.companies.details
          },
          {
            title: t(tokens.nav.create),
            path: paths.dashboard.jobs.create
          }
        ]
      },
      {
        title: t(tokens.nav.socialMedia),
        path: paths.dashboard.social.index,
        icon: (
          <SvgIcon fontSize="small">
            <Share07Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.profile),
            path: paths.dashboard.social.profile
          },
          {
            title: t(tokens.nav.feed),
            path: paths.dashboard.social.feed
          }
        ]
      },
      {
        title: t(tokens.nav.blog),
        path: paths.dashboard.blog.index,
        icon: (
          <SvgIcon fontSize="small">
            <LayoutAlt02Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.postList),
            path: paths.dashboard.blog.index
          },
          {
            title: t(tokens.nav.postDetails),
            path: paths.dashboard.blog.postDetails
          },
          {
            title: t(tokens.nav.postCreate),
            path: paths.dashboard.blog.postCreate
          }
        ]
      },
      {
        title: t(tokens.nav.fileManager),
        path: paths.dashboard.fileManager,
        icon: (
          <SvgIcon fontSize="small">
            <Upload04Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.kanban),
        path: paths.dashboard.kanban,
        icon: (
          <SvgIcon fontSize="small">
            <CheckDone01Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.mail),
        path: paths.dashboard.mail,
        icon: (
          <SvgIcon fontSize="small">
            <Mail03Icon />
          </SvgIcon>
        )
      },
    ]
  },
  {
    subheader: t(tokens.nav.pages),
    items: [
      {
        title: t(tokens.nav.auth),
        icon: (
          <SvgIcon fontSize="small">
            <Lock01Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.login),
            items: [
              {
                title: 'Classic',
                path: paths.authDemo.login.classic
              },
              {
                title: 'Modern',
                path: paths.authDemo.login.modern
              }
            ]
          },
          {
            title: t(tokens.nav.register),
            items: [
              {
                title: 'Classic',
                path: paths.authDemo.register.classic
              },
              {
                title: 'Modern',
                path: paths.authDemo.register.modern
              }
            ]
          },
          {
            title: t(tokens.nav.forgotPassword),
            items: [
              {
                title: 'Classic',
                path: paths.authDemo.forgotPassword.classic
              },
              {
                title: 'Modern',
                path: paths.authDemo.forgotPassword.modern
              }
            ]
          },
          {
            title: t(tokens.nav.resetPassword),
            items: [
              {
                title: 'Classic',
                path: paths.authDemo.resetPassword.classic
              },
              {
                title: 'Modern',
                path: paths.authDemo.resetPassword.modern
              }
            ]
          },
          {
            title: t(tokens.nav.verifyCode),
            items: [
              {
                title: 'Classic',
                path: paths.authDemo.verifyCode.classic
              },
              {
                title: 'Modern',
                path: paths.authDemo.verifyCode.modern
              }
            ]
          }
        ]
      },
      {
        title: t(tokens.nav.pricing),
        path: paths.pricing,
        icon: (
          <SvgIcon fontSize="small">
            <CreditCard01Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.checkout),
        path: paths.checkout,
        icon: (
          <SvgIcon fontSize="small">
            <LogOut01Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.contact),
        path: paths.contact,
        icon: (
          <SvgIcon fontSize="small">
            <Mail04Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.error),
        icon: (
          <SvgIcon fontSize="small">
            <XSquareIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: '401',
            path: paths['401']
          },
          {
            title: '404',
            path: paths['404']
          },
          {
            title: '500',
            path: paths['500']
          }
        ]
      }
    ]
  },
  // {
  //   subheader: 'Misc',
  //   items: [
  //     {
  //       title: 'Level 0',
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <AlignLeft02Icon />
  //         </SvgIcon>
  //       ),
  //       items: [
  //         {
  //           title: 'Level 1a',
  //           items: [
  //             {
  //               title: 'Level 2a',
  //               items: [
  //                 {
  //                   title: 'Level 3a'
  //                 },
  //                 {
  //                   title: 'Level 3b',
  //                   disabled: true
  //                 }
  //               ]
  //             },
  //             {
  //               title: 'Level 2b'
  //             }
  //           ]
  //         },
  //         {
  //           title: 'Level 1b'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Disabled',
  //       disabled: true,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <XSquareIcon />
  //         </SvgIcon>
  //       )
  //     },
  //     {
  //       title: 'Label',
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       ),
  //       label: (
  //         <Chip
  //           color="primary"
  //           label="New"
  //           size="small"
  //         />
  //       )
  //     },
  //     {
  //       title: 'Blank',
  //       path: paths.dashboard.blank,
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       )
  //     },
  //     {
  //       title: 'External Link',
  //       path: 'https://devias.io',
  //       icon: (
  //         <SvgIcon fontSize="small">
  //           <File01Icon />
  //         </SvgIcon>
  //       )
  //     }
  //   ]
  // }
];
