import {NgModule, SkipSelf, Optional} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {loadSvgResource} from "../utils/svg.util";

@NgModule({
    imports: [
        SharedModule,
        BrowserAnimationsModule,
        HttpModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule,ir:MdIconRegistry,ds:DomSanitizer) {
        if (parent) {
            throw Error('Core 模块已经存在');
        }
        loadSvgResource(ir,ds);
    }
}
