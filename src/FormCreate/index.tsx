import React from 'react'
import {Form, Input, InputNumber, Button} from 'antd'
import {Store} from 'antd/lib/form/interface'
import styles from './index.less'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};


interface ItemProps {
  label: string,
  key: string,
  required: boolean,
  component?: React.ReactElement,
  rules?: any[],
  options?: any,
  isHide?: boolean,
}

export interface FormCreateProps {
  items: ItemProps [],
  onQuery: (values: Store) => void;
}



const FormCreate = ({items,onQuery}: FormCreateProps) => {

  const [form] = Form.useForm()

  const handleReset = () => {
    form.resetFields()
  }

  const renderFormItem = ({item,isHide} : {item:ItemProps, isHide:boolean}) => {
    if(isHide) return null
    const {label, key, required, component, rules, options ={}} = item
    return (
        <Form.Item {...options} label={label} key={key} name={key} rules={rules || [{required, message: `${label}为空`}]}>
          {component || <Input />}
        </Form.Item>
    )
  }

  return (
    <Form {...layout} name="nest-messages" onFinish={values => onQuery(values)}>
        {items.map((item, index) => {
          const isHide = item.isHide ? true : false
          return renderFormItem({item,isHide})
        })}
      <Form.Item
        label="Username"
        name="username"
        initialValue='99999'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
        <Button style={{marginLeft: 8}} onClick={handleReset}>
            重置
          </Button>
      </Form.Item>
    </Form>
  );
};
export default FormCreate