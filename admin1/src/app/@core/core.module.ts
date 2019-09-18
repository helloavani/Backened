import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider } from '@nebular/auth';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
         providers: {
           email: {
             service: NbEmailPassAuthProvider,
             config: {
               baseEndpoint: 'http://18.222.10.176:3000/api/v1',
 login: {
   endpoint: '/authenticateadmin',
   method: 'post',
 },
 register: {
   endpoint: '/auth/sign-up',
   method: 'post',
 },
 logout: {
    redirect: {
      success:'/',
      failure: '/',
    }
  },
  requestPass: {
    endpoint: '/auth/request-pass',
    method: 'post',
  },
  resetPass: {
    endpoint: '/auth/reset-pass',
    method: 'post',
  },
             },
           },
         },
         forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      provider: 'email',  // provider id key. If you have multiple providers, or what to use your own you need to tell a component to use it here
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
    },
    register: {
      redirectDelay: 500,
      provider: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
    },
    requestPassword: {
      redirectDelay: 500,
      provider: 'email',
      showMessages: {
        success: true,
        error: true,
      },
    },
    resetPassword: {
      redirectDelay: 500,
      provider: 'email',
      showMessages: {
        success: true,
        error: true,
      },
    },
    logout: {
      redirectDelay: 500,
      provider: 'email',
    },
    validation: {  // fields validation rules. The validations are shared between all forms.
      password: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: false,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
       }).providers,
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
