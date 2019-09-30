export default {
    buyProduct: (state, data) => {
        state.listCarts.push(data);
    }
}