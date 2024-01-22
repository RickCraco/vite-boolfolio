import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";

import AppProjects from "./pages/AppProjects.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";
import SearchProject from "./pages/SearchProject.vue";

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
            path: "/projects/:id",
            name: "project",
            component: ProjectDetail,
        },
        {
            path: "/search/projects",
            name: "search",
            component: SearchProject,
        }
    ],
})

export default router;