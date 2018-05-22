<template>
  <li class="artist">
    <div>name :
        <input type="text" v-bind:value="todo.name" id="name" v-on:change="_input_change(todo._id,index,$event)">
    </div>
    <div>birth :
        <input type="date" v-bind:value="todo.birth" id="birth" v-on:change="_input_change(todo._id,index,$event)">
    </div>
    <div>obit :
        <input type="date" v-bind:value="todo.obit" id="obit" v-on:change="_input_change(todo._id,index,$event)">
    </div>
    <div>genre :
        <input type="text" v-bind:value="todo.genre" id="genre" v-on:change="_input_change(todo._id,index,$event)">
    </div>
    <div>nation :
        <input type="text" v-bind:value="todo.nation" id="nation" v-on:change="_input_change(todo._id,index,$event)">
    </div>
    <button v-on:click="_delete_item(todo._id,index)">삭제</button>
  </li>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import axios from "axios";
@Component({
  methods: {
    _delete_item(_target: string, index: number): void {
      let self = this;
      let addValue = "/delete?id=" + _target;
      axios
        .post(self.$store.state.api + addValue)
        .then(function(result) {
          if (result.data === true) {
            self.$store.commit("deleteTodos", index);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    _input_change(targetID, index, event) {
      let self = this;
      let arr = <any>[index, event.target.id, event.target.value];
      let addValue =
        "/modify?id=" +
        targetID +
        "&field=" +
        event.target.id +
        "&fieldValue=" +
        event.target.value;

      axios
        .post(self.$store.state.api + addValue)
        .then(function() {
          self.$store.commit("modifyTodos", arr);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
export default class Artist extends Vue {
  @Prop() todo;
  @Prop() index;
}
</script>

<style scoped>
li {
  border: solid 2px;
  padding-left: 1%;
  padding-bottom: 2%;
}
li > div {
  font-size: 18px;
  /* margin-right: 15px; */
}
li > div > input {
  position: absolute;
  margin-top: 3px;
  left: 13%;
  width: 19%;
}
li > button {
  position: relative;
  top: 7px;
}
</style>
