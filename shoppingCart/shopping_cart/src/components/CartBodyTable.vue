<template>
    <tbody id="my-cart-body">
        <cart-body-item />
        <cart-body-item />
        <cart-body-item />
        <cart-body-item />
    </tbody>
</template>

<script>
import CartBodyItem from './CartBodyItem';

export default {
    name: 'cart-body-table',
    components: {
        CartBodyItem
    }
}
</script>

<style>

</style>
