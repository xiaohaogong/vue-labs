var vm = new Vue({
  el: '#app',

  data: {
    isActive: false,
    arrayClass: ['active', 'big'],
    style1: {
      color: '#00f',
      background: '#fff',
      fontWeight: 'bold'
    },
    style2: {
      padding: '6px 12px',
      'text-align': 'center'
    }
  },

  methods: {
    toggleClass() {
      this.isActive = this.isActive ? false : true
    }
  },

  computed: {
    computedClass() {
      return this.isActive ? {} : { active: true }
    }
  }
})