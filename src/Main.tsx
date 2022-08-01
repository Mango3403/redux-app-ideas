import { Row, Col } from 'antd'
import { Bin2Dec } from './features/bin2dec/Bin2Dec';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Bin2Dec />
        </Col>
        <Col span={8}>
          <Bin2Dec />
        </Col>
        <Col span={8}>
          <Bin2Dec />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} />
        <Col span={8} />
        <Col span={8} />
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8} />
        <Col span={8} />
        <Col span={8} />
      </Row>
    </div>
  );
}

export default Main