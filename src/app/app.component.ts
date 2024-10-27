import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetViewComponent } from "./budget-view/budget-view.component";
import { BudgetFormComponent } from "./budget-form/budget-form.component";
import { BudgetListComponent } from './budget-list/budget-list.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BudgetViewComponent, BudgetFormComponent, BudgetListComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electric-design-challange';

  showForm = false;
  selectedBudget: number | null = null;
  budgets = [
    { id: 1, date: '2024-10-01', client: 'Cliente 1' },
    { id: 2, date: '2024-10-02', client: 'Cliente 2' },
    { id: 3, date: '2024-10-03', client: 'Cliente 3' },
  ];

  onBudgetSelected(budgetId: string) { 
    console.log('Selected budget ID:', budgetId);
  }
  

  viewBudget(budgetId: number) {
    this.selectedBudget = budgetId;
  }
}
