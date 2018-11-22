var vm = new Vue({
  el: '#app',

  data: {
    message: 'Simplicity is the ultimate sophistication',
    firstName: 'John',
    lastName: 'Doe',
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },

    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },

      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },

  watch: {
    question(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debounceGetAnswer()
    }
  },

  created() {
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
  },

  methods: {
    getAnswer() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;)'
        return
      }

      this.answer = 'Thinking...'
      var vm = this
      axios
        .get('https://yesno.wtf/api')
        .then(response => vm.answer = _.capitalize(response.data.answer))
        .catch(error => vm.answer = 'Error! Could not reach the API' + error)
    }
  }
})