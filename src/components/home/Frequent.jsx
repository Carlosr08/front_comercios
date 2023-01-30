import { makeStyles, shorthands } from "@griffel/react"
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Avatar } from "antd"
const { Meta } = Card;

const useStyles = makeStyles({
  gridCardContent: {
    ...shorthands.padding('20px'),
    ...shorthands.gap('5px'),
    // maxWidth: '1241px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    // justifyContent: 'start',
    // alignItems: 'center',
    // textAlign: 'center',
    // flexWrap: 'wrap'
    '& > div':{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  CardItem: {
    width: '300px'
  },
})

export default function Frequent() {
  const styles = useStyles()
  return (
    <div className={styles.gridCardContent}>
      <div>
        <Card
          className={styles.CardItem}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      <div>
        <Card
          className={styles.CardItem}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      <div>
        <Card
          className={styles.CardItem}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
      <div>
        <Card
          className={styles.CardItem}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </div>
    </div>
  )
}