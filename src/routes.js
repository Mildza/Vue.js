import Directive from './components/directive/Directive.vue';
import Form from './components/form/Form.vue';
import Router from './components/router/Router.vue';
import Filter from './components/filter/Filter.vue';
import Holder from './components/vuex/Holder.vue';
import Parent from './components/Communication/Parent.vue';
import Faq from './components/faq/Faq.vue';
import Mutattion from './components/faq/mutattion/Mutattion.vue';
import Modifiers from './components/faq/modifiers/Modifiers.vue';
import EventModifiers from './components/faq/eventModifiers/EventModifiers.vue';
import KeyModifiers from './components/faq/keyModifiers/KeyModifiers.vue';
import Methods from './components/faq/methods/Methods.vue';
import ClassStyle from './components/faq/classStyle/ClassStyle.vue';
import Conditional from './components/faq/conditional/Conditional.vue';





const Service = resolve => {
  require.ensure(['./components/http/service.vue'], () => {
    resolve(require('./components/http/service.vue'));
  });
};

export const routes = [
  { path: '/', component: Form },
  { path: '/directive', component: Directive },
  { path: '/form', component: Form, name: 'form' },
  { path: '/filter', component: Filter },
  { path: '/router', component: Router, name: 'router', children: [{ path: ':id', component: Router }] },
  { path: '/vuex', component: Holder },
  { path: '/communication', component: Parent, name: 'communication' },
  { path: '/http', component: Service },
  {
    path: '/faq', component: Faq, children: [
      { path: 'mutattion', component: Mutattion },
      { path: 'modifiers', component: Modifiers },
      { path: 'eventModifiers', component: EventModifiers },
      { path: 'keyModifiers', component: KeyModifiers },
      { path: 'methods', component: Methods },
      { path: 'classStyle', component: ClassStyle },
      { path: 'conditional', component: Conditional }


    ]
  },
  { path: '*', redirect: '/' },
];
