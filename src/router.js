import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";

import AppProjects from "./pages/AppProjects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/projects",
            name: "projects",
            component: AppProjects,
        },
        {
            path: "/projects/:slug",
            name: "project",
            component: ProjectDetail,
        },
    ],
})

export default router;