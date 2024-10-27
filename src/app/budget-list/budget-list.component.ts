import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Budget } from '../models/budget';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = []; 

  @Output() budgetSelected = new EventEmitter<string>();

    viewBudget(id: string | undefined) {
      if (id) {
        this.budgetSelected.emit(id); 
      } else {
        console.error('Budget ID is undefined');
      }
    }


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBudgets();
  }

  loadBudgets() {
    this.http.get<any[]>('http://localhost:3000/api/budgets')
      .subscribe(
        data => {
          this.budgets = data;
        },
        error => {
          console.error('Error loading budgets:', error);
        }
      );
  }


  
}
