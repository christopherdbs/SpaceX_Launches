<script setup lang="ts">
  import { ref, watch } from 'vue';

  const emit = defineEmits(['changeFilter']);

  const selectedOption = ref<string>('All');
  const options = ref<string[]>(['All', 'Succeeded', 'Failed']);
  const isOpen = ref<boolean>(false);
  watch(selectedOption, (newValue) => {
    emit('changeFilter', newValue);
  });
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const closeDropdown = () => {
    isOpen.value = false;
  };

  const selectOption = (option: string) => {
    selectedOption.value = option;
    closeDropdown();
  };
</script>

<template>
  <div class="flex items-center justify-end bg-gray-100">
    <div class="w-64">
      <div class="relative">
        <!-- Dropdown personnalisé avec une flèche animée -->
        <div
          @click="toggleDropdown"
          @blur="closeDropdown"
          tabindex="0"
          class="w-full mt-1 py-2 px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer flex justify-between items-center"
        >
          <span>{{ selectedOption || 'Options' }}</span>
          <svg
            :class="{ 'transform rotate-180': isOpen }"
            class="w-5 h-5 text-gray-500 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div
          :class="{ 'max-h-60': isOpen, 'max-h-0': !isOpen }"
          class="absolute mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300"
        >
          <ul class="flex flex-col">
            <li
              v-for="option in options"
              :key="option"
              @mousedown.prevent="selectOption(option)"
              class="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {{ option }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  li {
    list-style: none;
    padding: 15px;
    background-color: rgb(240, 240, 240);
    transition: background-color 0.1s;
  }

  li:hover {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    transition: background-color 0.1s;
  }
  .group:hover .dropdown-content,
  .group:focus-within .dropdown-content {
    max-height: 500px; /* Ajuster en fonction de la hauteur de votre contenu */
  }
</style>
