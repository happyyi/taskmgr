import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
    projects = [{
        "name": '企业协作平台',
        "desc": '这是一个练习项目',
        "coverImg": "assets/img/covers/0.jpg"
    }, {
        "name": '企业协作平台',
        "desc": '这是一个练习项目',
        "coverImg": "assets/img/covers/1.jpg"
    }]

    constructor(private dialog:MdDialog) {
    }

    openNewProjectDialog(){
        const dialogRef=this.dialog.open(NewProjectComponent,{
            data:'this is my way'
        });
        console.log(dialogRef);
        dialogRef.afterClosed().subscribe((result)=>console.log(result));
    }

    ngOnInit() {
    }

}
