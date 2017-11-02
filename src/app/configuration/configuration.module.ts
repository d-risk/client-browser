import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppConfig} from './app.config';

export function configFactory(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppConfig],
      multi: true
    },
  ],
})
export class ConfigurationModule {
}
