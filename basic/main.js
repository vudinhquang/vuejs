var vueInstance = new Vue({
    el: '#app',
    data: {
        title : 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url   : 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price : '20000',
        // check : true
        sale: 0.1,
        selectedProduct: 0,
        listProductDetail: [
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            },
            {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            },
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            },
        ]
    },
    methods: {

    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;

            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        }
    }
});