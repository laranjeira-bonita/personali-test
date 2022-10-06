<template>
    <div id="home">
    <div v-if="windowWidth <= 600">
      <div class="container justify-between">
                  <h2 style="margin-bottom: 30px" class="small-title">Utilize nossa ferramenta para se autoconhecer melhor</h2>

        <div class="row">
          <img height="250px" width="250px" :src="girlImg" class="icon" style="margin-right:100px" />
          <h4 style="margin-bottom: 70px">Faz o teste de 100 perguntas.</h4>
        </div>
        <div class="row">
          <img height="250px" width="250px" :src="boyImg" class="icon" />
          <h4 style="margin-bottom: 70px">Pronto, já sabe sua personalidade.</h4>
        </div>
        <div class="text-primary-1">
          <h4 style="margin-bottom: 30px">MBTI é muito utilizado em processos seletivos para identificar as personalidades dos candidatos.</h4>
          <h4 style="margin-bottom: 70px">Recebe sugestão de profissão para você.</h4>
        </div>

        <button class="btn-sm" @click="goToQuiz"><div>START&nbsp;THE&nbsp;TEST</div></button>
      </div>
    </div>

    <div v-else>
      <div class="container justify-between">
        <div class="text-primary-1">
          <div class="row">
            <img height="250px" width="250px" :src="girlImg" class="icon" style="margin-right:100px" />
            <img height="250px" width="250px" :src="boyImg" class="icon" />
          </div>
          <h1 style="margin-bottom: 30px" class="title">Utilize nossa ferramenta para se autoconhecer melhor</h1>
          <h2 style="margin-bottom: 30px">MBTI é muito utilizado em processos seletivos para identificar as personalidades dos candidatos.</h2>
          <h2 style="margin-bottom: 30px">Encontra o tipo da sua personalidade com nosso teste.</h2>
          <h2 style="margin-bottom: 30px">Melhora áreas de sua vida pessoal e profissional.</h2>
          <h2 style="margin-bottom: 30px">Recebe o relatório em poucos minutos.</h2>
        </div>

        <button class="big-btn-sm" @click="goToQuiz"><div>START&nbsp;THE&nbsp;TEST</div></button>
      </div>
    </div>

  </div>
</template>

<script>

import { ref } from "vue"
import girlImg from '../../src/assets/girl.svg';
import boyImg from '../../src/assets/boy.svg';

export default {
    name: 'Home',
    props: {
    },
     methods: {
        goToQuiz(){
        this.$router.push('/quiz')
        }
    },
    data () {
        return {
        windowWidth: ref(window.innerWidth),
        girlImg,
        boyImg
        }
    },
    beforeMount() {
    },
    
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
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