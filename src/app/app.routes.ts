import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
      {
        path: 'forms',
        component: FormsComponent,
        title: 'Form component'
      },
      {
        path: 'reactiveForms',
        component: ReactiveformComponent,
        title: "reactive form component"
      }
];
