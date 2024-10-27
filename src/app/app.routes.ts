import { Routes } from '@angular/router';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';

export const routes: Routes = [
    { path: 'budgets/new', component: BudgetFormComponent },
    { path: 'budgets', component: BudgetListComponent },
    { path: 'budgets/:id', component: BudgetViewComponent },
    { path: '', redirectTo: '/budgets', pathMatch: 'full' }
  ];