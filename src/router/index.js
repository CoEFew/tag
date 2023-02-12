import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../MainPage.vue";
import MainTable from "../MainTable.vue";
import UpdateView from "../UpdateView.vue"

const routes = [
  { path: '/', redirect: "/main" },
  { path: '/main', component: MainPage },
  { path: '/maintable', component: MainTable },
  { path: '/updateview/:id', component: UpdateView },
  // { path: '/report', component: ViewReport },
  // { path: '/report/:Id', component: ViewReport },
];

const router = createRouter({
	history: createWebHashHistory(),
	linkActiveClass: "active",
	routes,
});

export default router;
