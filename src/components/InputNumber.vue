<script setup lang="ts">
import type { InputElmEvent } from '@/util/types'
import { ref } from 'vue'

interface Props {
  min?: number
  max?: number
  defaultVal?: number
  step?: number
  exclusiveMin?: boolean
  exclusiveMax?: boolean
} 

const { 
  min,
  max,
  defaultVal,
  step,
  exclusiveMin = false,
  exclusiveMax = false 
} 
  = defineProps<Props>()

const num = ref(defaultVal)

function handleInput(ev: InputElmEvent): void {
  const val = ev.target.valueAsNumber
  if (isNaN(val)) {
    num.value = undefined
    return
  }
  maybeUpdateNum(val)
  if (num.value) {
    ev.target.value = num.value.toString()
  }
}

function maybeUpdateNum(val: number): void {
  if (min && (exclusiveMin ? val <= min : val < min)) {
    return
  }
  if (max && (exclusiveMax ? val >= max : val > max)) {
    return
  }
  num.value = val
}
</script>

<template>
<input
  class="form-control"
  type="number"
  :value="defaultVal"
  :min="min"
  :max="max"
  :step="step"
  @input="(ev) => handleInput(ev as unknown as InputElmEvent)"
>
</template>