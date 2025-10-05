<script setup lang="ts">
import { ref } from 'vue'
import { useFileValidation } from '../composables/useFileValidation'

const props = defineProps<{
  fileValidation: ReturnType<typeof useFileValidation>
}>()
const { handleFileList } = props.fileValidation
const dragging = ref(false)

function handleDrop(ev: DragEvent): void {
  dragging.value = false
  if (!ev.dataTransfer) {
    return
  }
  handleFileList(ev.dataTransfer.files)
}

window.addEventListener('dragover', (ev) => ev.preventDefault())
window.addEventListener('drop', (ev) => ev.preventDefault())
</script>

<template>
<div
  ref="dropzone"
  :class="{
    'card': true,
    'border-light-subtle': true,
    'bg-light-subtle': dragging,
    'no-child-drag': dragging,
    'bg-dark-subtle': !dragging
  }"
  style="border-style: dashed; border-width: 2px;"
  @dragenter="dragging = true"
  @dragleave="dragging = false"
  @drop.prevent="handleDrop"
>
  <slot />
</div>
</template>

<style lang="scss" scoped>
.no-child-drag > * {
  pointer-events: none;
}
</style>