import { emptyDebt } from "@debts/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { debtAdapter, DebtState, DEBT_FEATURES_KEY } from "./debts.reducer";

export const getDebtState = createFeatureSelector<DebtState>(DEBT_FEATURES_KEY);

const { selectAll, selectEntities } = debtAdapter.getSelectors();

export const getDebtsLoaded = createSelector(
    getDebtState,
    (state: DebtState) => state.loaded
);

export const getDebtError = createSelector(
    getDebtState,
    (state: DebtState) => state.error
);

export const getAllDebts = createSelector(
    getDebtState,
    (state: DebtState) => selectAll(state)
);

export const getDebtEntities = createSelector(
    getDebtState,
    (state: DebtState) => selectEntities(state)
);

export const getSelectedDebtId = createSelector(
    getDebtState,
    (state: DebtState) => state.selectedId
);

export const getSelectedDebt = createSelector(
    getDebtEntities,
    getSelectedDebtId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyDebt
)