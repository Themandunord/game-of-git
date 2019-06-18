<template lang="pug">
v-container(fluid)
    h2.display-3 My Repositories
        
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RepositoriesStateModule from '@/store/repositories.store';

@Component
export default class MyRepositories extends Vue {
  get repositories() {
    return RepositoriesStateModule.repositories;
  }
}
</script>
