import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import {SmartTableComponent} from "./smart-table/smart-table.component";

@NgModule({
    imports: [
        NbCardModule,
        NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        ...routedComponents,
        FsIconComponent,
    ],
    exports: [
        SmartTableComponent
    ]
})
export class TablesModule { }
