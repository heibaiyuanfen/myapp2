import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import DeviceManagement from '../views/DeviceManagement.vue';
import RealTimeData from '../views/RealTimeData.vue';
import HistoryData from '../views/HistoryData.vue';
import HealthAdvice from '../views/HealthAdvice.vue';
import UserProfile from '../views/UserProfile.vue';
import Share from '../views/Share.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/device-management', component: DeviceManagement },
  { path: '/real-time-data', component: RealTimeData },
  { path: '/history-data', component: HistoryData },
  { path: '/health-advice', component: HealthAdvice },
  { path: '/user-profile', component: UserProfile },
  { path: '/share', component: Share },
  { path: '/settings', component: Settings },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
