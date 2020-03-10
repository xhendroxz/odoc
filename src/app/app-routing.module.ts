import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./doctor/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./doctor/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'dailypost',
    loadChildren: () => import('./doctor/dailypost/dailypost.module').then( m => m.DailypostPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./news/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
