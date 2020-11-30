import React from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

const {Header}=Layout;

const HeaderContent=({selectedKeys})=>{

    return (
        <>
         <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
            <Menu.Item key="home"><Link to="/">Homepage</Link></Menu.Item>
            <Menu.Item key="employee"><Link to="/employee">Employee</Link></Menu.Item>
          </Menu>
        </Header>
        </>
    )
}

export default HeaderContent;