<template>
  <div id="home">
    <div>
      <b-container class="bv-example-row">
        <carousel :autoplay="true" :perPage="1" :perPageCustom="[[480, 1], [768, 3]]">
          <slide v-for="image in images">
            <img v-bind:src="image.url">
          </slide>
        </carousel>
      </b-container>

    </div>
  </div>
</template>

<script>
import ImageData from '../assets/imageData.json';

export default {
  data() {
    return{
      images: ImageData
    }
  }
}
</script>

<style lang="scss">
.VueCarousel{
  .VueCarousel-slide{
    padding: 10px;

    img{
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>
