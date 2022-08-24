import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const Router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export default Router;
