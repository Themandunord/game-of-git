<template lang="pug">
v-container(fluid)
    h2.display-3 Repository Dashboard for Repo Id (internal) {{id}}
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
export default class RepositoryDashboard extends Vue {
    @Prop({
        required: true
    })
    id!: string;
}
</script>
