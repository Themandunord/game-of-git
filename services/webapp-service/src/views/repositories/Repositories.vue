<template lang="pug">
v-container(fluid)
    h2.display-3 GitHub Repositories Search

    template(v-if="!hasAppKey")
        v-alert(:value="true" type="info")
            | No GitHub App Keys detected. Add an App Key in order to access repositories and begin your game.
            br
            AddAppKeyForm
    template(v-else)
        RepositoriesList
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import AddAppKeyForm from '@/components/AddAppKeyForm.vue';
import RepositoriesList from '@/components/RepositoriesList.vue';

@Component({
	components: {
		AddAppKeyForm,
		RepositoriesList
	}
})
export default class Repositories extends Vue {
	get hasAppKey() {
		return AppStateModule.user.hasAppKey;
	}
	beforeMount() {
		RepositoriesStateModule.syncStoredRepositories();
	}
}
</script>
