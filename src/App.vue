<script setup lang="ts">
import { BApp, BFormFile, BFormGroup, BFormInput } from 'bootstrap-vue-next'
import InputRestriction from './components/InputRestriction.vue'
</script>

<template>
<BApp>
  <nav class="navbar bg-indigo">
    <div class="container-fluid">
      <a
        href="#"
        class="navbar-brand"
      >Infinite Descent</a>
    </div>
  </nav>
  <div class="container py-4 px-0 mx-auto">
    <div class="row row-cols-auto align-items-center mb-3">
      <div class="col mx-3 mb-3">
        <div style="max-width: 550px">
          <h1>An Infinite Flight tool</h1>
          <p class="mb-0 me-3">
            Modify your flight plan to include descent altitudes
            satisfying crossing restrictions and deceleration requirements
            targeting an ideal descent angle.
          </p>
        </div>
      </div>
      <div class="col mx-3 mb-3">
        <BFormGroup label="Upload flight plan">
          <BFormFile />
        </BFormGroup>
      </div>
    </div>
    <div class="row row-cols-auto">
      <div class="col m-3">
        <div class="mb-3">
          <label class="form-label">Cruise Altitude</label>
          <div class="input-group">
            <BFormInput
              type="number"
              :min="0"
              :step="100"
              placeholder="ex. 36000"
            />
            <span class="input-group-text">ft</span>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Ideal Angle</label>
          <div class="input-group">
            <BFormInput
              type="number"
              :min="0"
              :max="90"
              :step=".5"
              placeholder="ex. 3"
            />
            <span class="input-group-text">&deg;</span>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Wind</label>
          <div class="input-group">
            <BFormInput
              type="number"
              :min="0"
              :max="360"
              placeholder="ex. 260"
            />
            <span class="input-group-text">@</span>
            <BFormInput
              type="number"
              :min="0"
              :max="200"
              :step="1"
              placeholder="ex. 12"
            />
            <span class="input-group-text">kt</span>
          </div>
        </div>
      </div>
      <div class="col m-3">
        <!--<InputRestriction />-->
      </div>
    </div>
  </div>
</BApp>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
@import 'bootstrap/scss/_variables';

.bg-indigo {
  background-color: $indigo;
}

* {
  // outline: 1px solid red;
}
</style>
