import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';


const AllMaterialModules = [
	MatTabsModule,
	MatInputModule,
	MatButtonModule,
	MatToolbarModule,
	MatIconModule,
	MatDividerModule,
	MatFormFieldModule
];

@NgModule({
	imports: [
		AllMaterialModules
	],
	exports: [
		AllMaterialModules
	]
})
export class MaterialModule { }