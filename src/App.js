import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import  Todo from './Components/Todos';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



class App extends Component {
  render() {
      return(
      <div className="App">
          <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{ lineHeight: '64px' }}
                  >
                      <Menu.Item key="1">nav 1</Menu.Item>
                      <Menu.Item key="2">nav 2</Menu.Item>
                      <Menu.Item key="3" className="title" >React Firestore</Menu.Item>
                      <Menu.Item key="4">nav 4</Menu.Item>
                      <Menu.Item key="5">nav 5</Menu.Item>
                      <Menu.Item key="6">nav 6</Menu.Item>
                  </Menu>
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                      <Todo/>

                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  Lima-peru ©2018 Created by Nefeli
              </Footer>
          </Layout>

      </div>
    );
  }
}

export default App;
