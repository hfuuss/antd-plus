---
title: Delete
nav:
  title: 组件
  path: /components
group:
  title: delete
  path: /delete
  order: 1
---

# Delete

删除操作，直接使用antd Popconfirm确认框即可

```tsx
import React from 'react';
import {message} from 'antd';
import { Delete } from '@hfuuss/antd-plus';

export default () => (
  <Delete
    title="Are you sure delete this task?"
    onConfirm={e => {
      console.log(e)
      message.success('删除成功');
    }}
    onCancel={e => {
      console.log(e)
      message.success('取消');
    }}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Delete>
);
```


