<template lang="pug">
v-container(fluid)
    h2.display-3 GitHub Repositories
    RepositoriesList
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import RepositoriesList from '@/components/repositories/RepositoriesList.vue';

@Component({
	components: {
		RepositoriesList
	}
})
export default class Repositories extends Vue {
	beforeMount() {
		// RepositoriesStateModule.syncStoredRepositories();
	}
}
</script>
