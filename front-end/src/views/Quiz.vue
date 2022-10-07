<template>
  <div id="quiz">
    <div v-for="question in questions" :key="question.index">
      <div class="card" style="background-color: white; width: 100%; height: 100%; margin-bottom: 40px">
        <div class="card-body" style="width: 760px; height: 100px; display: flex; flex-direction: column; align-items: flex-start; padding: 20px">
          <h2 class="card-title">{{question.name}}</h2>
            <div
              v-for="(res) in question.responses"
              :key="res.id"
              class="form-check form-check-inline mt-1"
              style="display: flex; flex-direction: column; align-content: flex-start; justify-content: flex-start"
              >
              <div>
              <input
                  v-model="chosenResponses[question.index -1]"
                  class="form-check-input"
                  type="radio"
                  :name="`response-${res.id}`"
                  :id="`response-${res.id}`"
                  :value="res.id"
              />
              <label class="form-check-label" :for="`response-${res.id}`">
                {{ res.name }}
              </label>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button v-if="currentPage > 1" class="big-btn-sm" @click="currentPage -= 1"><div><<<</div></button>
      <button v-if="currentPage!==4" class="big-btn-sm" @click="nextPage()"><div>>>></div></button>
      <button v-if="currentPage===4" class="big-btn-sm" @click="goToCadastro()"><div>submit</div></button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import QuestionService from '../services/QuestionService'

const questionService = new QuestionService();

export default {
  name: 'Quiz',
  methods: {
    goToCadastro() {
      const invalidLocation = this.invalidLocation()
      if (!!invalidLocation) {
        window.scrollTo({ top: invalidLocation*155, left: 0, behavior: 'smooth' });
      } else {
        this.$router.push({
        path: '/cadastro',
        query: {
          chosenResponses: this.chosenResponses
        }
      })
      }
    },
    getQuestions() {
      questionService.getQuestions({
        current_page: this.currentPage
      }).then((response) => {
        this.questions = response.data
      });
    },
    nextPage() {
      const invalidLocation = this.invalidLocation()
      if (!!invalidLocation) {
        window.scrollTo({ top: invalidLocation*155, left: 0, behavior: 'smooth' });
      } else {
        this.currentPage += 1
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },
    createResponse() {
        orderService.sendResponse(this.chosenResponses)
    },
    invalidLocation() {
      const invalidRes = this.questions.find((q) => !this.chosenResponses.includes(q.responses[0].id) && !this.chosenResponses.includes(q.responses[1].id))
      if (!!invalidRes) {
        return invalidRes.index%10 === 0 ? 9 : invalidRes.index%10-1
      } else {
        return null
      }
    }
  },
  watch: {
    currentPage: {
      deep: true,
      handler() {
        this.getQuestions()
      },
    },
    chosenResponses: {
      deep: true,
      handler() {
        const invalidLocation = this.invalidLocation()
        if (!!invalidLocation) {
          window.scrollTo({ top: invalidLocation*155, left: 0, behavior: 'smooth' });
        }
      },
    }

  },
  computed: {
    missingResponse() {
      const invalidLocation = this.invalidLocation()
      if (!!invalidLocation) {
        return window.scrollTo({ top: invalidLocation*155, left: 0, behavior: 'smooth' });
      }
    }
  },
  data () {
    return {
      windowWidth: ref(window.innerWidth),
      windowHeight: ref(window.innerHeight),
      currentPage: 1,
      perPage: 10,
      totalRows: 100,
      questions: [],
      chosenResponses: [],
      missingRes: null
    }
  },
  beforeMount () {
    this.getQuestions()
  }
  }

</script>
<style>
#quiz {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  align-content: flex-start;
  margin-top: 20px;
  font-family: 'Kumbh Sans', sans-serif;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #fff0e1
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.title {
  font-size: 34px;
  line-height: 42px;
  color: #007a5c;
}

.small-title {
  font-size: 22px;
  line-height: 26px;
  color: #007a5c;
}

.text-primary-1 {
  color: #32404d;
}

p {
  width: 300px;
}

.btn-sm {
  border-radius: 7px;
  background-color: #007a5c;
  box-shadow: inset 0 10px 30px 80px transparent;
  -webkit-transition: box-shadow 200ms ease;
  transition: box-shadow 200ms ease;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.big-btn-sm {
  border-radius: 17px;
  background-color: #007a5c;
  box-shadow: inset 0 10px 30px 80px transparent;
  color: #fff;
  font-size: 28px;
  line-height: 38px;
  font-weight: 600;
  letter-spacing: 0.2em;
}

.card {
  border-radius: 12px;
}
</style>
