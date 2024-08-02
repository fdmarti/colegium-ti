import type { RouteRecordRaw } from 'vue-router';
import StudentLayout from '../layouts/StudentLayout.vue';

export const studensRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'students',
    component: StudentLayout,
    children: [
      {
        path: '/',
        name: 'students-list',
        component: () => import('@/modules/students/views/StudentList.vue'),
      },
      {
        path: '/:id',
        name: 'students-detail',
        component: () => import('@/modules/students/views/StudentDetail.vue'),
      },
    ],
  },
];
