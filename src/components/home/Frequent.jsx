import { makeStyles, shorthands } from "@griffel/react"
import { EnvironmentOutlined, WhatsAppOutlined, LinkOutlined } from '@ant-design/icons';
import { Card, Avatar } from "antd"
const { Meta } = Card;

const useStyles = makeStyles({
  gridCardContent: {
    ...shorthands.margin('0', 'auto'),
    ...shorthands.padding('20px'),
    ...shorthands.gap('5px'),
    maxWidth: '1320px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    // justifyContent: 'start',
    // alignItems: 'center',
    // textAlign: 'center',
    // flexWrap: 'wrap'
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  titleSection:{
    ...shorthands.margin('0', 'auto'),
    ...shorthands.padding('20px'),
    maxWidth: '1320px',
  },
  CardItem: {
    width: '300px'
  },
})

export default function Frequent() {
  const styles = useStyles()
  return (
    <>
      <div className={styles.titleSection}>
        <h2>Comercios frecuentes</h2>
      </div>
      <div className={styles.gridCardContent}>
        <div>
          <Card
            className={styles.CardItem}
            cover={
              <img
                alt="example"
                src="https://i0.wp.com/laverdaddemonagas.com/wp-content/uploads/2021/09/pila-mensaje-falso-de-traki-difundido-por-whatsapp-es-un-virus-laverdaddemonagas.com-traki.jpg?fit=1170%2C702&ssl=1"
                height="200"
              />
            }
            actions={[
              <WhatsAppOutlined key="setting" />,
              <EnvironmentOutlined key="edit" />,
              <LinkOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://pbs.twimg.com/profile_images/1176882478788857856/WbLsQs-g_400x400.jpg" />}
              title="Traki Maturín"
              description="Tienda por departamentos"
            />
          </Card>
        </div>
        <div>
          <Card
            className={styles.CardItem}
            cover={
              <img
                alt="example"
                src="https://fastly.4sqi.net/img/general/600x600/31983342_K50u774VxR5rlwR_0FReQ5H9lOWGfZNw4OZgaIBlkys.jpg"
                height="200"
              />
            }
            actions={[
              <WhatsAppOutlined key="setting" />,
              <EnvironmentOutlined key="edit" />,
              <LinkOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://www.onbizz.com/images/cliente/logo/5d1f1dd493a5a7d698c1d1376552c240.jpeg" />}
              title="Makro Maturín"
              description="Tienda por departamentos"
            />
          </Card>
        </div>
        <div>
          <Card
            className={styles.CardItem}
            cover={
              <img
                alt="example"
                src="https://800noticias.com/cms/wp-content/uploads/2015/03/Farmatodo--700x350.jpg"
                height="200"
              />
            }
            actions={[
              <WhatsAppOutlined key="setting" />,
              <EnvironmentOutlined key="edit" />,
              <LinkOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="data:image/png;base64,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" />}
              title="Farmatodo Maturín"
              description="Farmácia"
            />
          </Card>
        </div>
        <div>
          <Card
            className={styles.CardItem}
            cover={
              <img
                alt="example"
                src="https://recettemark.com/wp-content/uploads/2022/10/Mundo-Total-1024x726.webp"
                height="200"
              />
            }
            actions={[
              <WhatsAppOutlined key="setting" />,
              <EnvironmentOutlined key="edit" />,
              <LinkOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="data:image/png;base64,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" />}
              title="Farmatodo Maturín"
              description="Farmácia"
            />
          </Card>
        </div>
      </div>
    </>
  )
}