<template>
  <div class="Header">
    <button @click="_toggle_layer('insert_layer')">추가</button>
    <br>
    <div v-if="insert_layer">
        <input type="text" v-model="inputValue_name">
        <input type="date" v-model="inputValue_birth">
        <input type="date" v-model="inputValue_obit">
        <input type="text" v-model="inputValue_genrn">
        <input type="text" v-model="inputValue_nation">
        <button @click="_insert_item()">추가></button>
    </div>
 </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";
@Component({
  data() {
    return {
      insert_layer: false,
      inputValue_name: "",
      inputValue_birth: "",
      inputValue_obit: "",
      inputValue_genrn: "",
      inputValue_nation: ""
    };
  },
  methods: {
    _toggle_layer(_target, _targetNumber, title) {
      const flag = this[_target] === true ? false : true;
      this[_target] = flag;
    },
    _insert_item() {
      let self = this;
      let addValue =
        "/add?name=" +
        self.$data.inputValue_name +
        "&birth=" +
        self.$data.inputValue_birth +
        "&obit=" +
        self.$data.inputValue_obit +
        "&genre=" +
        self.$data.inputValue_genrn +
        "&nation=" +
        self.$data.inputValue_nation;

      axios
        .post(self.$store.state.api + addValue)
        .then(function(result) {
          self.$store.commit("addTodos", result.data);
          self.$data.inputValue_name = "";
          self.$data.inputValue_birth = "";
          self.$data.inputValue_obit = "";
          self.$data.inputValue_genrn = "";
          self.$data.inputValue_nation = "";
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
export default class Artist extends Vue {
  //   @Prop() index;
}
</script>

<style scoped>
.Header {
  position: fixed;
  width: 100%;
  top: 0;
  background: gray;
  z-index: 4;
  padding-bottom: 15px;
}
.header > div {
  margin-top: 10px;
}
</style>
