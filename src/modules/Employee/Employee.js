import React from 'react';
import {Layout, Breadcrumb, Button} from 'antd';
import {Link} from 'react-router-dom';
import EmployeeContainer  from '../../container/EmployeeContainer'

import HeaderContent from '../../components/HeaderContent';
import FooterContent  from '../../components/FooterContent';

const {Content}=Layout;


const Employee=({history}) => {

  return (
    <>
      <Layout className="layout">
        <HeaderContent selectedKeys="employee" />
        <Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Employee</Breadcrumb.Item>
      </Breadcrumb>
          <div>
          <Button type="primary"><Link to="/newemployee">Create a new employee record</Link></Button>
          <br />
          <br />
          <EmployeeContainer history={history}/>
          </div>
        </Content>
        <FooterContent />
      </Layout>,
    </>
  )
};
export default Employee;

