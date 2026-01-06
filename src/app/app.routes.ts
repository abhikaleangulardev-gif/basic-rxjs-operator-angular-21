import { Routes } from '@angular/router';
import { Forkjoin } from './component/forkjoin/forkjoin';
import { Switchmap } from './component/switchmap/switchmap';
import { CombineLatest } from './component/combine-latest/combine-latest';
import { BasicOperator } from './component/basic-operator/basic-operator';

export const routes: Routes = [
    {path:'',redirectTo:'basicOperator',pathMatch:'full'},
    {path:'basicOperator',component:BasicOperator},
    {path:'forkjoin',component:Forkjoin},
    {path:'switchmap',component:Switchmap},
    {path:'combinelatest',component:CombineLatest},
];
