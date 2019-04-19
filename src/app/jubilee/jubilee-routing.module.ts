import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JubileeComponent} from './jubilee.component';
const  routes: Routes = [
    {path: '', component: JubileeComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class JubileeRoutingModule {
}
