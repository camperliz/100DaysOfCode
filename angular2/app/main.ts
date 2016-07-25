// imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
	appRouterProviders,
	HTTP_PROVIDERS,
	{ provide: XHRBackend, useClass: InMemoryBackendService }, //in-memory server
	{ provide: SEED_DATA, useClass: InMemoryDataService } // in-memory server data
]);