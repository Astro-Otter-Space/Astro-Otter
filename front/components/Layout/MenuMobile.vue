<script setup>
  import {toRefs} from "vue";

  const props = defineProps({
    itemsMenu: {
      type: Object,
      default: null
    },
    btnColor: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'text-grey'
    },
    bgColor: {
      type: String,
      default: 'background'
    }
  });

  const { itemsMenu, btnColor, iconColor, bgColor } = toRefs(props);
</script>

<template>
  <v-menu
    :close-on-content-click="true"
    location="bottom right"
    transition="slide-y-transition"
  >
    <template #activator="{ props }">
      <v-btn
        icon
        v-bind="props"
        :color="btnColor"
      >
        <v-icon
          :color="iconColor"
          icon="mdi-menu"
        />
      </v-btn>
    </template>
    <v-card max-width="400">
      <v-list
        v-for="item in itemsMenu"
        :key="item"
        nav
        :bg-color="bgColor"
      >
        <NuxtLink
          link
          :to="item.path"
        >
          <v-list-item-title class="mt-2">
            {{ $t(item.text) }}
          </v-list-item-title>
        </NuxtLink>
      </v-list>
    </v-card>
  </v-menu>
</template>

<style scoped>

</style>
