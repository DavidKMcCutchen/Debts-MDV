import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Debt } from "@debts/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as DebtsActions from './debts.actions';
import * as DebtsSelectors from './debts.selectors';
import * as fromDebts from './debts.reducer';


@Injectable({
  providedIn: 'root',
})

export class DebtFacade {
  allDebts$ = this.store.pipe(
    map((state) => DebtsSelectors.getAllDebts(state)),
  )
  selectedDebts$ = this.store.pipe(select(DebtsSelectors.getSelectedDebt));
  loaded$ = this.store.pipe(select(DebtsSelectors.getDebtsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === DebtsActions.createDebt({} as any) .type  ||
    action.type === DebtsActions.deleteDebt({} as any) .type  ||
    action.type === DebtsActions.updateDebt({} as any) .type  
  ),
  )
  selectDebt(debtId: string) {
    this.dispatch(DebtsActions.selectDebt({ debtId }))
  }

  loadDebts() {
    this.dispatch(DebtsActions.loadDebts());
  }
  
  loadDebt(debtId: string) {
    this.dispatch(DebtsActions.loadDebt({ debtId }));
  }

  saveDebt(debt: Debt) {
    debt.id ? this.updateDebt(debt) : this.createDebt(debt);
  }

  createDebt(debt: Debt) {
    this.dispatch(DebtsActions.createDebt({ debt }));
  }

  updateDebt(debt: Debt) {
    this.dispatch(DebtsActions.updateDebt({ debt }));
  }

  deleteDebt(debt: Debt) {
    this.dispatch(DebtsActions.deleteDebt({ debt }))
  }

  dispatch(action: Action) {
    this.store.dispatch(action)
  } 

  constructor(
    private store: Store<fromDebts.DebtPartialState>,
    private actions$: ActionsSubject
  ) {}

}