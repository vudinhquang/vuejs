<template>
    <div class="media product">
        <div class="media-left">
            <a href="#">
                <img class="media-object" :src="urlImage" alt="charmander">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{ product.name }}</h4>
            <p>{{ product.summary }}</p>
            <template v-if="product.canBuy">
                <input v-model="quantity" type="text" value="1" min="1">
                <a @click.prevent="handleBuyProduct" href="#" class="price">{{ formatPrice }}</a>
            </template>

            <span v-else class="price">{{ formatPrice }}</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { toCurrency, validateQuantity } from '../helpers'
import { NOTI_GREATER_THAN_ONE } from '../constants/config'
export default {
    name: 'product-item',
    props: {
        product: { type: Object, default: {} }
    },
    data() {
        return {
            quantity: 1
        }
    },
    computed: {
        urlImage() {
            return '/dist/images/' + this.product.image;
        },
        formatPrice() {
            return toCurrency(this.product.price, 'USD', 'right');
        }
    },
    methods: {
        ...mapActions({
            'actBuyProduct': 'cart/actBuyProduct'
        }),
        handleBuyProduct() {
            const check = validateQuantity(this.quantity);
            if (check) {
                let data = {
                    product:this.product,
                    quantity: parseInt(this.quantity)
                };
                this.actBuyProduct(data);
            } else {
                this.$notify(NOTI_GREATER_THAN_ONE);
                // console.log('dữ liệu không hợp nệ', this.quantity);
            }
        }
    }
}
</script>

<style>

</style>
