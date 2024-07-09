import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { routes } from "@pages/app.routes";

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimationsAsync(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration()
	]
};
   