import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthStore from '@/stores/auth-store';
import accountLayout from '@/account/account-layout.vue';
import adminLayout from '@/admin/admin-layout.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/admin/home' },
        {
            path: '/account',
            component: accountLayout,
            children: [
                { path: 'login', component: require('@/account/views/login/login.vue').default },
                { path: 'register', component: require('@/account/views/register/register.vue').default },
                { path: 'forgot-password', component: require('@/account/views/manage/forgot-password.vue').default },
                { path: 'reset-password', component: require('@/account/views/manage/reset-password.vue').default }
            ]
        },
        {
            path: '/admin',
            component: adminLayout,
            meta: { requiresAuth: true },
            children: [
                { path: 'home', component: require('@/admin/views/home/home.vue').default },
                { path: 'user-list', component: require('@/admin/views/users/user-list.vue').default },
                { path: 'role-list', component: require('@/admin/views/roles/role-list.vue').default }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!AuthStore.isSignedIn()) {
            next({
                path: '/account/login',
                query: { redirect: to.fullPath }
            });
        }
    }
    next();
});
export default router;
//# sourceMappingURL=router.js.map