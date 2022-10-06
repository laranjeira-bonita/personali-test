<template>
  <div id="quiz" style="display: flex; flex-direction: column; align-content: flex-start; justify-content: flex-start">
    <div v-for="question in questions" :key="question.index">
      <div class="card" style="background-color: white; width: 100%; height: 100%; margin-bottom: 20px">
        <div class="card-body" style="width: 700px">
          <h2 class="card-title">{{question.index}}. {{question.name}}</h2>
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

            <a href="#" class="btn btn-primary">Go somewhere</a>

  </div>
</template>

<script>
import { ref } from "vue"
import QuestionService from '../services/QuestionService'

const questionService = new QuestionService();

export default {
  name: 'Quiz',
  methods: {
    goToQuiz(){
      this.$router.push('/category')
    },
    getQuestions() {
      questionService.getQuestions({
        current_page: this.currentPage
      }).then((response) => {
        this.questions = response.data
      });
    }
  },
  data () {
    return {
      windowWidth: ref(window.innerWidth),
      windowHeight: ref(window.innerHeight),
      currentPage: 1,
      questions: [],
      chosenResponses: []
    }
  },
  beforeMount () {
    this.getQuestions()
  },
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
  margin-top: 60px;
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
</style>
