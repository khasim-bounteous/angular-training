import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEnhancerModule } from './text-enhancer/text-enhancer.module';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './user-module/home/home.component';
import { AddUserComponent } from './user-module/add-user/add-user.component';
import { UpdateUserComponent } from './user-module/update-user/update-user.component';
import { UserModuleModule } from './user-module/user-module.module';
import { RoutesModuleComponent } from './routes-module/routes-module.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentLifecycleComponent,
    DataBindingComponent,
    DirectivesComponent,
    AboutComponent,
    RoutesModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextEnhancerModule,
    FormsModule,
    ComponentInteractionModule,
    ReactiveFormsModule,
    UserModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
