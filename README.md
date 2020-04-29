# antd-plus
基于antd的业务组件库

https://plus.getshell.cn/
# 如何使用

```bash
$ npm i @@hfuuss/antd-plus -D
```

```js
import React from 'react';
import { Button } from '@hfuuss/antd-plus';
export default () => <Button/>;
```

# todolist

- [ ] 规范目录
- [ ] 规范测试目录
- [*] 发布优化

# 如何开发

安装依赖,

```bash
$ npm i
```

开启服务,

```bash
$ npm start
```

构建文档,

```bash
$ npm run docs:build
```

# 如何发布文档

```bash
$ git push origin -u master
```
访问https://github.com/hfuuss/antd-plus/releases
创建releases,自动构建到https://plus.getshell.cn/


# 如何发布组件库

修改 package.json 版本

通过 `father-build` 构建组件库,

```bash
$ npm run build
```

发布组件库到npm
```bash
$ npm publish 
```


