<template>
  <div class="app">
      <router-view></router-view>
 </div>
</template>
<script >
import CheckPage from './components/CheckPage.vue';
import AddProducts from './components/AddProducts.vue';
import GeneralForm from './components/GeneralForm.vue';
import HelloCard from './components/hellocard.vue';
import MyButton from './components/UI/MyButton.vue';
import {useDataStore} from './store/DataStore';
import router from './router';
// const DataStore = useDataStore()

// import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  components: { HelloCard, GeneralForm, AddProducts, CheckPage, MyButton, router },
  data(){
    return{
      // users: [],
      DataStore : useDataStore()

    }
  },
    //   provide(){
    //   return {
    //     users: this.users
    //   }
    // },
  methods:{
    // ...mapMutations({
    //   setCard: 'user/setCard'
    // }),
    // changeCard(){
    //   this.card = false
    // },
    // changeUser(){
    //   this.userPage = false
    // },
    // changeCheck(){
    //   this.CheckPage = false
    // },
    // saveData(data){
    //   this.users.push(data)
    // },
    // computed: {
    //   ...mapState({
    //     users: state => state.user.users,
    //         card:  state => state.user.card,
    //         userPage: state => state.user.userPage ,
    //         CheckPage:  state => state.user.CheckPage
        
    //   })
    // }
  }
}
</script>

<style>
/* *{
margin: 0;
padding: 0;
box-sizing: border-box;
} */
</style>
