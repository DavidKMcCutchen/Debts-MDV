import { Debt } from "@debts/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as DebtsActions from './debts.actions';

export const DEBT_FEATURES_KEY = 'debts';

export interface DebtState extends EntityState<Debt> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface DebtPartialState {
    readonly [DEBT_FEATURES_KEY]: DebtState
};

export const debtAdapter: EntityAdapter<Debt> = createEntityAdapter<Debt>();

export const initialDebtState: DebtState = debtAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, { error }): DebtState => ({ ...state, error });

const onDispatch = (state, action): DebtState => ({
    ...state,
    loaded: false,
    error: null
});

const _debtReducer = createReducer(
    initialDebtState,
    on(
        DebtsActions.loadDebtFailure,
        DebtsActions.loadDebtsFailure,
        DebtsActions.deleteDebtFailure,
        DebtsActions.updateDebtFailure,
        DebtsActions.createDebtFailure,
        onFailure
    ),
    on(
        DebtsActions.loadDebt,
        DebtsActions.loadDebts,
        DebtsActions.deleteDebt,
        DebtsActions.updateDebt,
        DebtsActions.createDebt,
        onDispatch
    ),
    on(
        DebtsActions.loadDebtSuccess, (state, { debt }) =>
        debtAdapter.upsertOne(debt, {...state, loaded: true})
    ),
    on(
        DebtsActions.selectDebt, (state, { debtId}) =>({
            ...state,
            selectedId: debtId
        }) 
    ),
    on(
        DebtsActions.loadDebtsSuccess, (state, { debts }) =>
        debtAdapter.setAll(debts, {...state, loaded: true})
    ),
    on(
        DebtsActions.deleteDebtSuccess, (state, { debt }) =>
        debtAdapter.removeOne(debt.id, {...state, loaded: true})
    ),
    on(
        DebtsActions.updateDebtSuccess, (state, { debt}) =>
        debtAdapter.updateOne(
            {id: debt.id, changes: debt},
            {...state, loaded: true}
        )
    ),
    on(
        DebtsActions.createDebtSuccess, (state, { debt }) =>
        debtAdapter.addOne(debt, {...state, loaded: true}) 
    ),
    )
    
    export function debtReducer(
        state: DebtState | undefined,
        action: Action
    ) {
        return _debtReducer(state, action)
    }
