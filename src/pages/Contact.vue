<template>
  <div>
    <pr-main :active="activePage">
      <template v-slot:content>
        <div>
          <h1>Contact</h1>
          <h1>Contact</h1>
          <h1>Contact</h1>
          <h1>Contact</h1>
        </div>
      </template>
    </pr-main>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created() {},
  data() {
    return {
      activePage: "contact",
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>