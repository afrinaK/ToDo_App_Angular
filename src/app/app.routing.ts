import { Routes } from '@angular/router';
import { BlankComponent, FullComponent } from '@app/shared';
import { AllComponent } from './all/all.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import {AppComponent} from '@app/app.component';

export const AppRoutes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'active',
        component: ActiveComponent // Add this route for the ActiveComponent
      },
      {
        path: 'completed',
        component: CompletedComponent // Add this route for the CompletedComponent
      },
      {
        path: 'all',
        component: AllComponent // Add this route for the AllComponent
      }
    ]
  }
];
