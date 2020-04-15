import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/lumber/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Analytics',
    icon: 'bar-chart-2',
    children: [
      {
        title: 'Load',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Rerun',
        link: '/pages/layout/list',
      },
      {
        title: 'Unload',
        link: '/pages/layout/infinite-list',
      }
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/lumber/miscellaneous/404',
      },
    ],
  },
];