<template>
  <v-sheet
    elevation="1"
    class="mx-auto landing-warpper"
    rounded
  >
    <v-card
      class="card-shadow"
      color="background"
    >
      <v-card-title>
        <v-icon
          icon="mdi-information-outline"
          class="mr-2"
          left
        />
        {{ $t('dso.title.card_information') }}
      </v-card-title>
      <v-list-item
        v-for="(item, i) in dsoData"
        :key="i"
        :value="item"
        color="primary"
      >
        <template #prepend>
          <v-icon :icon="item.icon" />
        </template>

        <v-list-item-title left>
          <v-row>
            <v-col
              v-if="!isMobile"
              cols="6"
              sm="3"
            >
              {{ item.label }}
            </v-col>
            <v-col
              cols="12"
              sm="7"
            >
              {{ item.value }}
            </v-col>
          </v-row>
        </v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-card-text align="justify">
        {{ description }}
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script setup>
import {computed} from "vue";

defineProps({
  dsoData: {
    type: Object,
    default: null
  },
  description: {
    type: String,
    default: ''
  }
})

const { isMobile } = useDevice();
</script>

<style scoped>
</style>
