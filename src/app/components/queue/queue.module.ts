import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueueComponent } from './queue.component';
import { TreeDemoRoutingModule } from './queue-routing.module';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@NgModule({
	imports: [
		CommonModule,
		TreeDemoRoutingModule,
		FormsModule,
		TreeModule,
		TreeTableModule,
		TableModule,
		DropdownModule,
		InputTextModule,
		ButtonModule,
		PanelModule
	],
	declarations: [QueueComponent],
})
export class QueueModule { }
