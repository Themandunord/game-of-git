<template lang="pug">
v-container(fluid)
    AddAppKeyForm
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppStateModule from '@/store/aspects/app';
import AddAppKeyForm from '@/components/forms/AddAppKeyForm.vue';

@Component({
	components: {
		AddAppKeyForm
	}
})
export default class AddAppKey extends Vue {
}
</script>
