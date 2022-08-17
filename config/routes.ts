export default [
  {
    path: '/login',
    layout: false,
    component: './Login',
  },
  {
    path: '/face_comparison',
    name: 'face_comparison',
    icon: 'team',
    component: './FaceComparison',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/face_comparison',
  },
  {
    component: './404',
  },
];
