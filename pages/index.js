// pages/index.js
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const professors = {
  6: [
    { id: 1, name: 'Prof. A', photo: '/images/photoA.jpg' },
    { id: 2, name: 'Prof. B', photo: '/images/photoB.jpg' },
  ],
  7: [
    { id: 3, name: 'Prof. C', photo: '/images/photoC.jpg' },
    { id: 4, name: 'Prof. D', photo: '/images/photoD.jpg' },
  ],
  // Adicione mais anos e professores conforme necessário
};

const Formulario = ({ year }) => {
  const [selections, setSelections] = useState({
    gold: '',
    silver: '',
    bronze: '',
  });

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
                  {professors[year].map((prof) => (
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
                  {professors[year].map((prof) => (
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
                  {professors[year].map((prof) => (
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
  // Defina o ano desejado pelo administrador
  const year = 6; // Exemplo: 6º ano

  return <Formulario year={year} />;
};

export default IndexPage;
