import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Foo from "@/components/plugin/Foo";
import Bar from "@/components/plugin/Bar";
import PageContainer from "@/components/PageContainer";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: PageContainer },
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
