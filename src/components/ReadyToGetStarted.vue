<template>
  <div class="container sp-my-10">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 row justify-content-center">
        <div class="scale_up"></div>

        <div class="text-center">
          <h2 class="gs_title my-3" data-aos="fade-up" data-aos-delay="1">
            Ready to get started?
          </h2>
          <p class="gs_description" data-aos="fade-up" data-aos-delay="2">
            We've compiled our top products to help you scale in sales,
            marketing, finance, eduactional, and more.
          </p>
        </div>

        <router-link
          to="#"
          class="btn btn-get-started mt-2"
          data-aos="fade-up"
          data-aos-delay="2"
        >
          Browse IPs <i class="fa fa-search ml-2"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStarted",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="css" scoped>
.scale_up {
  background-image: url("../assets/images/scale_up.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 6em;
  height: 6em;
}

.gs_title {
  font-size: 2rem;
  font-weight: 600;
}

.gs_description {
  font-size: 1.1rem;
  line-height: 1.5;
}

.btn-get-started {
  background-color: var(--primary-bg);
  border: 2px solid var(--primary-bg);
  color: var(--text-white) !important;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.7rem;
}
</style>