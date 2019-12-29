<template lang="pug">
v-expand-transition
 .text-center.ma-2
    v-btn(dark @click="snackbar = true") Open Snackbar
    v-snackbar(v-model="snackbar") {{data.type}}
      v-btn(color="pink" text @click="snackbar = false") Close
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';


@Component
export default class AppEvent extends Vue {
	@Prop({
		required: true
	})
  private value!: boolean;

  get snackbar() {
    return this.value;
  }

  set snackbar(newVal: boolean) {
    this.$emit('input', newVal);
  }


  @Prop({
    required: true
  })
  private data: any;
}
</script>
