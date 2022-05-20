<template>
  <div>
    <pr-header :activePage="active"></pr-header>

    <div class="sp-pt-0">
      <slot name="content"></slot>
    </div>

    <pr-switch></pr-switch>
    <pr-footer></pr-footer>
  </div>
</template>

<script>
export default {
  name: "Main",
  created() {},
  data() {
    return {};
  },
  props: {
    active: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>