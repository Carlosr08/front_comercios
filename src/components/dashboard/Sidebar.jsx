import { Button, Divider, Space, Tooltip } from 'antd'
import { makeStyles, shorthands } from '@griffel/react'
import { Link, NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  sidebarContainer: {
    // ...shorthands.borderRight('2px', 'solid', '#333'),
    width: '250px',
    // backgroundColor: '#ddd',
    // boxShadow: '0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)',
    boxShadow: '2px 0px 20px 0px rgb(51 51 51 / 20%)',
    position: 'fixed',
    zIndex: 99,
    height: '100vh'
  },
  sidebarButtons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBlock: '10px'
  },
  sidebarBrand: {
    ...shorthands.padding('30px'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > img': {
      width: '180px'
    }
  },
  mainMenu: {
    ...shorthands.padding('30px')
  },
  sidebarActions: {
    ...shorthands.gap('25px'),
    position: 'absolute',
    width: '100%',
    bottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  // tooltip: {
  //   backgroundColor: tokens.colorBrandBackground,
  //   color: tokens.colorNeutralForegroundInverted
  // },
  btnActive: {
    backgroundColor: '#333'
  }
})

export default function () {
  const style = useStyles()

  let activeStyle = {
    backgroundColor: '#333'
  };

  let activeClassName = "primary";


  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarBrand}>
        <Image src="https://www.cnet.com/a/img/resize/a464685b95408fa5fb8816e21e4cede856a59895/hub/2021/01/06/19ab53c1-6b8d-4f44-a89a-b84fc7f825e8/ogi-kia.jpg?auto=webp" />
      </div>
      <div className={style.mainMenu}>
        <NavLink to="/dashboard">
          {({ isActive }) =>
            <Button
              // size="large"
              appearance={(isActive ? 'primary' : 'subtle')}
              className={style.sidebarButtons}
              icon={<HomeRegular/>}>
              Inicio
            </Button>
          }
        </NavLink>

        <NavLink to="/invetory">
          {({ isActive }) =>
            <Button
              // size="large"
              appearance={(isActive ? 'primary' : 'subtle')}
              className={style.sidebarButtons}
              icon={<i className="ri-inbox-line" />}>
              Inventario
            </Button>
          }
        </NavLink>

        <NavLink to="/reports">
          {({ isActive }) =>
            <Button
              // size="large"
              appearance={(isActive ? 'primary' : 'subtle')}
              className={style.sidebarButtons}
              icon={<i className="ri-file-paper-line" />}>
              Reportes
            </Button>
          }
        </NavLink>
      </div>
      <div className={style.sidebarActions}>
        <Tooltip
          withArrow
          content={{ children: 'Perfil', className: style.tooltip }}
          relationship="label">
          <Button
            // size="large"
            appearance='subtle'
            className={style.sidebarButtons}
            icon={<i className="ri-user-3-line" />}>
          </Button>
        </Tooltip>

        <Tooltip
          withArrow
          content={{ children: 'Cerrar sesión', className: style.tooltip }}
          relationship="label">
          <Link to="/login">
            <Button
              // size="large"
              appearance='subtle'
              className={style.sidebarButtons}
              icon={<i className="ri-login-box-line" />}>
            </Button>
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}