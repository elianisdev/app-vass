<script setup>
import { onMounted, ref } from "vue";
import ImagesApi from "../../services/ImagesApi.js";
import ListMode from "../../components/image/ListMode.vue";
import GridMode from "../../components/image/GridMode.vue";

const album = ref(0);
const images = ref([]);
const imagesFiltered = ref([]);
const view = ref("grid");
const filter = ref("all");

const getImages = async (albumId) => {
  album.value = albumId;
  images.value = await ImagesApi.getPhotosByAlbum(albumId);
  imagesFiltered.value = [...images.value];
};

const changeView = (viewMode) => {
  view.value = viewMode;
};

const filterImages = (mode) => {
  filter.value = mode;

  if (filter.value === "even") {
    imagesFiltered.value = images.value.filter(
      (item) => parseInt(item.id) % 2 === 0
    );
  }
  if (filter.value === "odd") {
    imagesFiltered.value = images.value.filter(
      (item) => parseInt(item.id) % 2 !== 0
    );
  }
  if (filter.value === "all") {
    imagesFiltered.value = images.value;
  }
};

onMounted(async () => {
  await getImages(1);
});
</script>
<template>
  <div class="section images py-3">
    <div class="col-12 py-3 text-center">
      <a href="javascript:void(0)" @click="changeView('grid')" class="px-2">
        <i class="bi bi-grid-fill color-primary"></i>
      </a>

      <a href="javascript:void(0)" @click="changeView('list')" class="px-2">
        <i class="bi bi-hdd-stack-fill color-primary"></i>
      </a>
    </div>

    <div class="m-auto my-3">
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            @click="filterImages('all')"
            class="nav-link"
            :class="[filter === 'all' ? 'active' : '']"
            aria-current="page"
            >Todos</a
          >
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            @click="filterImages('even')"
            class="nav-link"
            :class="[filter === 'even' ? 'active' : '']"
            >Pares</a
          >
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0)"
            @click="filterImages('odd')"
            class="nav-link"
            :class="[filter === 'odd' ? 'active' : '']"
            >Impares</a
          >
        </li>
      </ul>
    </div>

    <GridMode
      v-if="imagesFiltered.length && view === 'grid'"
      :images="imagesFiltered"
    />

    <ListMode
      v-if="imagesFiltered.length && view === 'list'"
      :images="imagesFiltered"
    />

    <div class="col-12 text-center">
      <button class="btn btn-pink my-4">Show Me More</button>
    </div>
  </div>
</template>
