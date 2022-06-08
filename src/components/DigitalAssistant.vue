<template>
  <div class="digitalAssistant">
    <div class="container sp-my-10 sp-py-10">
      <div class="px-lg-4 col-12 col-lg-12 col-md-12 text-center">
        <h4 class="digitalAssistant_tag" data-aos="fade-up" data-aos-delay="0">
          Digital Assistant
        </h4>
        <h2
          class="digitalAssistant_title my-4"
          data-aos="fade-up"
          data-aos-delay="1"
        >
          Digital Assistant on MS Teams
        </h2>
        <p
          class="digitalAssistant_description"
          data-aos="fade-up"
          data-aos-delay="2"
        >
          Do you inteface with customers all the time? Does your work require
          fectching or logging of data at maximum speed and efficiency? Do you
          have to log in to multiple systems or core service platforms to
          retrieve data? Do you wish some of your boring tasks to be handled by
          an assistant requiring your supervision? or there's something else we
          don't know about?
        </p>

        <router-link
          to="#"
          class="btn btn-explore mt-3"
          data-aos="fade-up"
          data-aos-delay="4"
        >
          Learn More <i class="fa fa-arrow-right ml-2"></i>
        </router-link>
      </div>

      <div class="col-12 p-0 digital-assistant">
        <!-- muted video -->
        <video class="img-fluid" autoplay muted loop data-aos="fade-up">
          <source src="../assets/images/chat.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Digital Assistant",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>