<template lang="pug">
v-layout(row)
    v-flex(xs12 sm66)
        v-card
            v-list(two-line)
                v-list-tile(v-for="repo in selectableRepositories" :key="repo.id" avatar)
                    v-list-tile-avatar
                        img(:src="repo.owner.avatarUrl")
                    v-list-tile-content
                        v-list-tile-title(v-text="repo.name")
                        v-list-tile-sub-title(v-if="repo.description" v-text="repo.description")
                    v-list-tile-action
                        v-icon(v-if="true" :color="getRepoTrackingColor(repo.isTracked)" @click="toggleRepoTracking(repo)") star
    
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/repositories.store';
import AppStateModule from '@/store/app.store';
import HttpClient from '../common/HttpClient';

@Component
export default class RepositoriesControlList extends Vue {
    private selectableRepositories = [];

    mounted() {
        this.loadSelectableRepositories();
    }

    get hasAppKey() {
        return AppStateModule.user.hasAppKey;
    }

    @Watch('hasAppKey')
    handleAppKeyStatusUpdate() {
        this.loadSelectableRepositories();
    }

    private getRepoTrackingColor(isTracking: boolean) {
        return isTracking ? 'blue' : 'white';
    }

    private async loadSelectableRepositories() {
        if (!this.hasAppKey) {
            console.log('doesnt have an app key, not loading repos');

            return;
        }
        console.log('loading selectable repositories');
        const selectable = await HttpClient.repositories.loadSelectableRepositories();
        console.log(selectable);
        this.selectableRepositories = selectable;
    }

    private toggleRepoTracking(repo: any) {
        console.log('toggleRepoTracking: ', repo);
        HttpClient.repositories.toggleRepositoryTracking(repo);
    }
}
</script>
