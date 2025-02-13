<script lang="ts" setup>
  import { ref } from 'vue';
  import type { Launch } from '../helpers/interfaces';

  interface Props {
    launch: Launch;
  }
  defineProps<Props>();
  const showVideo = ref(false);

  const emit = defineEmits(['close']);
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 rounded overflow-hidden shadow-lg"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg">
      <button
        class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        @click="$emit('close')"
      >
        ✖
      </button>

      <h2 class="text-2xl font-bold mb-2">{{ launch.name }}</h2>
      <p class="text-gray-600">{{ launch.date_utc }}</p>

      <img
        v-if="launch.links.patch.large"
        :src="launch.links.patch.large"
        alt="Mission Patch"
        class="h-45 object-cover mt-4 mx-auto rounded-lg shadow-md"
      />

      <p class="mt-4 text-gray-700" v-if="launch.details">
        {{ launch.details }}
      </p>

      <div class="mt-4">
        <p class="font-semibold">Launch Site:</p>
        <p class="text-gray-600">{{ launch.launchpad.name }}</p>
      </div>

      <div class="mt-4">
        <p class="font-semibold">Payloads:</p>
        <div class="text-gray-600">
          <div
            v-for="payload in launch.payloads"
            :key="payload.id"
            class="mb-2 p-2 bg-gray-100 rounded hover:bg-emerald-500 hover:text-white"
          >
            {{ payload.name }}
            <div class="m-2">
              <span class="font-semibold">Clients: </span>
              <span v-for="customer in payload.customers" :key="customer">
                {{ customer }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="flex items-center mt-6">
          <input
            type="checkbox"
            id="showVideo"
            v-model="showVideo"
            class="mr-2"
          />
          <label for="showVideo" class="text-gray-700 cursor-pointer">
            Show YouTube Video</label
          >
        </div>
        <div class="mt-4">
          <a
            :href="launch.links.article"
            target="_blank"
            class="text-blue-500 hover:underline"
            >Read More</a
          >
        </div>
      </div>

      <div v-if="showVideo && launch.links.youtube_id" class="mt-4">
        <iframe
          class="w-full h-64 rounded-lg shadow-md"
          :src="'https://www.youtube.com/embed/' + launch.links.youtube_id"
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<style></style>
