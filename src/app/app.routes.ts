import { Routes } from '@angular/router';
import { Forkjoin } from './component/forkjoin/forkjoin';

export const routes: Routes = [
    {path:'',redirectTo:'forkjoin',pathMatch:'full'},
    {path:'forkjoin',component:Forkjoin}
];
