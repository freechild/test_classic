<template>
  <section>
    <Header></Header>
    <div class="artist">
      <hr>
      <ol>
        <Content v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></Content>
      </ol>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Content from "~/components/Content.vue";
import Header from "~/components/Header.vue";

@Component({
  components: {
    Content,
    Header
  }
})
// console.log(@State people)
export default class extends Vue {
  @State todos;
}
</script>
<style scoped>
section > .artist ol {
  list-style-type: none;
}
.artist {
  position: relative;
  top: 30px;
  width: 100%;
}
</style>