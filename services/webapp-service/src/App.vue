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
  // use prop values for initial data
  //   helloMsg = 'Hello, ' + this.propMessage
  //   private routes: IRoute = [];// = ROUTES;

  private routeManager = routeManager;

  get routes() {
    return this.routeManager.myRoutes;
  }

  beforeMount() {
    console.log(this.routeManager.myRoutes);
  }
}
</script>
