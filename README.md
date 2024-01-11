# laijava-tool
## Buefy  You need Vue.js version 2.6+. (Vue 3 is not supported)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
npm run lint --fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 格式化
在webstorm中安装 prettier 插件，prettier默认的快捷键 是 CTRL+ALT+SHIFT+P 按钮，在项目的根目录中添加 .prettierrc 文件

### icon
https://fontawesome.com/v5/search?m=free
```javascript
import {
  faUpload,
  faDownload,
  faLightbulb,
  faUsers,
  faCrown,
  faHippo,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUpload,
  faDownload,
  faLightbulb,
  faUsers,
  faCrown,
  faHippo,
  faHome
);
```


### 站点地图配置
vue.config.js -> paths