/**
 * title: 默认用法
 * desc: 这里是默认用法
 */

import React,{useState} from 'react';
import {Input, DatePicker, Radio, Select, Checkbox, Switch,Modal,Button, message} from 'antd'
import { FormUpdate } from '@hfuuss/antd-plus';


const {TextArea} = Input
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const RangePicker = DatePicker.RangePicker

const selectExample = (
  <Select>
    <Option value="option1">option1</Option>
    <Option value="option2">option2</Option>
    <Option value="option3">option3</Option>
  </Select>
)
const radioGroupExample = (
  <RadioGroup
    options={[
      {label: 'radio1', value: 'radio1'},
      {label: 'radio2', value: 'radio2'},
      {label: 'radio3', value: 'radio3'},
    ]}
  />
)
const radioButtonGroupExample = (
  <RadioGroup>
    <RadioButton value="radio1">radio1</RadioButton>
    <RadioButton value="radio2">radio2</RadioButton>
    <RadioButton value="radio3">radio3</RadioButton>
  </RadioGroup>
)
const checkboxGroupExample = (
  <CheckboxGroup
    options={[
      {label: 'checkbox1', value: 'checkbox1'},
      {label: 'checkbox2', value: 'checkbox2'},
      {label: 'checkbox3', value: 'checkbox3'},
    ]}
  />
)

const items = [
  {
    label: 'mid',
    key: 'mid',
    required: true,
  },
  {
    label: '密码输入框',
    key: 'password',
    component: <Input type="password" />,
    rules: [
      {
        required: true,
        // pattern: /^[0-9a-zA-Z]{8,16}$/,
        message: '密码长度为8-16位，只能包含数字和英文',
      },
    ],
  },
  {
    label: 'TextArea',
    key: 'TextArea',
    component: <TextArea />,
  },
  {
    label: 'Select',
    key: 'Select',
    required: true,
    component: selectExample,
  },
  {
    label: 'RadioGroup',
    key: 'RadioGroup',
    required: true,
    component: radioGroupExample,
    options: {initialValue: 'radio1'},
  },
  {
    label: 'RadioButtonGroup',
    key: 'RadioButtonGroup',
    required: true,
    component: radioButtonGroupExample,
    options: {initialValue: 'radio2'},
  },
  {
    label: 'CheckboxGroup',
    key: 'CheckboxGroup',
    required: true,
    component: checkboxGroupExample,
    options: {initialValue: ['checkbox3']},
  },
  {
    label: 'DatePicker',
    key: 'DatePicker',
    required: true,
    component: <DatePicker />,
  },
  {
    label: 'RangePicker',
    key: 'RangePicker',
    required: true,
    component: <RangePicker />,
  },
  {
    label: 'Switch',
    key: 'Switch',
    component: <Switch />,
    options: {valuePropName: 'checked', initialValue: false},
  },
]
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
export default () => {
  const [state,setState] = useState({})
  const [visible,setVisible] = useState(false)
  return <div>
      <Button type="primary" onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal
          title="Add Modal"
          visible={visible}
          onOk={() => {
            message.success('确认')
            setVisible(false)
          }}
          onCancel={() => {
            message.success('取消')
            setVisible(false)
          }}
        >
        <FormUpdate layout={formItemLayout} items={items} onQuery={values => setState(values)}/>
        values: {JSON.stringify(state)}
        </Modal>
  </div>
};