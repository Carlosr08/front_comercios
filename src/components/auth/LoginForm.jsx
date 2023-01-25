import React, { useState } from 'react'
import { Button, Checkbox, Divider, Form, Input, notification } from "antd";
import { UserOutlined, UserAddOutlined, LockOutlined, MailOutlined, FacebookFilled, GoogleOutlined, LoginOutlined } from '@ant-design/icons';
import { makeStyles, shorthands } from '@griffel/react';
// import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { Login } from '../../gql/user'
import { setToken, decodeToken } from '../../utils/token'
import useAuth from '../../hooks/useAuth'

import { green } from '@ant-design/colors';
import { Link, redirect, useNavigate } from 'react-router-dom';

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

export default function LoginForm() {
  const style = useStyles()
  const [login] = useMutation(Login)
  const { setUser } = useAuth()
  const [notify, contextHolder] = notification.useNotification()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const { data } = await login({
        variables: {
          input: values
        }
      })
      const { token } = data.login
      setToken(token)
      setUser(decodeToken(token))
      notify.success({
        message: 'Exito!',
        description: 'Inicio de sesión correcto'
      })
      setLoading(false)
      // window.location.href = `/dashboard`
      // return redirect('/')
      navigate('/dashboard')
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
        name="normal_login"
        className={style.formImputs}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Por favor ingresa tu correo!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Correo"
          />
        </Form.Item>
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
            icon={<LoginOutlined />}
            loading={loading}
            color={green}
          >
            Iniciar
          </Button>
          <Link to="/register">
            <Button icon={<UserAddOutlined />}>
              Registrar
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}
