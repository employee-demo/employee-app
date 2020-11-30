import React, {useEffect} from 'react';
import {Layout, Breadcrumb, Button, Input, Form, Switch} from 'antd';
import {Link} from 'react-router-dom';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons'

import HeaderContent from '../../components/HeaderContent';
import FooterContent  from '../../components/FooterContent';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import { addEmployee } from '../../actions/employee';

const {Content}=Layout;
const layout={
  labelCol: {span: 4},
  wrapperCol: {span: 16},
};

const NewEmployee=({history}) => {

  const ifRedirect=useSelector(state => state.employee.ifRedirect, shallowEqual);

  useEffect(() => {
    if (ifRedirect) {
    history.push("/employee");
    }
}, [history, ifRedirect]);


  const dispatch=useDispatch();
  function onSave(value) {
    let params= {
      sn:value.sn,
      name:value.name,
      email:value.email,
      ismanager:value.ismanager,
      phone:value.phone,
      address:value.address
    }
    dispatch(addEmployee(params))
  }

  return (
    <>
      <Layout className="layout">
        <HeaderContent selectedKeys="employee" />
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item><Link to="employee">Employee</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Edit Employee</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <h1>Please insert information below and submit</h1>
            <br />
            <Form
              {...layout}
              initialValues={{ismanager: false}}
              onFinish={onSave}
            >
              <Form.Item
                label="Serial Number"
                name="sn"
                rules={[{required: true, message: 'Please input serial number'}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[{required: true, message: 'Please input name'}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input email'}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Is manager?"
                name="ismanager"
                valuePropName="checked"
                rules={[{required: true}]}
              >
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                />
              </Form.Item>
              <Form.Item
                label="Phone number"
                name="phone"
                rules={[{required: true, message: 'Please input phone number'}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{required: true, message: 'Please input address'}]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
        </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <FooterContent />
      </Layout>,
    </>
  )
};
export default NewEmployee;

