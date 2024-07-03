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
import { HomeComponent } from './user-module/home/home.component';
import { AddUserComponent } from './user-module/add-user/add-user.component';
import { UpdateUserComponent } from './user-module/update-user/update-user.component';
import { UserModuleModule } from './user-module/user-module.module';
import { RoutesModuleComponent } from './routes-module/routes-module.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { RxjsImplnComponent } from './rxjs-impln/rxjs-impln.component';
import { RxjsImplnModule } from './rxjs-impln/rxjs-impln.module';
import { UserModuleComponent } from './user-module/user-module.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent,
    ComponentLifecycleComponent,
    DataBindingComponent,
    DirectivesComponent,
    RoutesModuleComponent,
    UserModuleComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextEnhancerModule,
    FormsModule,
    ComponentInteractionModule,
    ReactiveFormsModule,
    UserModuleModule,
    HttpClientModule,
    RxjsImplnModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ]
})
export class AppModule { }
