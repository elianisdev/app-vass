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
    <div class="row grid-row">
      <div
        class="col-4 py-2 px-2 card-image"
        v-for="(item, index) in images"
        :key="index"
      >
        <img :src="item.url" class="w-100 h-100" :alt="item.title" />
      </div>
    </div>
  </div>
</template>
