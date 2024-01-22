<template>
    <div class="container">
        <h1>Projects List</h1>
        <div class="row">
            <div class="col-12 col-md-4 col-lg-3" v-for="item in store.projects" :key="item.id">
                <CardComponent :project="item" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import CardComponent from "../components/CardComponent.vue";
    export default {
        name: 'AppProjects',
        components: {
            CardComponent
        },
        data(){
            return {
                store,
            }
        },
        methods: {
            getAllProjects(){
                axios.get(`${this.store.apiUrl}projects`).then((res) => {
                    console.log(res.data.data);
                    store.projects = res.data;
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        mounted(){
            this.getAllProjects();
        }
    }
</script>

<style lang="scss" scoped>

</style>