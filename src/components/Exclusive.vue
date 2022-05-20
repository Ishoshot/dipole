<template>
  <div class="exclusive container sp-my-10 sp-py-7">
    <div class="px-lg-4 col-12 col-lg-7 col-md-12">
      <h4 class="exclusive_tag" data-aos="fade-up" data-aos-delay="0">
        Digital Assistant
      </h4>
      <h2 class="exclusive_title my-3" data-aos="fade-up" data-aos-delay="1">
        Lorem ipsum dolor sit adipisicing elit.
      </h2>
      <p class="exclusive__description" data-aos="fade-up" data-aos-delay="2">
        Do you inteface with customers all the time? Does your work require
        fectching or logging of data at maximum speed and efficiency? Do you
        have to log in to multiple systems or core service platforms to retrieve
        data? Do you wish some of your boring tasks to be handled by an
        assistant requiring your supervision? or there's something else we don't
        know about?
      </p>
      <p class="exclusive__description" data-aos="fade-up" data-aos-delay="3">
        Check out our <span class="custom_tag">custom</span> Digital Assistant
        deployed on <b>Microsoft Teams.</b>
      </p>

      <router-link
        to="#"
        class="btn btn-explore mt-2"
        data-aos="fade-up"
        data-aos-delay="4"
      >
        Learn More <i class="fa fa-arrow-right ml-2"></i>
      </router-link>
    </div>

    <div class="col-12 d-none d-lg-block p-0 teams-assistant">
      <!-- <img
        src="../assets/images/exclusive_chatbot.png"
        alt="teams-assistant"
        class="img-fluid"
        data-aos="fade-up"
      /> -->
      <!-- muted video -->
      <video class="img-fluid" autoplay muted loop data-aos="fade-up">
        <source src="../assets/images/chat.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exclusive",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>