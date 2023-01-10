//创建这个应用的路由器
import VueRouter from "vue-router";
import HomePage from "@/components/HomePage.vue";
import Personnel from "@/components/Personnel.vue";
import Department from "@/components/Department.vue";
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/a1',
            component:Personnel
        },
        {
            path:'/a2',
            component:Department
        }
    ]
})