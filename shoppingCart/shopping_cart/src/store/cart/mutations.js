export default {
    changeQuantity: (state, { index, quantity, isReplace = false }) => {
        console.log("changeQuantity", index, quantity, isReplace);
        if (isReplace) {
            state.listCarts[index].quantity = quantity;
        } else {
            state.listCarts[index].quantity += quantity;
        }
    },
    buyProduct: (state, data) => {
        state.listCarts.push(data);
    },
    changeListCarts: (state, newListCarts) => {
        state.listCarts = newListCarts;
    }
}