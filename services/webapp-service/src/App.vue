<template lang="pug">
    v-app(dark)
        NavBar(:routes="routes")
        v-content
            router-view
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import NavBar from '@/components/Navbar.vue';
import { ROUTES } from '@/router/routes';
import router from '@/router';
import routeManager, { RouteManager } from '@/router/RouteManager';

@Component({
    components: {
        NavBar
    }
})
export default class App extends Vue {
    private routeManager = routeManager;

    get routes() {
        return this.routeManager.myRoutes;
    }

    beforeMount() {
        // tslint:disable-next-line:no-console
        console.log(this.routeManager.myRoutes);
    }
}
</script>
