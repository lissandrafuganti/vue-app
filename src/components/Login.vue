<template>
<div class="login">
  <div class="">Entrar no sistema</div>
  <div class="">
    <div class="">
      <div class="">
        <div class="">Faça seu login agora</div>
        <form v-on:submit="handleSubmit($event)">
          <div>
            <label>Empresa</label>
            <input v-model="user.empresa"/>
          </div>
          <div>
            <label>Login</label>
            <input v-model="user.login"/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" v-model="user.senha"/>
          </div>
          <button type="submit" class="">Entrar</button>
          </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        empresa: null,
        login: null,
        senha: null
      },
      users: null
    }
  },
  methods: {
    async handleSubmit ($event) {
      console.log($event)
    }
  }
}

</script>
