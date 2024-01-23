<template>
    <div class="container mt-5">
        <h2>ProjectDetail</h2>
        <h3 class="mt-3">{{ this.project.title }}</h3>
        <div class="d-flex mt-5">
            <div>
                <img class="project-img" :src="this.store.imgpath + this.project.img" alt="{{ this.project.title }}">
            </div>
            <div class="ms-5 mt-4">
                <p class="fs-5 fw-bold">Description : </p>
                <p>{{ this.project.body }}</p>
                <p class="mb-1 fs-5 fw-bold">Technologies : </p>
                <ul class="list-unstyled">
                    <li class="ms-3" v-for="item in this.project.technologies" :key="item.id">{{ item.name }} <i :class="item.icon"></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
    export default {
        name: 'ProjectDetail',
        data(){
            return {
                project: [],
                store,
            }
        },
        methods: {
            getProject(){
                console.log(this.$route);
                axios.get(`${this.store.apiUrl}projects/${this.$route.params.id}`).then((res) => {
                    console.log(res.data);
                    this.project = res.data;
                    console.log(this.project);
                })
            }
        },
        mounted(){
            this.getProject();
        }
    }
</script>

<style lang="scss" scoped>

.project-img{
    width: 800px;
}

</style>