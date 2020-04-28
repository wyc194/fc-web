import axios from '../request'
import store from "../store"

const user = {
  signIn (params) {
    axios.post('/user/sign_in', params).then(resp => {
      if (resp.code === 'S') {
        store.commit('logon', true)
      }
    })
  }
};

export default user;
