'use client'

import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: <Link href='/users'>Quản lý người dùng</Link>,
    key: 'users',
    icon: <MailOutlined />,
  },
  {
    label: <Link href='/blogs'>Quản lý bài viết</Link>,
    key: 'blogs',
    icon: <AppstoreOutlined />,
  }
];

const NavbarMenu: React.FC = () => {
  const [current, setCurrent] = useState('users');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavbarMenu;