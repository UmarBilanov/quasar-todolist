import CreateTask from 'pages/CreateTask'
import TaskIndex from 'pages/TaskIndex'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'createtask', // here it is, route /user/profile
        component: CreateTask // we reference /src/pages/Profile.vue imported above
      },

      // Posts page
      {
        path: 'taskindex', // here it is, route /user/posts
        component: TaskIndex // we reference /src/pages/Posts.vue imported above
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
