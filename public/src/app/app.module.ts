import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppInterceptor } from './app.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { NotificationsService } from './notifications.service';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ButtonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    provideFirebaseApp(() => initializeApp()),
    provideFirestore(() => getFirestore()),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forFeature([NotificationsService]),
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
