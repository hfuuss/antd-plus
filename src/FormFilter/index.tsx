/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {Form, Row, Col, Input, Button} from 'antd'
import {
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons'

import {Store} from 'antd/lib/form/interface'

import styles from './index.less'

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

const FormFilter = ({items,onQuery}: FormFilterProps) => {
  const [form] = Form.useForm()
  const [expand,setExpand] = useState(false)
 
  const handleReset = () => {
    form.resetFields()
  }

  const toggle = () => {
    setExpand(!expand)
  }

  const renderFormItem = ({item,isShow} : {item:ItemProps, isShow:boolean}) => {
    const {label, key, required, component, rules} = item
    return (
      <Col span={8} key={key} style={{display: isShow ? 'block' : 'none'}}>
        <Form.Item label={label} name={key} rules={rules || [{required, message: `${label}为空`}]} className={styles.form_item}>
          {component || <Input />}
        </Form.Item>
      </Col>
    )
  }

  return (
    <Form
      form={form}   
      className={styles.form}
      onFinish={values => onQuery(values)}
    >
      <Row gutter={24}>
        {items.map((item, index) => {
          const isShow = expand ? true : index < 6
          return renderFormItem({item, isShow})
        })}
        <Col span={8} className={styles.control_wrapper}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button style={{marginLeft: 8}} onClick={handleReset}>
            重置
          </Button>
          {items.length > 6 ? (
            <a style={{marginLeft: 8, fontSize: 12}} onClick={toggle}>
              折叠 {expand? <UpOutlined />:<DownOutlined /> }
            </a>
          ) : null}
        </Col>
      </Row>
    </Form>
  )
}

export default FormFilter