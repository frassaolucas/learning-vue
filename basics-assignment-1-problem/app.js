const app = Vue.createApp({
  data() {
    return {
      name: 'Lucas Frassão',
      age: 31,
      image: 'https://picsum.photos/200/300',
      inputDefaultValue: 'This is the default input value'
    }
  },
  methods: {
    ageInFive() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    }
  }
})

app.mount('#assignment');