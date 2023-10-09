<template>
    <v-container>
            <v-card
            style="margin-top: 70px"
        class="
        rounded-xl
        center
        "
         bg-color="white"
         >
         <v-card-title class="pt-10">Давай добавлять продукты!</v-card-title>
         <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <MyInput
            label="Заказы"
            v-bind:value="DataStore.product.title"
            @input="DataStore.product.title = $event.target.value"
            type="text"
            placeholder="«Ну что я могу предложить вам, господа»(с)"
            class="text-right"
            />  
        </v-sheet>
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
            <MyButton @click="DataStore.createProducts()" 
            style="height: 56px;"
            >
                берём!
            </MyButton>
        </v-sheet>
      </v-col>
    </v-row>
        </v-card>
        </v-container>
        <my-dialog 
        v-model:show="DataStore.dialogVisible"
        >
            <div >{{ DataStore.textDialog }}</div>
        </my-dialog>
</template>
<script>
import { useDataStore } from '../store/DataStore';
import MyButton from './UI/MyButton.vue';
import MyDialog from './UI/MyDialog.vue';
import MyInput from './UI/MyInput.vue';
    export default{
    name: 'add-products-form',
    components: { MyButton, MyDialog, MyInput },
    data(){
        return{
            DataStore: useDataStore()
            }
        },
    
    methods:{

    }
    }
</script>
<style scoped>
.center{
    text-align: center;
}
</style>