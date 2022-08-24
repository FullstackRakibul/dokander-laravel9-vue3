import Home from "../pages/Home.vue"
import Login from "../pages/Login.vue"
import Registration from "../pages/Registration.vue"
import NotFound from "../pages/NotFound.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/registration",
        name: "Registration",
        component: Registration,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },

]
export default routes;
