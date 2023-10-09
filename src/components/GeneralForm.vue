<template>
    <div>
        <add-form 
        />

                 <!-- <div > -->
            <v-card-title class="text-center" v-if="DataStore.showUs">{{DataStore.scoreUser()}}</v-card-title>
            <div v-else class="center">
                      <v-btn href="#/products">{{ DataStore.scoreUser() }}</v-btn>
              
            </div>
        <!-- </div> -->
        <user-list/>
    </div>
    <v-layout>
  <MyFooter/>
</v-layout>
                <my-dialog 
        v-model:show="DataStore.dialogVisible"
        >
            <div >{{ DataStore.textDialog }}</div>
        </my-dialog>
</template>

<script>
import MyDialog from './UI/MyDialog.vue'
import AddForm from './AddForm.vue';
import UserList from './UserList.vue';
import MyButton from './UI/MyButton.vue';
import MyFooter from './UI/MyFooter.vue';
import {useDataStore} from '../store/DataStore';

export default{
    name:"general-form",
    components:{AddForm, UserList, MyButton, MyDialog, MyFooter},
    data(){
        return{
            DataStore: useDataStore()
        }
    },

methods:{
    // changeUser(){
    //         // userPage = false;
    //         this.$emit('changeP', this.userPage)
    //       },  
    // createUser(user){
    //     if(user.name == ''){
    //         this.textDialog = 'Нужно его как-то назвать...'
    //         this.showDialog()
    //     }else if(user.name.length == 1){
    //         this.textDialog = '...Ну не бывает имен из 1 буквы...'
    //         this.showDialog()
    //     }else{
    //         this.users.push(user);
    //         this.$parent.saveData(this.users)
    //     }
    // },
    // removeUser(user){
    //     this.users = this.users.filter(p => p.id !== user.id)
    // },
    // showDialog(){
    //     this.dialogVisible = true;
    //   },
    //   changeUser(userPage){
    //     userPage = false;
    //     this.$emit('changeP', this.userPage)
    //   }

},

}
</script>

<style scoped>
.center{
    text-align: center;
    padding: 30px 30px;
}
</style>