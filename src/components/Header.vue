<template>
  <div>
    <b-navbar toggleable="lg" class="container-fluid pr-navbar py-4 px-lg-4">
      <div class="container p-0">
        <b-navbar-brand class="img-fluid" href="#">
          <img
            src="../../src/assets/images/logo/ddlogo.png"
            alt="dDL Logo"
            class="pr-logo"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="
              container-fluid
              align-items-start align-items-lg-center
              justify-content-md-end justify-content-lg-between
            "
          >
            <div class="d-lg-flex offset-lg-1 pr-nav">
              <b-nav-item href="/" class="mx-md-3 mx-lg-4">Home</b-nav-item>
              <b-nav-item href="#" class="mx-md-3 mx-lg-4">About</b-nav-item>
              <b-nav-item href="#" class="mx-md-3 mx-lg-4">Contact</b-nav-item>
            </div>
            <div class="pr-nav">
              <b-nav-item href="#" class="book-a-demo px-3 py-2"
                ><i class="mx-2 fa fa-calendar"></i>Book a Demo</b-nav-item
              >
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import $ from "jquery";

$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    // $(".pr-navbar").addClass("fixed-top");
  } else {
    // $(".pr-navbar").removeClass("fixed-top");
  }
});

export default {
  name: "Header",
  created() {},
  data() {
    return {};
  },
  props: {
    activePage: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="css" scoped>
</style>