var vm = new Vue({
  el: '#app',

  data: {
    on: true,
    type: '',
    loginWithEmail: true,
  },

  methods: {
    toggle() {
      this.on = this.on ? false : true
    },

    toggleLoginType() {
      this.loginWithEmail = this.loginWithEmail ? false : true
    }
  },

  computed: {
    typeTreated() {
      return this.type.toLowerCase()
    }
  }
})