import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TableBookingDetails from "../TableBookingDetails/TableBookingDetails";

const Booking = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const showData = data?.map((shData) => shData.show);
        setBookingData(showData);
      });
  }, []);

  const findData = bookingData.find((show) => show.id == id);

  const handleBookingForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const ticketNumber = form.ticketNumber.value;
    const seat = form.seat.value;
    console.log(name, phone, email, date, ticketNumber, seat);

    const previousData = JSON.parse(localStorage.getItem("bookingDetails"));
    let bookingDetails = [];
    const formData = { name, phone, email, date, ticketNumber, seat };
    if(previousData){
      bookingDetails.push(...previousData, formData);
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }else{
      bookingDetails.push(formData);
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }
    
    
    
    // form.reset();
  };
  return (
    <div className="container text-center w-50 p-3">
      <div className="mx-auto w-full">
        <h2>Booking form</h2>
        <h3>{findData?.name}</h3>
      </div>
      <Form onSubmit={handleBookingForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="tel" name="phone" placeholder="Phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="email" name="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="date" name="date" placeholder="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="number"
            name="ticketNumber"
            placeholder="ticket number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="number" name="seat" placeholder="seat number" />
        </Form.Group>
        <input style={{backgroundColor:'#443C68'}} className="btn btn-info px-4 text-white border-0 rounded-0" type="submit" value="Ticket Book" />
      </Form>
      <TableBookingDetails></TableBookingDetails>
    </div>
  );
};

export default Booking;
