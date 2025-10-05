<script setup lang="ts">
import type { InputElmEvent } from '@/util/types'
import { ref } from 'vue'

const angle = ref(3)

function handleInput(ev: InputElmEvent): void {
  const val = ev.target.valueAsNumber
  if (isNaN(val)) {
    return
  }
  if (val > 0 && val < 90) {
    angle.value = val
  }
  ev.target.value = angle.value.toString()
}
</script>

<template>
<label class="form-label">Ideal Angle</label> 
<div class="input-group">
  <input
    type="number"
    value="3"
    min="0"
    max="90"
    step=".5"
    class="form-control"
    @input="(ev) => handleInput(ev as unknown as InputElmEvent)"
  >
  <span class="input-group-text">&deg;</span>
</div>
</template>