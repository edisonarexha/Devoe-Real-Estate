import Vue from 'vue';
import Vuex from 'vuex';
import houses from './modules/houses';
import offices from './modules/offices';
import flats from './modules/flats';
import users from './modules/users'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        houses,
        offices,
        flats,
        users,

    }
})