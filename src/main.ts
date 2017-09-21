import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './stylesheets';

const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);