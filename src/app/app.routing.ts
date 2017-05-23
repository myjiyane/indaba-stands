import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustryComponent } from './industry/industry.component';

const appRoutes: Routes = [
  { path: 'industries', component: IndustryComponent },
  /* otherwise redirect to home */    
  { path: '**', redirectTo: 'industries' }  
];
 export const Routing = RouterModule.forRoot(appRoutes);
