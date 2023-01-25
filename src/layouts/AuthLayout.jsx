// import { makeStyles, Image, shorthands } from "@fluentui/react-components";
// import { Card } from '@fluentui/react-components/unstable';
import { Card } from "antd";
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url("https://img.freepik.com/vector-gratis/fondo-abstracto-ondulado-azul_1409-897.jpg?w=826&t=st=1674535379~exp=1674535979~hmac=64f656c5c5abbc7006b7adf08a6896f087021ed5804b21bc06d2c124c6a144f1")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  cardLoginContainer: {
    ...shorthands.padding('0'),
    ...shorthands.margin('0'),
    ...shorthands.overflow('hidden'),
    width: '960px',
    height: '420px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  imgLoginContainer: {
    height: '100%',
    width: '100%',
    clipPath: 'circle(93.6% at 2% 49%)'
  },
  formLoginContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function AuthLayout({ children }) {
  const style = useStyles()
  return (
    <div className={style.mainContainer}>
      <Card className={style.cardLoginContainer}
        cover={
          <img alt="example" src="https://img.freepik.com/foto-gratis/disparo-horizontal-hermosa-adolescente-satisfecha-centrada-dispositivo-telefono-inteligente-chats-linea-amigos_273609-25671.jpg?w=740&t=st=1673718173~exp=1673718773~hmac=ebccc66eea8120872576c1fa18ae7d06cbb673870cdc6caa45f6d4af8004fffa" className={style.imgLoginContainer} />
        }>
        <div className={style.formLoginContainer}>
          {children}
        </div>
      </Card>
    </div>
  )
}