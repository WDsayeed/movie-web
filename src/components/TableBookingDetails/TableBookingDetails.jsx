import { Table } from "react-bootstrap";

const TableBookingDetails = () => {
  const getData = JSON.parse(localStorage.getItem("bookingDetails"));

  console.log(getData);
  return (
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Seat Number</th>
          <th>Ticket Number</th>
        </tr>
      </thead>
      <tbody>
        {getData.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.seat}</td>
            <td>{data.ticketNumber}</td>
          </tr>
        ))}
        {/* <tr>
                  
                  </tr> */}
      </tbody>
    </Table>
  );
};

export default TableBookingDetails;
