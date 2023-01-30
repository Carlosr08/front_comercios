import { Carousel } from 'antd';
import { makeStyles, shorthands } from '@griffel/react';
import bgCarousel from '../../assets/bg_carousel.jpg'

console.log(bgCarousel)

const useStyles = makeStyles({
  contentStyle:{
    ...shorthands.margin(0),
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    backgroundImage: `url('${bgCarousel}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
});

export default function Carousels() {
  const styles = useStyles()

  return (
    <Carousel>
      <div>
        <h3 className={styles.contentStyle}></h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}></h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}></h3>
      </div>
      <div>
        <h3 className={styles.contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}