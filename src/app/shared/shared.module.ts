import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ReadMoreComponent } from './components/read-more/read-more.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        ReadMoreComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        
        ReadMoreComponent
    ]
})
export class SharedModule { }