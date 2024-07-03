import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-module/home/home.component';
import { AddUserComponent } from './user-module/add-user/add-user.component';
import { UpdateUserComponent } from './user-module/update-user/update-user.component';
import { RoutesModuleComponent } from './routes-module/routes-module.component';
import { Cmp1Component } from './routes-module/cmp-1/cmp-1.component';
import { Cmp2Component } from './routes-module/cmp-2/cmp-2.component';
import { RxjsImplnComponent } from './rxjs-impln/rxjs-impln.component';
import { MapsComponentComponent } from './rxjs-impln/maps-component/maps-component.component';
import { UserModuleComponent } from './user-module/user-module.component';
import { TextEnhancerComponent } from './text-enhancer/text-enhancer.component';
import { ComponentAComponent } from './component-interaction/component-a/component-a.component';
import { HarrypotterMoviesComponent } from './harrypotter-movies/harrypotter-movies.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserModuleComponent,
    children:[
      {
        path:"",
        component: HomeComponent
      },
      {
        path: 'adduser',
        component: AddUserComponent
      },  
      {
        path: 'user/:id',
        component: UpdateUserComponent,
      },
    ]
  },

  {
    path: 'text-analyser',
    component: TextEnhancerComponent
  },  
  {
    path: 'chat',
    component: ComponentAComponent
  },
  {
    path: 'rxjsimpl',
    component: RxjsImplnComponent,
  },
  {
    path: 'mapimpl',
    component: MapsComponentComponent
  },
  { 
    path: 'directives',
    component: DirectivesComponent
  },
  // {
  //   path: 'harry',
  //   component: HarrypotterMoviesComponent
  // },
  {
    path: 'harrypotter',
    loadChildren: ()=> import('./feature/feature.module').then(m=>m.FeatureModule)
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
