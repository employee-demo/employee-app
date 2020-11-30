import React from 'react';
import {Layout, Breadcrumb} from 'antd';
import './Home.css'

import HeaderContent from '../../components/HeaderContent';
import FooterContent  from '../../components/FooterContent';

const {Content}=Layout;

const Home=() => {





  return (
    <>
      <Layout className="layout">
        <HeaderContent selectedKeys="home"/>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Welcome to Employee information mangement site</div>
        </Content>
        <FooterContent />
      </Layout>,
    </>
  )
};
export default Home;

