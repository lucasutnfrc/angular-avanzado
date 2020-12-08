import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';


const routes: Routes = [
    {path: 'dashboard',
    component: PagesComponent,
    children: [
        {path: '', component: DashboardComponent},
        {path: 'progress', component: ProgressComponent},
        {path: 'grafica1', component: Grafica1Component},
   ]
  }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}





//{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }