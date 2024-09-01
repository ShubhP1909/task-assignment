import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Internal Audit', icon: 'pi pi-fw pi-id-card' },
                    { label: 'UAT Testing', icon: 'pi pi-fw pi-table' },
                    { label: 'Intract', icon: 'pi pi-fw pi-list' },
                    { label: 'Queue', icon: 'pi pi-fw pi-share-alt', routerLink: ['/queue'] },
                    { label: 'Workflow', icon: 'pi pi-fw pi-tablet' },
                    { label: 'Admin', icon: 'pi pi-fw pi-clone' },
                    { label: 'Asset', icon: 'pi pi-fw pi-chart-bar' },
                    { label: 'Parent', icon: 'pi pi-fw pi-check-square' },
                    { label: 'Option One', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Option Two', icon: 'pi pi-fw pi-exclamation-circle' },
                    { label: 'All accessories', icon: 'pi pi-fw pi-box' },
                    { label: 'Banking', icon: 'pi pi-fw pi-file' },
                    { label: 'Decorating', icon: 'pi pi-fw pi-bars' },
                    { label: 'Presenting', icon: 'pi pi-fw pi-clone' },
                ]
            }
        ];
    }
}
