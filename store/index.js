import axios from 'axios'
export const state = () => ({
  lista: [],
})

export const getters = {
  getLista(state) {
    return state.lista
  },
}

export const mutations = {
  popular(state, valorax) {
    state.lista = valorax
  },
  unamas(state, idx) {
    state.lista[idx].useful_count++
    state.lista[idx].clase = true
  },
}
export const actions = {
  async populaValores({ commit }) {
    const { data } = await axios.get(`http://localhost:3000/api/valoraciones`)
    commit('popular', data.reviews)
  },
}
