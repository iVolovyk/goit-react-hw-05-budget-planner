export const Type = {
  SAVE_BUDGET: 'SAVE_BUDGET',
};

export const saveBudget = amount => ({
  type: Type.SAVE_BUDGET,
  payload: Number(amount),
});
