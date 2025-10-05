<script setup lang="ts">
import type { InputElmEvent } from '@/util/types'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    min?: number
    max?: number
    exclusiveMin?: boolean
    exclusiveMax?: boolean
    step?: number
    default?: number
    format?: Intl.NumberFormat
  }>(),
  {
    exclusiveMin: false,
    exclusiveMax: false,
  },
)

const num = ref(props.default)

function handleInput(ev: InputElmEvent): void {
  const val = ev.target.valueAsNumber
  if (isNaN(val)) {
    num.value = undefined
    return
  }
  maybeUpdateNum(val)
  if (num.value) {
    ev.target.value = props.format ? props.format.format(num.value) : num.value.toString()
  }
}

function maybeUpdateNum(val: number): void {
  if (props.min && (props.exclusiveMin ? val <= props.min : val < props.min)) {
    return
  }
  if (props.max && (props.exclusiveMax ? val >= props.max : val > props.max)) {
    return
  }
  num.value = val
}
</script>

<template>
<input
  class="form-control"
  type="number"
  :value="props.default"
  :min="min"
  :max="max"
  :step="step"
  @input="(ev) => handleInput(ev as unknown as InputElmEvent)"
>
</template>
