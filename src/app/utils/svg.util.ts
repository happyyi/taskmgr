/**
 * Created by 17ZY- on 2017/8/28.
 */
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResource = (ir:MdIconRegistry,ds:DomSanitizer) => {
    const imgDir = 'assets/img';
    const sideDir = `${imgDir}/sidebar`;
    const daysDir = `${imgDir}/days`;
    const avatarDir = `${imgDir}/avatar`;
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl(`${sideDir}/day.svg`));
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl(`${sideDir}/month.svg`));
    ir.addSvgIcon('project',ds.bypassSecurityTrustResourceUrl(`${sideDir}/project.svg`));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl(`${sideDir}/projects.svg`));
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl(`${sideDir}/week.svg`));

    const days = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    days.forEach( d =>{
        ir.addSvgIcon(`day${d}`,ds.bypassSecurityTrustResourceUrl(`${daysDir}/day${d}.svg`));
    })
};
