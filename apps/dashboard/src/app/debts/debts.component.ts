import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Debt, emptyDebt } from '@debts/api-interfaces';
import { DebtFacade } from '@debts/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'debts-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {
  allDebts$: Observable<Debt[]> = this.debtFacade.allDebts$;
  selectedDebt$: Observable<Debt> = this.debtFacade.selectedDebts$;

  form: FormGroup;

  constructor(
    private debtFacade: DebtFacade,
    private formBuilder: FormBuilder
  ) {
    this.debtFacade.mutations$.subscribe((_) => this.resetDebt());
  }

  ngOnInit() {
    this.initForm();
    this.debtFacade.loadDebts();
    this.resetDebt();
  }

  selectDebt(debt: Debt) {
    this.debtFacade.selectDebt(debt.id)
    this.form.patchValue(debt)
  }

  saveDebt(debt: Debt) {
    this.debtFacade.saveDebt(debt)
  }

  deleteDebt(debt: Debt) {
    this.debtFacade.deleteDebt(debt)
  }

  resetDebt() {
    this.form.reset();
    this.selectDebt(emptyDebt)
  }

  private initForm() {
  this.form = this.formBuilder.group({ 
    id: [null],
    name: [''],
    amount: ['']
    })
  }
}
