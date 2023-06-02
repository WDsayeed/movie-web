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
    <div>
       <Card style={{width:'500px'}}>
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
    </Card>
    </div>
  );
};

export default Details;
