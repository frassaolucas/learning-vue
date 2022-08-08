const app = Vue.createApp({
  data() {
    return {
      keyDownInputValue: '',
      enterInputValue: '',
    }
  },
  methods: {
    showAlert() {
      alert('Alert is showing')
    },
    handleChangeInput(event) {
      this.keyDownInputValue = event.target.value;
    },
    handleChangeEnterInput(event) {
      this.enterInputValue = event.target.value;
    }
  }
});

app.mount('#assignment');