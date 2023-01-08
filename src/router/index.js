//创建这个应用的路由器
import VueRouter from "vue-router";
import pmsg from "@/components/pmsg.vue";
import system from "@/components/system.vue";
export default new VueRouter({
    routes:[
        {
            path:'/a1',
            component:pmsg
        },
        {
            path:'/a2',
            component:system
        }
    ]
})