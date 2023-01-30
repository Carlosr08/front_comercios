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
          <img className={styles.itemImage} src="https://img.freepik.com/foto-gratis/ensalada-fresca-pavo-huevos-verduras_1220-5193.jpg?w=740&t=st=1675090565~exp=1675091165~hmac=c79d241b5f5e872d7a3914dc898a13ceb2bc76c464831323a13ae0361636a7db" alt="img" />
        </div>
        <span>
          Restaurante
        </span>
      </div>

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
          <img className={styles.itemImage} src="https://img.freepik.com/foto-gratis/ensalada-fresca-pavo-huevos-verduras_1220-5193.jpg?w=740&t=st=1675090565~exp=1675091165~hmac=c79d241b5f5e872d7a3914dc898a13ceb2bc76c464831323a13ae0361636a7db" alt="img" />
        </div>
        <span>
          Restaurante
        </span>
      </div>

      <div className={styles.itemCategory}>
        <div className={styles.itemImageContent}>
          <img className={styles.itemImage} src="https://img.freepik.com/foto-gratis/ensalada-fresca-pavo-huevos-verduras_1220-5193.jpg?w=740&t=st=1675090565~exp=1675091165~hmac=c79d241b5f5e872d7a3914dc898a13ceb2bc76c464831323a13ae0361636a7db" alt="img" />
        </div>
        <span>
          Restaurante
        </span>
      </div>
    </div>
  )
}