import { Breadcrumb, Layout, Menu, theme, Button, Space, Typography, Divider } from 'antd';
import { UserOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import { makeStyles, shorthands } from '@griffel/react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg'

const { Header, Content, Footer } = Layout;

const useStyles = makeStyles({
  mainContainer: {
    minHeight: '100vh',
    marginTop: '64px'
  },
  menuAuth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    height: '100%'
  }
})

const items = [
  {
    label: 'Iniciar sesión',
    key: 'login',
    icon: <UserOutlined />,
  },
  {
    label: 'Registrarse',
    key: 'register',
    icon: <UserAddOutlined />,
    // disabled: true,
  },
];

export default function BaseLayout({ children }) {
  const style = useStyles()

  const { token: { colorBgContainer } } = theme.useToken();
  return (
    <Layout className={style.mainContainer}>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: colorBgContainer,
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)'
        }}
      >
        <div
          style={{
            float: 'left',
            width: 120,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // margin: '8px 12px 8px 0'
          }}
        >
          <img src={logo} alt="" height={36} />
        </div>
        <div className={style.menuAuth} >
          <Link to="login">
            <Button type="link"> Iniciar sesión </Button>
          </Link>
          <Link to="register">
            <Button type="primary" icon={<UserAddOutlined />}> Registrarse </Button>
          </Link>
        </div>
        {/* <Menu
          // theme="dark"
          mode="horizontal"
          float="right"
          // defaultSelectedKeys={['login']}
          items={items}
          style={{
            justifyContent: 'end',
            height: '30px'
          }}
        /> */}
      </Header>
      <Content className="site-layout">
        <div>
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Creado por Carlos Rivas 🏍
      </Footer>
    </Layout>
  );
}