import { ref, toValue, type MaybeRefOrGetter } from 'vue'

export function useFileValidation(
  acceptedExtensions?: MaybeRefOrGetter<string[] | undefined>
) {
  const currentFile = ref<File>()
  const filePreview = ref('No file chosen')
  const validationResult = ref<'valid' | { error: string }>('valid')

  function handleFileList(files: FileList): void {
    const accdExtnsVal = toValue(acceptedExtensions)

    if (files.length === 0) {
      return
    }
    if (files.length > 1) {
      validationResult.value = { error: 'multiple files selected' }
    }
    const file = files[0]

    if (accdExtnsVal && accdExtnsVal.length > 0) {
      const fileExtension = file.name.split('.')?.pop()

      if (!fileExtension || !accdExtnsVal.includes(fileExtension)) {
        validationResult.value = { error: 'invalid file type' }
        return
      }
    }
    currentFile.value = file
    validationResult.value = 'valid'
    filePreview.value = file.name
  }

  return { currentFile, filePreview, validationResult, handleFileList }
}