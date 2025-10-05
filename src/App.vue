<script setup lang="ts">
import FileUploader from '@/components/FileUploader.vue'
import InputNumber from './components/InputNumber.vue'
</script>

<template>
<nav class="navbar bg-indigo">
  <div class="container-fluid">
    <a
      href="#"
      class="navbar-brand"
    >Infinite Descent</a>
  </div>
</nav>
<div class="container py-4 px-3 mx-auto">
  <div class="row row-cols-auto align-items-center mb-3">
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
    <div class="col m-3">
      <div class="mb-3">
        <label class="form-label">Cruise Altitude</label>
        <div class="input-group">
          <InputNumber
            :min="0"
            :step="100"
            :default="36000"
          />
          <span class="input-group-text">ft</span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Ideal Angle</label>
        <div class="input-group">
          <InputNumber
            :min="0"
            :max="90"
            :step=".5"
            :default="3"
            :exclusive-min="true"
            :exclusive-max="true"
          />
          <span class="input-group-text">&deg;</span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Wind</label>
        <div class="input-group">
          <InputNumber
            :min="0"
            :max="360"
          />
          <span class="input-group-text">@</span>
          <InputNumber
            :min="0"
            :max="200"
            :step="1"
            :default="0"
          />
          <span class="input-group-text">kt</span>
        </div>
      </div>
      <div class="col m-3" />
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
