import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [shows, setShows] = useState([]);
  //   const [details, setDetails] = useState(0)

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const showData = data.map((shData) => shData.show);
        setShows(showData);
      });
  }, []);

  const findData = shows.find((show) => show.id == id);
  // console.log(findData);
  //   setDetails(findData)

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "200px" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={findData?.image?.original}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title">{findData?.name}</h5>
                  <p className="card-text">{findData?.summary}</p>
                  <p className="card-text">
                  </p>
                  <div  className="w-100 d-flex justify-content-end">
                  <Link to={`/booking/${findData?.id}`}>
                    <Button className="px-5 border-0 rounded-0" style={{backgroundColor:'#443C68'}}>Book Ticket</Button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      {/* <Card style={{width:'500px'}}>
      <Card.Img variant="top" className="w-4" src= {findData?.image?.original}/>
      <Card.Body>
        <Card.Title>{findData?.name}</Card.Title>
        <Card.Text>
         {findData?.summary}
        </Card.Text>
       <Link to={`/booking/${findData?.id}`}>
       <Button>Book Ticket</Button>
       </Link>
      </Card.Body>
    </Card> */}
    </div>
  );
};

export default Details;
