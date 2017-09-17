import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);