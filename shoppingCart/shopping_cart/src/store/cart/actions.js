export default {
    actBuyProduct({ commit, state }, data) {
        // check
        const index = state.listCarts.findIndex(cart => cart.product.id === data.product.id)
        if (index === -1) {
            // Không tồn tại
            commit('buyProduct', data);
        } else {
            let quantity = data.quantity;
            commit('changeQuantity', { index, quantity });
        }
    },
    actleDeleteCart( { commit, state }, cartDelete ) {
        var newListCarts = state.listCarts.filter(item => item.product.id !== cartDelete.product.id);
        commit('changeListCarts', newListCarts);
    }
}