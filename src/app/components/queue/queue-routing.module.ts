import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './queue.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: QueueComponent }
	])],
	exports: [RouterModule]
})
export class TreeDemoRoutingModule { }
