<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement(2)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
    // increment() {
    //   //   this.$store.state.counter++;
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   //   this.$store.state.counter--;
    //   this.$store.commit("decrement");
    // }
  }
};
</script>