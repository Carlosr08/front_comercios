// import { Button, makeStyles, shorthands, Image, tokens } from '@fluentui/react-components'
import { Link } from 'react-router-dom'

// const useStyles = makeStyles({
//   navbar: {
//     height: '65px',
//     width: '100vw',
//     boxShadow: tokens.shadow4,
//     display: 'flex',
//     position: 'fixed',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     top: 0,
//     left: 0,
//     zIndex: 20
//   },
//   navbarContainer:{
//     ...shorthands.gap('16px'),
//     paddingInline: '32px',
//     width:'100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     '& > div': {
//       ...shorthands.gap('16px'),
//       display: 'flex',
//     }
//   }
// })

export default function Navbar() {
  const style = useStyles()
  return (
    // <nav className={style.navbar}>
    //   <div className={style.navbarContainer}>
    //     <span>
    //       <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcLK3GCc6Z_XEXEWcRKipbWQHDAR6-MYZNA&usqp=CAU" height="46"/>
    //     </span> 
    //     <div>
    //       <Link to="/register">
    //         <Button icon={<i className="ri-user-add-line" />}>
    //           Registrarse
    //         </Button>
    //       </Link>
    //       <Link to="/login">
    //         <Button icon={<i className="ri-user-line" />}>
    //           Iniciar sesión
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
    <></>
  )
}