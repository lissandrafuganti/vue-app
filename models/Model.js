import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // defina uma url base para a API REST
  baseURL () {
    return 'http://btms.com.br/ws/wsbtms.php'
  }

  // implemente o método de request padrão
  request (config) {
    return this.$http.request(config)
  }
}