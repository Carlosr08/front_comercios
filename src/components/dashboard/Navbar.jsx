// import { Avatar, Button, makeStyles, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, shorthands, tokens } from "@fluentui/react-components"

import { makeStyles, shorthands } from '@griffel/react';


const useStyles = makeStyles({
  navbarContainer: {
    // boxShadow: tokens.shadow2,
    position: 'fixed',
    top: '0',
    height: '65px',
    width: 'calc(100% - 250px)',
    backgroundColor: '#fff',
    zIndex: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > div': {
      ...shorthands.padding('30px')
    }
  },
  avatar:{
    cursor: 'pointer'
  }
})

export default function Navbar() {
  const style = useStyles()
  return (
    <nav className={style.navbarContainer}>
      <div>
        {/* <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Avatar className={style.avatar}
              name="Carlos Rivas"
              image={{ src: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
            />
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem icon={<i className="ri-user-3-line" />}>Perfil</MenuItem>
              <MenuItem icon={<i className="ri-login-box-line" />}>Cerrar sesión</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu> */}

      </div>
    </nav>
  )
}