import { makeStyles, shorthands } from "@griffel/react"

const useStyles = makeStyles({
  mainContainer:{
    ...shorthands.margin('40px'),
    ...shorthands.gap('60px'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCategory:{
    textAlign: 'center',
    fontSize: '16px',
  },
  itemImageContent:{
    ...shorthands.borderRadius('50%'),
    ...shorthands.borderWidth('4px'),
    ...shorthands.borderColor('#ddd'),
    ...shorthands.borderStyle('solid'),
    ...shorthands.overflow('hidden'),
    height: '100px',
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemImage:{
    ...shorthands.transition('all'),
    transitionDuration: '0.3s',
    cursor: 'pointer',
    width: '150%',
    '&:hover':{
      width: '170%'
    }
  }
})

export default function Categories(){
  const styles = useStyles()
  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://img.freepik.com/foto-gratis/ensalada-fresca-pavo-huevos-verduras_1220-5193.jpg?w=740&t=st=1675090565~exp=1675091165~hmac=c79d241b5f5e872d7a3914dc898a13ceb2bc76c464831323a13ae0361636a7db" alt="img" />
        </div>
        <span>
          Restaurante
        </span>
      </div>

      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://turismosucre.com.ve/images/alojamiento/2022/hotelnuevatoledo_600x600.jpg" alt="img" />
        </div>
        <span>
          Hoteles
        </span>
      </div>

      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://eldiario.com/wp-content/uploads/2021/01/medicamentos.jpg" alt="img" />
        </div>
        <span>
          Farmacias
        </span>
      </div>

      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://cdn-3.expansion.mx/dims4/default/c357a0e/2147483647/strip/true/crop/724x483+0+0/resize/1800x1201!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F44%2F20%2F854947834355af32dca04abddc25%2Fistock-1321115829.jpg" alt="img" />
        </div>
        <span>
          Entretenimiento
        </span>
      </div>

      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://st3.idealista.com/news/archivos/styles/fullwidth_xl/public/2022-11/images/subida_precio_alquiler.jpg?VersionId=Bw5S0SUcA0hGB4sLevp4kTo7zL5rt59Y&itok=jdvYWz4c" alt="img" />
        </div>
        <span>
          Alquileres
        </span>
      </div>
    </div>
  )
}