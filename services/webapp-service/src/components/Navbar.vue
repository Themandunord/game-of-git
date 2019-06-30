<template lang="pug">
div
    v-navigation-drawer(v-model="drawer" clipped fixed app)
        v-list(dense)
            v-list-tile(
                v-for="route in routes" :key="route.path" @click="routeTo(route.name)"
            )
                v-list-tile-action
                    v-icon dashboard
                v-list-tile-content
                    v-list-tile-title {{route.displayName}}
    v-toolbar(app fixed clipped-left)
        v-toolbar-side-icon(@click.stop="drawer = !drawer")
        v-toolbar-title Application
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

import AppStateModule from '@/store/aspects/app';

@Component
export default class NavBar extends Vue {
    @Prop({
        required: true
    })
    private routes!: RouteConfig[];

    public routeTo(path: string) {
        this.$router.push({
            name: path
        });
    }

    get drawer() {
        return AppStateModule.navExpanded;
    }

    set drawer(val: boolean) {
        AppStateModule.setNavExpanded(val);
    }

    // use prop values for initial data
    //   helloMsg = 'Hello, ' + this.propMessage
}
</script>
