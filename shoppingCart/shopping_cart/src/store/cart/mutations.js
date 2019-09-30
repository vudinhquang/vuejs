export default {
    changeQuantity: (state, { index, quantity }) => {
        state.listCarts[index].quantity += quantity;
    },
    buyProduct: (state, data) => {
        state.listCarts.push(data);
    },
    changeListCarts: (state, newListCarts) => {
        state.listCarts = newListCarts;
    }
}