<template>
    <ProductList :products="products" :paginations="paginations"/>
</template>
<script>
    import products from "./data/products";
    import ProductList from "./components/ProductList";

    export default {
        name: 'App',
        components: {ProductList},
        data() {
            return {
                products,
                paginations: [1,2,3,4,5,6,7,8,9,10]
            }
        }
    }
</script>

