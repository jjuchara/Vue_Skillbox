<template>
    <Fragment>
        <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow pagination__link--disabled"
               aria-label="Предыдущая страница">
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
            </a>
        </li>

        <li class="pagination__item" v-for="(item, index) in paginations" :key="index">
            <a class="pagination__link pagination__link">
                {{item}}
            </a>
        </li>

        <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница">
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </a>
        </li>
    </Fragment>
    
</template>

<script>
    import {Fragment} from 'vue-fragment'

    export default {
        name: 'ProductPagination',
        components: {Fragment},
        props: ['paginations']
    }
</script>