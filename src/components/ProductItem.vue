<template>
    <li class="catalog__item">
        <a class="catalog__pic" href="#">
            <img :src="product.imageUrl" :alt="product.title">
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{product.title}}
            </a>
        </h3>

        <span class="catalog__price">
              {{product.price}} ₽
            </span>

        <ul class="colors colors--black">
            <ProductColors :product="product" v-for="(color, index) in product.colors" :color="color" :key="index"/>
        </ul>
    </li>

</template>

<script>
    import ProductColors from "@/components/ProductColors";
    export default {
        components: {ProductColors},
        props: [ 'product' ],
        name: 'CardItem',
    }
</script>