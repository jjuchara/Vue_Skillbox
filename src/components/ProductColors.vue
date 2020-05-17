<template>
    <li class="colors__item">
        <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" name="color-1" :value="color" checked="">
            <span class="colors__value" :style="{backgroundColor: color}">
                  </span>
        </label>
    </li>
</template>

<script>
    export default {
        name: 'ProductColors',
        props: ['color']
    }
</script>