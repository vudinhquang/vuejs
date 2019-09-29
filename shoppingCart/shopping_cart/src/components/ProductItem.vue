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
                <input name="quantity-product-1" type="number" value="1" min="1">
                <a data-product="1" href="#" class="price"> 12 USD </a>
            </template>

            <span v-else class="price"> 12 USD</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'product-item',
    props: {
        product: { type: Object, default: {} }
    },
    computed: {
        urlImage() {
            return '/dist/images/' + this.product.image;
        }
    }
}
</script>

<style>

</style>
