import { ActionReducerMap } from "@ngrx/store";
import * as fromDebts from './debts/debts.reducer';

export interface AppState {
[fromDebts.DEBT_FEATURES_KEY]: fromDebts.DebtState
}

export const reducers: ActionReducerMap<AppState> = {
[fromDebts.DEBT_FEATURES_KEY]: fromDebts.debtReducer
}