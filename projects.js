new Vue({
  el: '#app',
  template: `<div><div class="flex" v-for="(project, index) in projects" :key="index">
        <div class="checkbox">
          <input
            type="checkbox"
            value="1"
            id="cb"
            name=""
            disabled
            :checked="project.done"
          />
          <label for="cb"></label>
        </div>
        <a v-if="project.url" :href="getURL(project.url)" target="_blank" class="tag">{{ index + 1 }}. {{ project.name }}</a>
        <span v-else>{{ index + 1 }}. {{ project.name }}</span>
        </div></div>`,
  data: {
    baseURL: 'https://github.com/hundreddaysofvue',
    projects: [
      {
        name: 'Paypal Calculator PWA',
        done: true,
        url: '/project1/'
      },
      {
        name: 'Functional Bingo',
        done: false,
        url: null
      },
      {
        name: 'Tic - Tac - Toe',
        done: false,
        url: null
      },
      {
        name: 'Markdown Multi - editor',
        done: false,
        url: null
      },
      {
        name: 'Calendar Schedule',
        done: false,
        url: null
      },
      {
        name: 'JSON as HTML forms',
        done: false,
        url: null
      },
      {
        name: 'Shopping cart',
        done: false,
        url: null
      },
      {
        name: 'Users and Notes',
        done: false,
        url: null
      },
      {
        name: 'Students and Records',
        done: false,
        url: null
      },
      {
        name: 'Front ATM',
        done: false,
        url: null
      },
      {
        name: 'Notebook PWA',
        done: false,
        url: null
      },
      {
        name: 'O’Clock',
        done: true,
        url: '/project12/'
      },
      {
        name: 'Online CV',
        done: false,
        url: null
      },
      {
        name: 'Paper Planet',
        done: false,
        url: null
      },
      {
        name: 'mylightbulb',
        done: true,
        url: '/project15/'
      },
      {
        name: 'JSON UI',
        done: false,
        url: null
      },
      {
        name: 'Github Analytics Client',
        done: false,
        url: null
      },
      {
        name: 'Wikipedia Search Engine',
        done: false,
        url: null
      },
      {
        name: 'Show the Local Weather',
        done: false,
        url: null
      },
      {
        name: 'Random Quote Machine',
        done: false,
        url: null
      },
      {
        name: 'Coelho.js',
        done: true,
        url: '/project21/'
      },
      {
        name: 'Reddit Clone',
        done: false,
        url: null
      },
      {
        name: 'Capturameste (it means “Capture this” in English) *',
        done: false,
        url: null
      },
      {
        name: 'FreeCodeCamp Picks Bot',
        done: false,
        url: null
      },
      {
        name: 'Fresk',
        done: false,
        url: null
      },
      {
        name: 'Kanbanizer',
        done: false,
        url: null
      },
      {
        name: 'Simon\'s Game',
        done: false,
        url: null
      },
      {
        name: 'Functional Simon\'s Game',
        done: false,
        url: null
      },
      {
        name: 'Piano',
        done: false,
        url: null
      },
      {
        name: 'Vuena Gente (it means “Good People” in English) *',
        done: false,
        url: null
      },
      {
        name: 'Cryptocurrency Tracker PWA',
        done: false,
        url: null
      },
      {
        name: 'Own Wepback/Parcel/Tool configuration',
        done: false,
        url: null
      },
      {
        name: 'WATL (Why Another To-do List)',
        done: false,
        url: null
      },
      {
        name: 'WAFTL (Why Another Functional To-do List)',
        done: false,
        url: null
      },
      {
        name: 'Sortable Drag & Drop Generic List',
        done: false,
        url: null
      },
      {
        name: 'Table Generator Component',
        done: false,
        url: null
      },
      {
        name: 'Slot Machine Game',
        done: false,
        url: null
      },
      {
        name: '¿Yes or Not?',
        done: false,
        url: null
      },
      {
        name: 'CringeTube PWA',
        done: false,
        url: null
      },
      {
        name: 'Mastermind',
        done: false,
        url: null
      },
      {
        name: 'Functional Mastermind',
        done: false,
        url: null
      },
      {
        name: 'Klondike',
        done: false,
        url: null
      },
      {
        name: 'Pomodoro Clock',
        done: false,
        url: null
      },
      {
        name: 'Mérida, Venezuela’s Touristic Map',
        done: false,
        url: null
      },
      {
        name: 'Biblical Devotional PWA',
        done: false,
        url: null
      },
      {
        name: 'SVGatos (it means “Scalable Vector Cats” in English) *',
        done: false,
        url: null
      },
      {
        name: 'Snake\’s Game',
        done: false,
        url: null
      },
      {
        name: 'Functional Snake\’s Game',
        done: false,
        url: null
      },
      {
        name: 'It\’s a Trump!',
        done: false,
        url: null
      },
      {
        name: 'Super Virtual G',
        done: false,
        url: null
      }
    ]
  },
  methods: {
    getURL(projectName) {
      return `${this.baseURL}${projectName}`
    }
  }
})