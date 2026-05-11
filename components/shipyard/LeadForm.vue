<template>
  <section id="contact" class="lead-section">
    <div class="container">

      <div class="lead-inner">
        <p class="lead-section-label">{{ content.eyebrow }}</p>
        <h2 class="lead-title">{{ content.title }}</h2>
        <p class="lead-sub">{{ content.description }}</p>
        <!-- HubSpot Form Container -->
        <div id="ShipyardHubspotForm" class="w-full mt-8 lg:mt-12"></div>
        <p class="form-note">{{ content.form_note }}</p>
      </div>

    </div>
  </section>
</template>


<script>

export default {
  name: "LeadForm",

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },

  mounted() {
    this.loadHubSpotForm();
  },

  methods: {
    loadHubSpotForm() {
      // SSR safety (important in Nuxt 2)
      if (process.server) return;
      // Avoid duplicate script injection
      if (window.hbspt) {
        this.renderForm();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.onload = () => {
        this.renderForm();
      };
      document.body.appendChild(script);
    },

    renderForm() {
      if (!window.hbspt) return;
      const target = document.querySelector("#ShipyardHubspotForm");
      if (!target) return;
      window.hbspt.forms.create({
        portalId: "1873794",
        formId: "c1c5c2ae-ee2a-4261-8f36-4b75aa3acf08",
        region: "na1",
        target: "#ShipyardHubspotForm",
      });
    }
  }
};
</script>
