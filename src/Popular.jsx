import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Spinner,
  Col,
  Container,
  Row,
  Modal,
} from "react-bootstrap";
function Popular() {
  const apiKey = "1660f18f92a1423bfff7c2b1ed2afc2b";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  const [populares, setPopulares] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Llamada a la API para obtener las películas
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPopulares(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [url]);
  // console.log(peliculas);
  // Función para mostrar el modal
  const mostrarModal = (popular) => {
    setSelectedDetail(popular); // Guardamos la película seleccionada
    setShowModal(true); // Mostramos el modal
  };

  // Función para ocultar el modal
  const ocultarModal = () => {
    setShowModal(false); // Ocultamos el modal
    setSelectedDetail(null); // Limpiamos el detalle seleccionado
  };

  const urlGener = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-EN`;
  const [gener, setGener] = useState([]);
  useEffect(() => {
    axios
      .get(urlGener)
      .then((response) => {
        setGener(response.data.genres);
      })
      .catch((error) => console.error(error));
  }, []);
  // console.log(gener);
  return (
    <>
      {populares ? (
        <Container className="container">
          <Row className="row">
            {populares.map((popular) => (
              <Col key={popular.id} className="mb-4 col" xs={6} md={4} lg={3}>
                <Card className="card">
                  <div className="content-img">
                    <Card.Img
                      className="img"
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`}
                    />
                  </div>

                  <Card.Body>
                    <Card.Title className="title">
                      {popular.original_title.toUpperCase()}
                    </Card.Title>
                    <Card.Text className="m-0">
                      <strong>Release date: </strong> {popular.release_date}
                    </Card.Text>
                    <Card.Text className="m-0">
                      <strong>Rating: </strong>
                      {popular.vote_average.toFixed(1)}
                    </Card.Text>
                    <div className="content-description">
                      <Card.Text className="m-0 description">
                        <strong className="name">
                          Synopsis <br />
                        </strong>
                        {popular.overview.length > 50
                          ? `${popular.overview.substring(0, 95)} ...`
                          : popular.overview}
                      </Card.Text>
                    </div>
                    <div className="cont-btn">
                      <Button
                        className="btn-more"
                        onClick={() => mostrarModal(popular)}
                      >
                        Ver más
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {selectedDetail && (
            <Modal
              className="modal"
              show={showModal}
              onHide={ocultarModal}
              size="lg"
            >
              <Modal.Header closeButton className="modal-content-title">
                <Modal.Title className="modal-title">
                  {selectedDetail.title.toUpperCase()}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <div className="content-modal-img">
                  <img
                    className="modal-img"
                    src={`https://image.tmdb.org/t/p/original/${selectedDetail.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="modal-content-descrip">
                  <p>
                    <strong>Release Date: </strong>
                    {selectedDetail.release_date}
                  </p>
                  <p>
                    <strong>Rating: </strong>
                    {selectedDetail.vote_average}
                  </p>
                  <p>
                    <strong>Synopsis: </strong>
                    {selectedDetail.overview}
                  </p>
                  <p>
                    <strong>Genre: </strong>
                    {/* {selectedDetail.genre_ids[0]} */}
                    {selectedDetail.genre_ids
                      .map((genreId) => {
                        const genre = gener.find((g) => g.id === genreId);
                        return genre ? genre.name : "Unknown Genre";
                      })
                      .join(", ")}
                  </p>
                  <p>
                    <strong> popularity:</strong>
                    {selectedDetail.popularity}
                  </p>
                </div>
              </Modal.Body>
            </Modal>
          )}
        </Container>
      ) : (
        // Spinner de carga mientras se obtienen las películas
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Spinner animation="border" variant="success" />
        </div>
      )}
    </>
  );
}

export default Popular;
