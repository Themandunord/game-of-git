<template lang="pug">
v-container(fluid)
    blockquote.blockquote
        h2.display-3 A Game of Git

        p Git is Love. Git is Life.
        p We code because we love to and we love to have fun.
            | The evolution of a codebase is an intricate dance that fascinates and inspires us to achieve more.
        p This application is designed to add a sense of adventure to the development sprint and its related tasks utilizing the rich API provided through GitHub.

    Game

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Game from '../../game/components/Game.vue';

@Component({
	components: {
		Game
	}
})
export default class Home extends Vue {}
</script>
