<script setup lang="ts">
import { ref } from 'vue'
import { useFileValidation } from '../composables/useFileValidation'

defineProps<{
  fileValidation: ReturnType<typeof useFileValidation>
}>()

const emit = defineEmits<{
  drop: [files: FileList]
}>()

const dragging = ref(false)

function handleDrop(ev: DragEvent): void {
  dragging.value = false
  if (!ev.dataTransfer) {
    return
  }
  emit('drop', ev.dataTransfer.files)
}

// prevent browser from opening dropped files
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
    // prevent moving cursor into child elements from ending drag period
    'no-child-drag': dragging,
    'bg-dark-subtle': !dragging
  }"
  style="border-style: dashed; border-width: 2px;"
  @dragenter="dragging = true"
  @dragleave="dragging = false"
  @drop.prevent="handleDrop"
>
  <slot /> <!-- button to open picker, etc. -->
</div>
</template>

<style lang="scss" scoped>
.no-child-drag > * {
  pointer-events: none; // prevent firing of 'dragleave'
}
</style>