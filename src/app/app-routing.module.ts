import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './user-module/home/home.component';
import { AddUserComponent } from './user-module/add-user/add-user.component';
import { UpdateUserComponent } from './user-module/update-user/update-user.component';
import { RoutesModuleComponent } from './routes-module/routes-module.component';
import { Cmp1Component } from './routes-module/cmp-1/cmp-1.component';
import { Cmp2Component } from './routes-module/cmp-2/cmp-2.component';
import { RxjsImplnComponent } from './rxjs-impln/rxjs-impln.component';
import { MapsComponentComponent } from './rxjs-impln/maps-component/maps-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'user/:id',
    component: UpdateUserComponent,
  },
  {
    path: 'rxjsimpl',
    component: RxjsImplnComponent,
  },
  {
    path: 'routes',
    component: RoutesModuleComponent,
    children:[
      {
        path: 'child-a',
        component: Cmp1Component
      },
      {
        path: 'child-b',
        component: Cmp2Component
      }
    ]
  },
  {
    path: 'mapImpl',
    component: MapsComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
