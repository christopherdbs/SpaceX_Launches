<script lang="ts" setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Axios from 'axios';
  import { getCount, getFormatedDate } from '../helpers/utils';
  import type { Launch } from '../helpers/interfaces';

  const nextLaunch = ref<Launch | null>();
  const date_unix = ref<number>(0);
  const timer = ref<string>('');

  const getData = async () => {
    try {
      const response = await Axios.get(
        'https://api.spacexdata.com/v5/launches/next',
      );

      //const utcNextLaunchDate: Date = new Date(response.data.date_utc);
      //response.data.date_utc = getFormatedDate(utcNextLaunchDate);
      const fakeDate = new Date('2025-02-19T21:28:08+00:00');
      response.data.date_utc = getFormatedDate(fakeDate);

      nextLaunch.value = response.data;
      //date_unix.value = response.data.date_unix;
      date_unix.value = 1740000488;
      timer.value = getCount(date_unix.value);
      const timerInterval = setInterval(
        () => (timer.value = getCount(date_unix.value)),
        1000,
      );
      onUnmounted(() => {
        clearInterval(timerInterval);
      });
    } catch (err) {
      console.error('Erreur lors de la récupération des données:', err);
    }
  };

  onMounted(getData);
</script>

<template>
  <div
    id="nextLaunchLaunchCard"
    class="p-6 text-white bg-gray-800 shadow-lg"
    v-if="nextLaunch"
  >
    <h2 class="text-xl font-bold mb-2">Next Launch : {{ nextLaunch.name }}</h2>

    <div class="flex flex-col items-center justify-between">
      <span class="text-lg">{{ nextLaunch.date_utc }}</span>
    </div>
    <div class="text-3xl bold font-mono p-5">
      {{ 'Remaining time: ' + timer }}
    </div>
  </div>
</template>

<style scoped></style>
