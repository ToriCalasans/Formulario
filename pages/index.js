// pages/index.js
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Formulario = ({ year }) => {
  const [professors, setProfessors] = useState([]);
  const [selections, setSelections] = useState({
    gold: '',
    silver: '',
    bronze: '',
  });

  useEffect(() => {
    const fetchProfessors = async () => {
      const res = await fetch(`/api/professors?year=${year}`);
      const data = await res.json();
      setProfessors(data);
    };

    fetchProfessors();
  }, [year]);

  const handleSelect = (medal, profId) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [medal]: profId,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selections);
    // Aqui você pode adicionar a lógica para enviar as seleções ao servidor
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Escolha seus Professores</h1>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <h2>Medalha de Ouro</h2>
                <Row>
                  {professors.map((prof) => (
                    <Col key={prof.id} md={4}>
                      <Card
                        onClick={() => handleSelect('gold', prof.id)}
                        className={selections.gold === prof.id ? 'selected' : ''}
                      >
                        <Card.Img variant="top" src={prof.photo} />
                        <Card.Body>
                          <Card.Title>{prof.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Medalha de Prata</h2>
                <Row>
                  {professors.map((prof) => (
                    <Col key={prof.id} md={4}>
                      <Card
                        onClick={() => handleSelect('silver', prof.id)}
                        className={selections.silver === prof.id ? 'selected' : ''}
                      >
                        <Card.Img variant="top" src={prof.photo} />
                        <Card.Body>
                          <Card.Title>{prof.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Medalha de Bronze</h2>
                <Row>
                  {professors.map((prof) => (
                    <Col key={prof.id} md={4}>
                      <Card
                        onClick={() => handleSelect('bronze', prof.id)}
                        className={selections.bronze === prof.id ? 'selected' : ''}
                      >
                        <Card.Img variant="top" src={prof.photo} />
                        <Card.Body>
                          <Card.Title>{prof.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </form>
        </Col>
      </Row>
      <style jsx>{`
        .selected {
          border: 2px solid gold;
        }
      `}</style>
    </Container>
  );
};

const IndexPage = () => {
  const [year, setYear] = useState(6); // Exemplo: 6º ano

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formYear">
            <Form.Label>Selecione o Ano</Form.Label>
            <Form.Control as="select" value={year} onChange={handleYearChange}>
              <option value={6}>6º Ano</option>
              <option value={7}>7º Ano</option>
              <option value={8}>8º Ano</option>
              <option value={9}>9º Ano</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Formulario year={year} />
    </Container>
  );
};

export default IndexPage;
