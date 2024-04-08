export const selectCartModule = (state) => state.cart;

export const selectCartProductIds = (state) =>
  Object.keys(selectCartModule(state));

export const selectProductAmount = (state, productId) =>
  selectCartModule(state)[productId] || 0;
