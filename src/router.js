import {createRouter, createWebHashHistory} from 'vue-router'
import HelloCard from './components/HelloCard.vue'
import GeneralForm from './components/GeneralForm.vue'
import AddProducts from './components/AddProducts.vue'
import CheckPage from './components/CheckPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {path: '/', component: HelloCard},
        {path: '/users', component: GeneralForm},
        {path: '/products', component: AddProducts},
        {path: '/check', component: CheckPage}



    ]
})

