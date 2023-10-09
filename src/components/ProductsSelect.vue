<template>
    <h1 value="{{ user.name }}" selected>{{ user.name }}</h1>
</template>
<script>
export default{
    name: 'products-select',
    props:{
        user:{
            type: Object,
            required: true
        }
    },
    methods:{
        Console(){
            console.log(user)
        }
    }
}
</script>
<style scoped>

</style>