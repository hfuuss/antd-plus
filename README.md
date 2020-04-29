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


# 其他
开发的过程发现每次push的时候，都会发布到自动发文档。查了一下文档，原来是我接了git持续集成的功能。
这样并不适合我的项目，我们项目，应该在每次realease的时候再发布。到setting里面，取消持续集成即可。

文档地址： https://vercel.com/docs/v2/git-integrations