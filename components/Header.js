import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { HomeOutlined, UserOutlined, AppstoreAddOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;
const { Text } = Typography;

const CustomHeader = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
          <Link href="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default CustomHeader;
