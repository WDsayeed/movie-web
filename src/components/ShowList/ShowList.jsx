import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const showData = data.map((shData) => shData.show);
        // console.log(showData);
        setShows(showData);
      });
  }, []);

  return (


    <Row xs={1} md={3} lg={4} className="g-5 w-100 h-100">
      {shows.map(show => (
        <Col key={show.id}>
          <Card className="shadow p-3 mb-5 bg-body-tertiary rounded border-0">
           <div style={{height:'300px'}} className="w-100">
           <Card.Img className="w-100 h-100" variant="top" src={show.image.original} />
           </div>
            <Card.Body>
              <div className="d-flex justify-content-between">
              <Card.Title className="text-uppercase">{show.name}</Card.Title>
              <small>{show.language}</small>
              </div>
  
              <Link to={`/details/${show.id}`}>            
              <Button className="w-100 mt-3 border-0 rounded-0" style={{backgroundColor:'#443C68'}} variant="primary">Details</Button>
             </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


    // <div className="row row-cols-1 row-cols-md-4 g-4">
    //   {
    //     shows.map(show=>)
    //   }
    //   {/* {
    //     shows.map((show) => (
    //       <Card key={show.id}>
    //         <Card.Img variant="top" src={show.image.original} />
    //         <Card.Body>
    //           <Card.Title>{show.name}</Card.Title>
    //           <Card.Text>
                
    //           </Card.Text>
    //           <Link to={`/details/${show.id}`}>            
    //           <Button variant="primary">Details</Button>
    //           </Link>
    //         </Card.Body>
    //       </Card>
    //     ))
    //   } */}
    // </div>
  );
};

export default ShowList;
