
---
title: FormFilter
nav:
  title: 组件
  path: /components
group:
  title: Page
  path: /page
  order: 1
---


# FormFilter

一个页面中的查询组件
> 这个组件一般用于 查询过滤条件


## 代码演示

### 默认用法

<code src="./demo/demo1.tsx" />


## API
```javascript
interface ItemProps {
  label: string,
  key: string,
  required: boolean,
  component: React.ReactElement,
  rules?: any[],
}
export interface FormFilterProps {
  items: ItemProps [],
  onQuery: (values: Store) => void;
}
```

### FormFilterProps

| 参数                           | 说明                            | 类型                                  | 默认值             |
|--------------------------------|---------------------------------|---------------------------------------|--------------------|
| items            | 组件选项                    | ItemProps                               | []              |
| onQuery            | 回调函数 将结果以对象形式返回   |  (values: Store) => void                     |         -      |

### ItemProps
| 参数                           | 说明                            | 类型                                  | 默认值             |
|--------------------------------|---------------------------------|---------------------------------------|--------------------|
| label            | 名称                    | string                               | []              |
| key            | 返回的key值                    |  string                    |         -      |
| required            | 必填样式设置。如不设置，则会根据校验规则自动生成  |  boolean                    |         -      |
| component            | antd中的表单组件  |  React.ReactElement           |         -      |
| rules            | antd中的表单组件的rules  |  any[]           |         -      |
