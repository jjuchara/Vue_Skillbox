<template>
    <section class="catalog">
        <ul class="catalog__list">
            <ProductItem :product="product" v-for="(product, index) in products" :key="index"/>
        </ul>
        <ul class="catalog__pagination pagination">
            <ProductPagination :paginations="paginations"/>
        </ul>
    </section>
</template>

<script>
    import ProductItem from "./ProductItem";
    import ProductPagination from "@/components/ProductPagination";

    export default {
        props: [ 'products', 'paginations' ],
        name: 'ListItem',
        components: {ProductPagination, ProductItem}
    }
</script>