import { App as VM } from "vue";
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  ActionSheet,
  Uploader,
  Swipe,
  SwipeItem
} from "vant";

const plugins = [
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  ActionSheet,
  Uploader,
  Swipe,
  SwipeItem
];

export const vantPlugins = {
  install: function(vm: VM) {
    plugins.forEach(item => {
      vm.component(item.name, item);
    });
  }
};