const app = Vue.createApp({
  data() {
    return {
      cssClass: '',
      showParagraph: true,
      backgroundColor: '',
    }
  },
  methods: {
    handleToggleParagraph() {
      this.showParagraph = !this.showParagraph;
    }
  }
});

app.mount('#assignment');