import {NgModule, SkipSelf, Optional} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        SharedModule,
        BrowserAnimationsModule
    ],
    exports: [
        HeaderComponent, FooterComponent, SidebarComponent
    ],
    declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw Error('Core 模块已经存在');
        }
    }
}
