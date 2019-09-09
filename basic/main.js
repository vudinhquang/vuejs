var vueInstance = new Vue({
    el: '#app',
    data: {
        title : 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url   : 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price : '12000',
        check : true
    },
    methods: {
        formatPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});