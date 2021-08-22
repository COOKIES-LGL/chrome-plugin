import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/lib/theme-chalk/index.css';
import { components, plugins } from '@/support';

 export const VueApp = createApp(App);
// 按需导入Element Plus组件和插件
components.forEach(component => {
  VueApp.component(component.name, component);
});
plugins.forEach(plugin => {
  VueApp.use(plugin);
});


VueApp.use(store)
  .use(router)
  .mount('#app');
