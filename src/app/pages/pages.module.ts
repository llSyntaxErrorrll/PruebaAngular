import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { LandingComponent } from './landing/landing.component';

import { SharedModule } from '../commons/shared.module';

@NgModule({
	declarations: [
		LandingComponent,
		
	],
	imports: [
		SharedModule,
		LandingModule
	],
	exports: []
})
export class PagesModule { }
