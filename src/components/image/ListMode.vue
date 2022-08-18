<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 py-2" v-for="(item, index) in images" :key="index">
        <div class="row">
          <div class="col-2 text-center">
            <img :src="item.thumbnailUrl" class="w-100" :alt="item.title" />
          </div>
          <div class="col-8 border-bottom">
            <h4 class="pt-2">Title: {{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
