import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Layout, Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          Header
          <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
            <MenuItem key="1">nav 1</MenuItem>
          </Menu>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <h1>skaftisveins</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button>Push me></Button>
    </div>
  );
}

export default App;
