import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    {path: '', redirectTo: 'employee-list', pathMatch: 'full'},
                    { path: 'employee-list', data: { breadcrumb: 'Employee List' }, loadChildren: () => import('./components/employee-list/employee-list.module').then(m => m.EmployeeListModule) },
                    { path: 'queue', data: { breadcrumb: 'Queue' }, loadChildren: () => import('./components/queue/queue.module').then(m => m.QueueModule) },
                ]
            },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
