import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MetaInfo from "vue-meta-info";
import "buefy/dist/buefy.css";
import Buefy from "buefy";
import Ads from "vue-google-adsense";
import "uno.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// internal icons
import {
  faUpload,
  faDownload,
  faLightbulb,
  faUsers,
  faCrown,
  faHippo,
  faHome,
  faLink,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUpload,
  faDownload,
  faLightbulb,
  faUsers,
  faCrown,
  faHippo,
  faHome,
  faLink,
  faExchangeAlt
);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(MetaInfo)
  .use(Buefy, {
    defaultIconComponent: "vue-fontawesome",
    defaultIconPack: "fas",
    fas: {
      sizes: {
        default: "",
        "is-small": "",
        "is-medium": "",
        "is-large": "",
      },
    },
  })
  .use(Ads.Adsense)
  .use(Ads.InArticleAdsense)
  .use(Ads.InFeedAdsense)
  .use(require("vue-script2"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

var _hmt = _hmt || [];
(function () {
  let hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?42a63131e4c057edafcd1c9cd3500977";
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

router.beforeEach((to, from, next) => {
  if (_hmt) {
    if (to.path) {
      _hmt.push(["_trackPageview", "/#" + to.fullPath]);
    }
  }
  next();
});
