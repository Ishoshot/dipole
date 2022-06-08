<template>
  <div>
    <pr-main :active="activePage">
      <template v-slot:content>
        <div>
          <pr-hero />
          <pr-alpha-section />
          <pr-categories />
          <pr-digital-assistant />
          <pr-exclusive />
          <pr-account-opening />
          <pr-get-started />
        </div>
      </template>
    </pr-main>
  </div>
</template>

<script>
export default {
  name: "Index",
  created() {},
  data() {
    return {
      activePage: "index",
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>