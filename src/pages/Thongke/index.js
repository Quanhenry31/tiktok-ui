import TK1 from '~/components/TK1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TK2 from '~/components/TK2';
import TK3 from '~/components/TK3';
function Home() {
  return (
    <Row className="justify-content-between px-5">
      <Col>
        <TK3 />
      </Col>
      <Col>
        <TK1 />
      </Col>

      <Col>
        <TK2 />
      </Col>
    </Row>
  );
}

export default Home;
