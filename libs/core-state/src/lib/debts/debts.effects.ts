import { Injectable } from "@angular/core";
import { Debt } from "@debts/api-interfaces";
import { DebtsService } from "@debts/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as DebtsActions from './debts.actions';
import { filter, map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class DebtEffects {
    loadDebt$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DebtsActions.loadDebt),
        fetch({
            run: (action) =>
                this.debtsService
                    .find(action.debtId)
                    .pipe(
                        map((debt: Debt) => DebtsActions.loadDebtSuccess({ debt }))
                    ),
                onError: (action, error) => DebtsActions.loadDebtFailure({ error })    
            })
        )
        )
    loadDebts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DebtsActions.loadDebts),
        fetch({
            run: () =>
                this.debtsService
                    .all()
                    .pipe(
                        map((debts: Debt[]) =>
                        DebtsActions.loadDebtsSuccess({ debts }))
                    ),
                onError: (action, error) => DebtsActions.loadDebtsFailure({ error })    

            })
        )
    )
    
    updateDebt$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DebtsActions.updateDebt),
        pessimisticUpdate({
            run: (action) =>
                this.debtsService
                    .update(action.debt)
                    .pipe(
                        map((debt: Debt) => DebtsActions.updateDebtSuccess({ debt })
                    )
                ),
            onError: (action, error) => DebtsActions.updateDebtFailure({ error })  
    })
) )

    deleteDebt$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DebtsActions.deleteDebt),
        pessimisticUpdate({
            run: (action) =>
                this.debtsService
                    .delete(action.debt)
                    .pipe(
                        map(() => DebtsActions.deleteDebtSuccess({ debt: action.debt })
                    )
                ),
            onError: (action, error) => DebtsActions.deleteDebtFailure({ error })  
        })
    )
)

    createDebt$ = createEffect(() =>
    this.actions$.pipe(
        ofType(DebtsActions.createDebt),
        pessimisticUpdate({
            run: (action) =>
                this.debtsService
                    .create(action.debt)
                    .pipe(
                        map((debt: Debt) => DebtsActions.createDebtSuccess({ debt })
                    )
                ),
            onError: (action, error) => DebtsActions.createDebtFailure({ error })  
        })
    ))
    
constructor(private actions$: Actions, private debtsService: DebtsService) {}        
}