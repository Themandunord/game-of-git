<template lang="pug">
v-container(fluid)
    v-card.mx-auto(max-width="700")
        v-list-item(three-line)
            v-list-item-content
                v-list-item-title.headline.mb-4.px-4.py-4 Let's Get Started!
                v-list-item-content.body-1.my-2.mx-4 It looks like this is your first time here. You'll need to give Game of Git access to your GitHub account via a Personal Access Token.
        v-card-actions
            v-list-item.grow
                v-row(align="center" justify="center")
                    v-btn.primary(text @click="letsGetStarted") Let's Get Started!
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

import AppStateModule from '@/store/aspects/app';

@Component
export default class NoAppKey extends Vue {
	private letsGetStarted() {
		this.$router.push('add-app-key');
	}

	get hasAppKey() {
		return AppStateModule.hasAppKey;
	}

	@Watch('hasAppKey')
	private hasAppKeyChanged() {
		if (this.hasAppKey) {
			this.$router.push({
				name: 'repositories'
			});
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
