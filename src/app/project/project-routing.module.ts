/**
 * Created by 17ZY- on 2017/9/6.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";



const routes: Routes = [
    {path: 'project', component: ProjectListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectRoutingModule {
}
