<script setup lang="ts">
import { ref } from 'vue'
import { BInputGroup, BFormInput, BInputGroupText, BDropdown, BDropdownItem } from 'bootstrap-vue-next'

const inputMode = ref<
  | 'exact'
  | 'min'
  | 'max'
  | 'range'
>('range')
</script>

<template>
<label class="form-label">Crossing Restrictions</label>
<BInputGroup>
  <BFormInput
    type="text"
    placeholder="ex. ANJLL"
  />
  <BDropdown
    text="between"
    variant="outline-secondary"
  >
    <BDropdownItem>at</BDropdownItem>
    <BDropdownItem>at or above</BDropdownItem>
    <BDropdownItem>at or below</BDropdownItem>
    <BDropdownItem>between</BDropdownItem>
  </BDropdown>
  <BFormInput
    type="number"
    placeholder="ex. 19000"
  />
  <template v-if="inputMode === 'range'">
    <BInputGroupText>&</BInputGroupText>
    <BFormInput
      type="number"
      placeholder="ex. 24000"
    />
    <BInputGroupText>ft</BInputGroupText>
  </template>
</BInputGroup>
</template>
