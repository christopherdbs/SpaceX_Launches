<script lang="ts" setup>
  import NextLaunchSection from './NextLaunchSection.vue';
  import TableFilter from './TableFilter.vue';
  import LaunchesTable from './LaunchesTable.vue';
  import LaunchCard from './LaunchCard.vue';
  import type { Launch } from '../helpers/interfaces';
  import { ref } from 'vue';

  const selectedLaunch = ref<Launch | null>(null);
  const selectedFilter = ref('all');

  function openModal(launch: Launch) {
    selectedLaunch.value = launch;
  }

  function closeModal() {
    selectedLaunch.value = null;
  }

  function changeFilter(filter: string) {
    selectedFilter.value = filter;
  }
</script>

<template>
  <div id="main">
    <NextLaunchSection />
    <section class="bg-gray-100 pt-10">
      <h3 class="text-3xl font-bold text-gray-900 pt-10">Last Launches</h3>
      <div class="p-10">
        <TableFilter @changeFilter="changeFilter" />
        <LaunchesTable
          :selectedFilter="selectedFilter"
          @selectLaunch="openModal"
        />
      </div>
    </section>

    <LaunchCard
      v-if="selectedLaunch"
      :launch="selectedLaunch"
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
  .main {
    color: #999;
    height: 100vh;
  }
</style>
