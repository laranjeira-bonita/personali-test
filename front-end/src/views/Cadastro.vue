<template>
  <div class="card">
    <h2 style="margin-bottom: 30px" class="small-title">Coloca um email para receber o relatório.</h2>
    
    <div id="cadastro">
      <label for="email1">Email</label>
      <div class="form-group">
        <input type="email" v-model="email1" class="form-control" id="email1" aria-describedby="emailHelp">
        <small id="emailWrong" v-if="!!email1&&uglyEmail" class="form-text text-muted">Email com formato errado.</small>
      </div>

      <label for="emailConfirm">Email Confirmação</label>
      <div class="form-group">
        <input type="email" class="form-control" v-model="emailConfirm" id="emailConfirm" aria-describedby="emailHelp">
        <small v-if="!!emailConfirm&&email1!==emailConfirm" id="emailHelp" class="form-text text-muted">Por favor, confirma o email.</small>
      </div>
      
      <button class="big-btn-sm" @click="createResponse()"><div>submit</div></button>
    </div>
  </div>
</template>

<script>
import OrderService from '../services/OrderService'

const orderService = new OrderService();

export default {
  name: 'Cadastro',
  methods: {
    createResponse() {
      console.log(this.$route.query.chosenResponses)
        orderService.sendResponse(this.chosenResponses)
    }
  },
  computed: {
    uglyEmail() {
      return !!this.email1 && (this.email1.length < 8 || !this.email1.match(/.*@.*\..+/))
    }
  },
  data () {
    return {
      email1: '',
      emailConfirm: '',
      errorMsg: 'Por favor, confirma o email para receber seu relatório.'
    }
  },
  }

</script>
<style>
#cadastro {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  align-content: center;
  margin-top: 60px;
  font-family: 'Kumbh Sans', sans-serif;
}

.card {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-content: center;
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

.form-control {
  transition: all 0.3s ease;
  width: 200px;
  height: 1.75rem;
  padding: 9px 12px;
  border: #b97430;
  border-radius: 17px;
  font: normal normal normal 14px/20px Nunito Sans;
  background: var(--gray-05) 0% 0% no-repeat padding-box;
  border-radius: 4px 4px 0px 0px;
  background-color: #fff;
  margin-top: 5px;
  margin-bottom: 20px;
  margin-right: 15px;
}

.form-control.input:hover {
  color: var(--gray-40);
  background: var(--gray-10) 0% 0% no-repeat padding-box;
}
.card {
  border-radius: 12px;
}
</style>
