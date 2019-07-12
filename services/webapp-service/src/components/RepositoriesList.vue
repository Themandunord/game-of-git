<template lang="pug">
v-layout(row)
    v-flex(xs12 sm66)
        v-form
            v-container
                v-layout
                    v-flex(xs-12 md4)
                        v-text-field(v-model="userOfInterest" label="GitHub User" :placeholder="myUsername")
        v-expansion-panel
            v-expansion-panel-content(v-for="repo in selectableRepositories" :key="repo.id")
                template(v-slot:header)
                    v-layout(row)
                        v-flex(xs1 sm33)
                            v-avatar(
                                :tile="false"
                                :size="35"
                                color="grey lighten-4")
                        v-flex(xs4 sm22)
                            h3.title {{repo.name}}
                            h4.subheading.ellipsis {{repo.description}}
                        v-flex.text-xs-right(xs6 sm22)
                            //- isTracked + toggle
                            v-btn(
                                    fab
                                    small
                                    :color="repo.isTracked ? 'cyan' : 'grey'"
                                    center
                                    right
                                    relative
                                    @click.stop="toggleRepoTracking(repo)"
                                    :title="repo.isTracked ? 'Turn Tracking off' : 'Turn Tracking on'"
                                )
                                    v-icon {{repo.isTracked ? "star" : "star_border"}}
                            //- isFork
                            v-btn(
                                    fab
                                    small
                                    :color="repo.isFork ? 'cyan' : 'grey'"
                                    center
                                    right
                                    relative
                                    @click.stop=""
                                    :title="repo.isFork ? 'Repository is a Fork' : 'Repository is not a Fork.'"
                                )
                                    v-icon call_split
                            //- isPrivate
                            v-btn(
                                    fab
                                    small
                                    :color="repo.isPrivate ? 'red' : 'cyan'"
                                    center
                                    right
                                    relative
                                    @click.stop=""
                                    :title="repo.isPrivate ? 'Repository is Private' : 'Repository is Public'"
                                )
                                    v-icon {{repo.isPrivate ? 'lock' : 'lock_open'}}

                v-card
                    v-card-text
                        h4.subheading Repository Owner: {{repo.owner.login}}
                        p {{repo.name}} {{repo.url}}  {{new Date(repo.createdAtExternal)}} {{new Date(repo.updatedAtExternal)}}
                        p {{repo.description}}
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/aspects/repositories';
import AppStateModule from '@/store/aspects/app';
import HttpClient from '../common/HttpClient';
import { pluck, switchMap, debounceTime } from 'rxjs/operators';

@Component({
    subscriptions() {
        return {
            userOfInterestObservable: this.$fromDOMEvent('input', 'keyup').pipe(
                debounceTime(300),
                pluck<Event, string>('target', 'value')
            )
        };
    }
})
export default class RepositoriesControlList extends Vue {
    private selectableRepositories = [];
    private userOfInterest: string = '';
    private userOfInterestObservable: string = '';

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

    @Watch('userOfInterestObservable')
    reloadRepos() {
        this.loadSelectableRepositories();
    }

    private getRepoTrackingColor(isTracking: boolean) {
        return isTracking ? 'blue' : 'white';
    }

    get myUsername() {
        return AppStateModule.user.gitLogin;
    }

    private async loadSelectableRepositories() {
        if (!this.hasAppKey) {
            throw new Error(
                `User ${AppStateModule.user.email} has no AppKey, unable to query GitHub API`
            );
        }
        const selectable = await HttpClient.repositories.loadSelectableRepositories(
            this.userOfInterest
        );
        this.selectableRepositories = selectable;
    }

    private async toggleRepoTracking(repo: any) {
        console.log('toggleRepoTracking: ', repo);
        await HttpClient.repositories.toggleRepositoryTracking(repo);
        this.loadSelectableRepositories();
        RepositoriesStateModule.syncStoredRepositories();
    }
}
</script>

<style lang="scss" scoped>
.ellipsis {
    text-overflow: ellipsis;
}
</style>
