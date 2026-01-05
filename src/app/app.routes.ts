import { Routes } from '@angular/router';
import { Forkjoin } from './component/forkjoin/forkjoin';
import { Switchmap } from './component/switchmap/switchmap';

export const routes: Routes = [
    {path:'',redirectTo:'forkjoin',pathMatch:'full'},
    {path:'forkjoin',component:Forkjoin},
    {path:'switchmap',component:Switchmap},

];
