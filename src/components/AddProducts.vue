<template>
    <div>
    <add-products-form
     />
    <div style="text-align: center;">
            <h3 v-if="DataStore.showPr">{{DataStore.scoreProducts()}}</h3>
            <div  v-else><v-btn href="#/check">{{ DataStore.scoreProducts() }}</v-btn></div>
            
        </div>     
    <products-list 
    />

</div>
<v-layout>
  <MyFooter/>
</v-layout>
</template>
<script>
    import AddProductsForm from './AddProductsForm.vue';
    import ProductsList from './ProductsList.vue';
    import MyButton from './UI/MyButton.vue';
import MyFooter from './UI/MyFooter.vue';

    import { useDataStore } from '../store/DataStore';
    export default{
        components: {
            AddProductsForm,
            ProductsList,
            MyButton,
            MyFooter
        },
        data(){
            return{
                DataStore: useDataStore()
            }
        },
    }
</script>
<style>
</style>