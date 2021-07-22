import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Debt } from "@debts/api-interfaces";

@Component({
  selector: 'debts-debts-details',
  templateUrl: './debts-details.component.html',
  styleUrls: ['./debts-details.component.scss']
})
export class DebtsDetailsComponent {
  currentDebt: Debt;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set debt(value) {
    if (value) this.originalTitle = value.name;
    this.currentDebt = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
