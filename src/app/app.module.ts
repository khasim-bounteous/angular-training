import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEnhancerModule } from './text-enhancer/text-enhancer.module';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentInteractionModule } from './component-interaction/component-interaction.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { UserModuleModule } from './user-module/user-module.module';
import { RoutesModuleComponent } from './routes-module/routes-module.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RxjsImplnModule } from './rxjs-impln/rxjs-impln.module';
import { UserModuleComponent } from './user-module/user-module.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CounterModule } from './counter/counter.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    bootstrap: [AppComponent], 
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        TextEnhancerModule,
        FormsModule,
        ComponentInteractionModule,
        ReactiveFormsModule,
        UserModuleModule,
        RxjsImplnModule,
        MaterialModule,
        MatProgressSpinnerModule,
        CounterModule,
        StoreModule.forRoot({counter:counterReducer}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
    ], 
        providers: [
            {
                provide: APP_SERVICE_CONFIG,
                useValue: APP_CONFIG
            },
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimationsAsync()
        ]
})
export class AppModule { }
