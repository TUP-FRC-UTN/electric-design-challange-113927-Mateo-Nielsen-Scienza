import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Budget } from '../models/budget';

@Component({
  selector: 'app-budget-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css'],
})
export class BudgetViewComponent implements OnInit {

  @Input() budgetId!: number;
  budget: Budget | undefined;
  budgets: Budget[] = []; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<Budget>(`/api/budgets/${id}`).subscribe(
        (data: Budget) => {
          this.budget = data; 
          this.calculateBudget();
        },
        (error) => {
          console.error('Error loading budget:', error);
        }
      );
    } else {
      console.error('Budget ID is null');
    }
  }

  calculateBudget() {
    if (!this.budget) {
      console.error('Budget is undefined, cannot calculate budget.');
      return;
    }

    const modules = this.budget.modules;
    let totalCost = 0;
    let totalBoxes = 0;

    const groupedModules: { [key: string]: any[] } = {};

    modules.forEach((module: any) => {
      totalCost += module.price;
      const environment = module.environment;

      if (!groupedModules[environment]) {
        groupedModules[environment] = [];
      }
      groupedModules[environment].push(module);
    });

    Object.values(groupedModules).forEach((envModules) => {
      const slotsNeeded = envModules.reduce((sum, module) => sum + module.slots, 0);
      totalBoxes += Math.ceil(slotsNeeded / 3);
    });

    console.log(`Total Cost: ${totalCost}, Total Boxes: ${totalBoxes}`);
  }

  viewBudget(id: string | undefined) {
    if (id) {
      console.log(`View budget with ID: ${id}`);
    } else {
      console.error('Budget ID is undefined');
    }
  }
}