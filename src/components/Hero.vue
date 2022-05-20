<template>
  <div class="hero-section row justify-content-center align-items-center">
    <div class="container d-flex justify-content-center">
      <div
        class="
          animate__animated animate__slideInUp animate__delay-1s
          col-12 col-lg-8 col-xl-10
          text-center
        "
      >
        <div class="">
          <h1
            class="
              hero-title
              text-white
              animate__animated animate__flipInX animate__delay-2s
            "
          >
            dipoleDIAMOND's IPs
          </h1>
          <p
            class="
              animate__animated animate__tada animate__delay-3s
              hero-caption
              my-2
            "
          >
            interllectual products
          </p>

          <p class="hero-text mt-5 text-center d-none d-sm-block">
            A new generation of digital products by our team of experienced and
            passionate designers and developers who are passionate about
            creating products that solve the world's most pressing problems.
          </p>

          <div class="d-md-flex justify-content-center mt-3">
            <router-link to="#" class="btn btn-book-a-demo mt-4 mx-1 mr-md-4">
              <i class="fa fa-calendar mx-2"></i> Book a Demo
            </router-link>
            <router-link to="#" class="btn btn-browse mt-4 mx-1 ml-md-4">
              <i class="fa fa-search mx-2"></i> Browse IPs
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped></style>
