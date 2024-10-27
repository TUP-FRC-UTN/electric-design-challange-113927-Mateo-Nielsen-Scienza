import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css'],
})
export class BudgetFormComponent implements OnInit {
  budgetForm: FormGroup;
  today: string;
  moduleTypes: { id: number, name: string }[];
  zones: { id: number, name: string }[];
  budget: { id: number, name: string, zones: any[] }; 

  constructor(private fb: FormBuilder) {
    this.budget = { id: 0, name: '', zones: [] };
    this.budgetForm = this.fb.group({
      date: [''],
      client: [''],
      modules: this.fb.array([]),
    });
    this.today = new Date().toISOString().split('T')[0];

    
    this.moduleTypes = [
      { id: 1, name: 'Type 1' },
      { id: 2, name: 'Type 2' },
      { id: 3, name: 'Type 3' },
    ];
    
    this.zones = [
      { id: 1, name: 'Zone A' },
      { id: 2, name: 'Zone B' },
      { id: 3, name: 'Zone C' },
    ];
  }

  ngOnInit(): void {
    
  }

  get modules(): FormArray {
    return this.budgetForm.get('modules') as FormArray;
  }

  addModule() {
    this.modules.push(this.fb.group({
      type: [''],
      environment: [''],
    }));
  }

  removeModule(index: number) {
    this.modules.removeAt(index);
  }

  submit() {
    console.log(this.budgetForm.value);
    this.budget = {
      id: this.budgetForm.value.id || 0,
      name: this.budgetForm.value.client || '',
      zones: this.zones 
    };
    console.log(this.budget);
  }
}
