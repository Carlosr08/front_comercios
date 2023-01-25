import React, { useState } from 'react'
import { Button, Checkbox, Divider, Form, Input, notification, Typography } from "antd";
import { UserOutlined, UserAddOutlined, LockOutlined, MailOutlined, FacebookFilled, GoogleOutlined, LoginOutlined } from '@ant-design/icons';
import { makeStyles, shorthands } from '@griffel/react';
// import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { Register } from '../../gql/user'
import { setToken, decodeToken } from '../../utils/token'
import useAuth from '../../hooks/useAuth'

import { green } from '@ant-design/colors';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const useStyles = makeStyles({
  form: {
    ...shorthands.gap('12px'),
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  socialButtons: {
    ...shorthands.gap('8px'),
    marginTop: '20px',
    display: 'flex',
  },
  formImputs: {
    width: '100%',
    '& > span': {
      width: '100%'
    }
  },
  actionButtons: {
    '& .ant-form-item-control-input-content': {
      ...shorthands.gap('8px'),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  }
})

export default function RegisterForm() {
  const style = useStyles()
  const [register] = useMutation(Register)
  const { setUser } = useAuth()
  const [notify, contextHolder] = notification.useNotification()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const { data } = await register({
        variables: {
          input: values
        }
      })
      // const { token } = data.login
      // setToken(token)
      // setUser(decodeToken(token))
      notify.success({
        message: 'Exito!',
        description: 'Creación de cuenta exitosa'
      })
      setLoading(false)
    } catch (error) {
      notify.error({
        message: 'Error!',
        description: error.message
      })
      setLoading(false)
    }
  }

  return (
    <div className={style.form}>
      {contextHolder}
      <Title level={3}>Crear cuenta</Title>
      <div className={style.socialButtons}>
        <Button type="primary" icon={<GoogleOutlined />}>
          Con Google
        </Button>
        <Button type="primary" icon={<FacebookFilled />}>
          Con Facebook
        </Button>
      </div>
      <Divider plain>O</Divider>
      <Form
        name="normal_register"
        className={style.formImputs}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor ingresa tu correo!' }]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Correo"
          />
        </Form.Item>
        {/* <Form.Item
          name="name"
          rules={[{ required: true, message: 'Por favor ingresa su nombre!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nombre"
          />
        </Form.Item> */}
        {/* <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor ingresa un usuario!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Usuario"
          />
        </Form.Item> */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <br />
        <Form.Item className={style.actionButtons}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<UserAddOutlined />}
            loading={loading}
            color={green}
          >
            Registrar
          </Button>
          <Link to="/login">
            <Button icon={<LoginOutlined />}>
              Iniciar 
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}
