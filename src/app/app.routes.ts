import { Routes } from '@angular/router';
import { Forkjoin } from './component/forkjoin/forkjoin';
import { Switchmap } from './component/switchmap/switchmap';
import { CombineLatest } from './component/combine-latest/combine-latest';

export const routes: Routes = [
    {path:'',redirectTo:'forkjoin',pathMatch:'full'},
    {path:'forkjoin',component:Forkjoin},
    {path:'switchmap',component:Switchmap},
    {path:'combinelatest',component:CombineLatest},


];
