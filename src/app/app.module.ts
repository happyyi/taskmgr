import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MdSidenavModule} from '@angular/material'
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from "./login/login.module";
import {ProjectModule} from "./project/project.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MdSidenavModule,
        CoreModule,
        LoginModule,
        AppRoutingModule,
        ProjectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
