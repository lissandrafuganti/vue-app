<template>
<div class="login">
  <md-toolbar class="center-xs">
    <div class="md-title">Entrar no sistema</div>
  </md-toolbar>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1 center-xs">
        <md-subheader class="center-xs">Faça seu login agora</md-subheader>
        <form v-on:submit="handleSubmit($event)">
          <md-input-container>
            <label>Empresa</label>
            <md-input v-model="user.empresa"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Login</label>
            <md-input v-model="user.login"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Senha</label>
            <md-input type="password" v-model="user.senha"></md-input>
          </md-input-container>
          <md-button type="submit" class="md-raised md-primary"><md-icon class="">send</md-icon> Entrar</md-button>
          </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
let users
import Model from './Model'

export default class Login extends Model {
    
  name: 'Login',
  data () {
    return {
      user: {
        empresa: null,
        login:null,
        senha: null
      }
    }
  },
  methods: {
  

User
  .where('status', 'ACTIVE')
  .get()
  .then(response => {
    users = response
    
    // ou (dependendo da resposta do backend)

    users = response.data 
  })
  }
}

</script>