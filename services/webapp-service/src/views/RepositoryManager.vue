<template lang="pug">
    h1 Repository Manager
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    props: {
        propMessage: String
    }
})
export default class RepositoryManager extends Vue {}
</script>
