<template>
  <div id="slider" class="container__right" :style="`background-image: url(${require(`../assets/image/models/${image}.png`)})`">
    <div class="slider">
      <div>
        <svg @click="prev" width="79" height="79" viewBox="0 0 79 79" fill="#C4FF33" stroke="#C4FF33" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.0001 39.5001L40.5001 77.0001M3.0001 39.5001L40.5001 2.00012M3.0001 39.5001L78.3179 39.5001" stroke-width="4"/>
        </svg>
        <svg @click="next" width="79" height="79" viewBox="0 0 79 79" fill="#C4FF33" stroke="#C4FF33" xmlns="http://www.w3.org/2000/svg">
          <path d="M75.3178 39.5L37.8178 2M75.3178 39.5L37.8178 77M75.3178 39.5H0" stroke-width="4"/>
        </svg>
      </div>
      <button class="button_green">{{ $t(`button.${image}`) }}</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Slider",
  data() {
    return {
      counter: 0,
      image: {},
      imageArray: [
        'anorak',
        'anorak-black',
        't-short',
      ],
    }
  },
  watch: {
    counter: {
      handler(newValue) {
        this.image = this.imageArray[newValue];
      },
      immediate: true
    }
  },
  methods: {
    prev() {
      if (this.counter <= 0) {
        this.counter = this.imageArray.length;
      }
      this.counter--
    },
    next() {
      this.counter++
      if (this.counter >= this.imageArray.length) {
        this.counter = 0;
      }
    }
  }
}
</script>

<style scoped>

</style>
