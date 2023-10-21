
import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

  import Clock from './components/Clock';

function App() {
  return (
    
    <div  className='clock1'>
      <Container>
        <Row className='m-5'>
          <Col >
            <Clock />
          </Col>
        </Row>
      </Container>
    

      
    </div>
  );
}

export default App;
