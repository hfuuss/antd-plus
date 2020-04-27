import React from 'react';
import { Button } from 'antd';
type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}
export default () => (
  <Button type="primary" onClick={hello.bind(null, 'Hello!')}>
    点击我就 Hello!
  </Button>
);