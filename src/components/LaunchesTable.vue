<script lang="ts" setup>
  import { ref, onMounted, computed, watchEffect } from 'vue';
  import Axios from 'axios';
  import { getFormatedDate } from '../helpers/utils';
  import type { Launch } from '../helpers/interfaces';

  const props = defineProps(['selectedFilter']);
  const emit = defineEmits(['selectLaunch']);

  const latest = ref<Launch[]>([]);

  const getTen = async () => {
    const query = computed(() => {
      let body: { [key: string]: any } = { upcoming: false };
      if (props.selectedFilter === 'Succeeded') body['success'] = true;
      if (props.selectedFilter === 'Failed') body['success'] = false;
      return body;
    });

    try {
      const response = await Axios.post(
        'https://api.spacexdata.com/v5/launches/query',
        {
          query: query.value,
          options: {
            limit: 10,
            sort: { date_utc: 'desc' },
            populate: [{ path: 'payloads' }, { path: 'launchpad' }],
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      latest.value = response.data.docs;
      latest.value.map((launch) => {
        launch.date_utc = getFormatedDate(new Date(launch.date_utc));
      });
    } catch (err) {
      console.error('Error during data fetching:', err);
    }
  };
  watchEffect(() => {
    getTen();
  });
  onMounted(getTen);

  function openModal(launch: Launch) {
    emit('selectLaunch', launch);
  }
</script>

<template>
  <div class="mt-10">
    <div class="">
      <div
        id="latestRow"
        v-for="launch in latest"
        :key="launch.id"
        @click="openModal(launch)"
        class="flex bg-white items-center px-4 py-2 hover:bg-emerald-600 cursor-pointer mb-5 shadow-md rounded-lg"
      >
        <span class="text-gray-600 pr-5">{{ launch.flight_number }}</span>
        <span class="text-gray-600 w-40 pr-2"
          ><img :src="launch.links.patch.small" class="h-25 m-auto"
        /></span>
        <div class="flex flex-col grow">
          <span
            class="text-gray-600 font-semibold text-xl justify-start text-left"
            >{{ launch.name }}</span
          >
          <span class="text-gray-500 text-sm text-left">{{
            launch.date_utc
          }}</span>
        </div>
        <span class="text-gray-600 text-lg">Click for more details</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #latestRow:hover * {
    color: white !important;
  }
</style>
