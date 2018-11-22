var app = new Vue({
  el: '#app',

  data: {
    title: 'Vue - Introduction',
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    text: 'Hey, Vue!!!',
    model: 'Text dynamically updated...'
  },

  methods: {
    reverseMessage
  }
})

function reverseMessage() {
  this.text = this.text.split('').reverse().join('')
}

//////////
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})