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
    }
}