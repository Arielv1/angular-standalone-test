import {Route} from "@angular/router";


export const routes: Route[] = [
  {
    path: 'second',
    loadComponent: () => import('./second/second.component').then(c => c.SecondComponent)
  },
  {
    path: 'parent-child',
    // loadComponent: () => import('./parent-child/parent/parent.component').then(c => c.ParentComponent),
    loadChildren: () => import('./parent-child/parent-child.routes').then(r => r.parentChildRoutes),
  }
];
//
// export const routes: Route[] = [
//   {
//     path: 'second',
//     loadComponent: () => import('./second/second.component').then(c => c.SecondComponent)
//   },
//   {
//     path: 'parent-child',
//     loadComponent: () => import('./parent-child/parent/parent.component').then(c => c.ParentComponent),
//     children: [
//       {
//         path: 'child-a',
//         loadComponent: () => import('./parent-child/child-a/child-a.component').then(c => c.ChildAComponent)
//       },
//       {
//         path: 'child-b',
//         loadComponent: () => import('./parent-child/child-b/child-b.component').then(c => c.ChildBComponent)
//       },
//     ]
//   }
// ]
