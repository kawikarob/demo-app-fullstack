import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

export const List = () => {
   const { quotes, removeQuote } = useContext(GlobalContext);

   return (
      <div>
         {quotes.map((quote) => (
            <Card className="mt-4 border border-dark" key={quote.id}>
               <CardBody>
                  <CardTitle>{quote.quote}</CardTitle>
                  {/* <CardText>- kawika</CardText> */}
               </CardBody>
               <div className="ml-auto mb-2 mr-2">
                  <Link
                     to={`/edit-quote/${quote.id}`}
                     className="btn btn-secondary mr-1"
                  >
                     Edit
                  </Link>
                  <Button
                     onClick={() => removeQuote(quote.id)}
                     className="btn btn-danger"
                  >
                     Delete
                  </Button>
               </div>
            </Card>
         ))}
      </div>
   );
};

// changed to a card intead
// <ListGroup className="mt-4 border border-dark">
//    <ListGroupItem className="d-flex">
//       first quote
//       <div className="ml-auto">
//          <Button className="btn btn-danger mr-1">Delete</Button>
//          <Link to="/edit-quote/1" className="btn btn-secondary">
//             Edit Quote
//          </Link>
//       </div>
//    </ListGroupItem>
// </ListGroup>
