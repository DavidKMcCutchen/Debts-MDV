import { createAction, props } from "@ngrx/store";
import { Debt } from "@debts/api-interfaces";

// Select Entity

export const selectDebt = createAction(
    '[DEBT] Select Debt',
    props<{ debtId: string }>()
);

// Load All Entities

export const loadDebts = createAction(
    '[DEBT] Load Debts'
);

export const loadDebtsSuccess = createAction(
    '[DEBT] Load Debts Success',
    props<{ debts: Debt[] }>()
);

export const loadDebtsFailure = createAction(
    '[DEBT] Load Debts Failed',
    props<{ error: any}>()
);

// Load Single Entity

export const loadDebt = createAction(
    '[DEBT] Load Debt',
    props<{ debtId: string }>()
);

export const loadDebtSuccess = createAction(
    '[DEBT] Load Debt Success',
    props<{ debt: Debt}>()
);

export const loadDebtFailure = createAction(
    '[DEBT] Load Debt Failure',
    props<{ error: any }>()
);

// Load Entity Update

export const updateDebt = createAction(
    '[DEBTS] Update Debt',
    props<{ debt: Debt}>()
)

export const updateDebtSuccess = createAction(
    '[DEBTS] Update Debt Succeeded',
    props<{ debt: Debt}>()
)

export const updateDebtFailure = createAction(
    '[DEBTS] Update Debt Failed',
    props<{ error: any}>()
)

  // Load Entity Delete

export const deleteDebt = createAction(
    '[DEBT] Debt Deleted',
    props<{debt: Debt}>()
);

export const deleteDebtSuccess = createAction(
    '[DEBT] Debt Deleted Success',
    props<{debt: Debt}>()
);

export const deleteDebtFailure = createAction(
    '[DEBT] Debt Deleted Failure',
    props<{error: any}>()
);

  // Load Create Entity

export const createDebt = createAction(
    '[DEBT] Create Debt',
    props<{ debt: Debt}>()
);

export const createDebtSuccess = createAction(
    '[DEBT] Create Debt Success',
    props<{ debt: Debt}>()
);

export const createDebtFailure = createAction(
    '[DEBT] Create Debt Failure',
    props<{ error: any }>()
);