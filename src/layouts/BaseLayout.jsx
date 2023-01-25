// import {makeStyles, Image} from '@fluentui/react-components'
import Navbar from '../components/navbar/navbar'

// const useStyles = makeStyles({
//   mainContainer:{
//     display: 'grid'
//   },
//   imgCover:{
//     position: 'absolute',
//     minHeight: '600px'
//   },
//   filterContainer:{
//     height: '100vh',
//     minHeight: '600px'
//   }
// }) 

export default function BaseLayout({children}){
  // const style = useStyles()
  return (
    <div>
      {children}
    </div>
  )
}