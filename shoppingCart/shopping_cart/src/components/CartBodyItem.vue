<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ formatPrice }}</td>
        <td>
            <input 
                :value="cart.quantity" 
                @blur="handle_update"
                type="number" min="1">
        </td>
        <td><strong>{{ formatTotal }}</strong></td>
        <td>
            <a @click.prevent="" class="label label-info update-cart-item" href="#">Update</a>
            <a @click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#">Delete</a>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
import { NOTI_ACT_DELETE, NOTI_GREATER_THAN_ONE, NOTI_ACT_UPDATE } from '../constants/config'
import { toCurrency, validateQuantity } from '../helpers'
export default {
    name: 'cart-body-item',
    props: {
        cart: { type: Object },
        index: { type: Number }
    },
    computed: {
        product() {
            return this.cart.product;
        },
        formatPrice() {
            return toCurrency(this.product.price, 'USD', 'right');
        },
        formatTotal() {
            return toCurrency(this.product.price * this.cart.quantity, 'USD', 'right');
        }
    },
    methods: {
        ...mapActions({
            actleDeleteCart: 'cart/actleDeleteCart',
            act_update_quantity: 'cart/act_update_quantity',
            set_loading: 'set_loading'
        }),
        handleDelete() {
            if (confirm('Bạn có muốn xóa đơn hàng không?')) {
                this.actleDeleteCart(this.cart);
                this.$notify(NOTI_ACT_DELETE);
            }
        },
        handle_update(e) {
            // Bật loading
            this.set_loading(true);
            setTimeout(() => { 
                let quantity = e.target.value;
                const check = validateQuantity(quantity);
                if (check) {
                    let data = { 
                        cartUpdate: this.cart, 
                        quantity: parseInt(quantity)
                    };
                    this.act_update_quantity(data);
                    this.$notify(NOTI_ACT_UPDATE);
                } else {
                    e.target.value = this.cart.quantity;
                    this.$notify(NOTI_GREATER_THAN_ONE);
                }
                this.set_loading(false);
            }, 1000)
        }
    }
}
</script>

<style>

</style>
