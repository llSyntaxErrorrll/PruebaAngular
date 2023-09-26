import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/commons/shared.module';

const AllModules: any[] = [
];

@NgModule({
	declarations: [
		AllModules
	],
	imports: [
		SharedModule
	],
	exports: [
		AllModules
	]
})
export class LandingModule { }
