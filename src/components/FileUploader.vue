<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useFileValidation } from '@/composables/useFileValidation'
import FileDropzone from './FileDropzone.vue'
import type { InputElmEvent } from '@/util/types'

const props = defineProps<{
  acceptedExtensions?: string[]
}>()

const fileValidation = useFileValidation(() => props.acceptedExtensions)
const { validationResult, filePreview, handleFileList } = fileValidation

const inputElm = useTemplateRef('input')

function capitalizeFirst(str: string): string {
  const chars = str.split('')
  chars[0] = chars[0].toUpperCase()
  return chars.join('')
}

function handleFileSelection(ev: InputElmEvent): void {
  if (ev.target.files) {
    handleFileList(ev.target.files)
  }
}
</script> 

<template>
<FileDropzone :file-validation="fileValidation">
  <input
    ref="input"
    type="file"
    :accept="acceptedExtensions?.join(' ')"
    style="display: none"
    @change="(ev) => handleFileSelection(ev as InputElmEvent)"
  >
  <div class="row row-cols-auto align-items-center m-4">
    <button
      class="btn btn-primary"
      @click="inputElm?.showPicker"
    >
      Choose file
    </button>
    <span class="text-center">
      <p class="m-0">{{ filePreview }}</p>
      <p
        v-if="validationResult !== 'valid'"
        class="m-0 text-danger"
      >
        {{ capitalizeFirst(validationResult.error) }}!
      </p>  
    </span>
  </div>
</FileDropzone>
</template>