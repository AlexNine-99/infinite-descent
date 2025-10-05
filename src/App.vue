<script setup lang="ts">
import FileUploader from '@/components/FileUploader.vue'
import AngleSelector from './components/AngleSelector.vue'

// <comment for sake of commit ability>
</script>
 
<template>
<nav class="navbar bg-indigo">
  <div class="container-fluid">
    <a href="#" class="navbar-brand">Infinite Descent</a>
  </div>
</nav>
<div class="container py-4 px-3 mx-auto">
  <div class="row row-cols-auto mb-3">
    <div class="col mx-3 mb-3">
      <div style="max-width: 540px">
        <h1>An Infinite Flight tool</h1>
        <p class="mb-0">
          Modify your flight plan to include descent altitudes
          satisfying crossing restrictions and deceleration requirements
          targeting an ideal descent angle.
        </p>
      </div>
    </div>
    <div class="col mx-3 mb-3">
      <FileUploader :accepted-extensions="['fpl']" />
    </div>
  </div> 
  <div class="row row-cols-auto">
    <div class="col mx-3 mb-3">
      <AngleSelector />
    </div>
  </div>
</div> 
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import 'bootstrap/scss/_variables';

.bg-indigo {
  background-color: $indigo;
}
</style>
