// import Sidebar from "../components/dashboard/Sidebar";
// import Navbar from "../components/dashboard/Navbar";

import { makeStyles, shorthands } from '@griffel/react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
const { Header, Content, Footer } = Layout;

const useStyles = makeStyles({
  dashboardContainer:{
    display: "flex",
    // gridTemplateColumns: 'repeat(4, 1fr)',
    height: '100vh'
  },
  mainContainer:{
    width: '100%',
    marginLeft: '250px',
    marginTop: '70px'
  },
  mainContent:{
    ...shorthands.padding('30px'),
  }
})

export default function DashboardLayout({children}){
  const { token: { colorBgContainer } } = theme.useToken()
  const style = useStyles()

  return (
    <Layout className={style.dashboardContainer}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Creado por Carlos Rivas 💪
      </Footer>
    </Layout>
  );
};