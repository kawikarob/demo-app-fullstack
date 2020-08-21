import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

export const EditQuote = (props) => {
   const [selectedQuote, setSelectedQuote] = useState({
      id: "",
      quote: "",
   });
   const [quote, setQuote] = useState("");
   const [id, setId] = useState("");

   const { quotes, editQuote } = useContext(GlobalContext);
   const history = useHistory();
   const currentQuoteId = props.match.params.id;

   useEffect(() => {
      setId(currentQuoteId);
      const quoteId = currentQuoteId;
      const selectedQuote = quotes.find((quote) => quote.id === quoteId);
      setSelectedQuote(selectedQuote);
   }, [currentQuoteId, quotes]);

   const onSubmit = () => {
      // console.log({ quote, id });
      editQuote({ quote, id });

      // editQuote(selectedQuote);
      history.push("/all-quotes");
   };

   const onChange = (e) => {
      setSelectedQuote({ ...selectedQuote, [e.target.name]: e.target.value });
      //setQuote({ ...selectedQuote, [e.target.quote]: e.target.value });
   };
   console.log(onChange);

   return (
      <Form onSubmit={onSubmit}>
         <FormGroup>
            <Label>Quote</Label>
            <Input
               type="text"
               name="quote"
               value={quote}
               onChange={(e) => setQuote(e.target.value)}
               placeholder="Edit Quote"
               required
            ></Input>
         </FormGroup>
         <Link to="/all-quotes" className="btn btn-danger">
            Cancel
         </Link>
         <Button type="submit" className="btn btn-info ml-2">
            Save Changes
         </Button>
      </Form>
   );
};

// cant save edited text

// export const EditQuote = (props) => {
//    const { editQuote, quotes } = useContext(GlobalContext);
//    const [selectedQuote, setSelectedQuote] = useState({
//       id: "",
//       quote: "",
//    });
//    const history = useHistory();
//    const currentQuoteId = props.match.params.id;

//    useEffect(() => {
//       const quoteId = currentQuoteId;
//       const selectedQuote = quotes.find((quote) => quote.id === quoteId);
//       setSelectedQuote(selectedQuote);
//    }, [currentQuoteId, quotes]);

//    const onChange = (e) => {
//       setSelectedQuote({ ...selectedQuote, [e.target.quote]: e.target.value });
//    };

//    const onSubmit = (e) => {
//       e.preventDefault();
//       editQuote(selectedQuote);
//       history.push("/all-quotes");
//    };

//    return (
//       <Form onSubmit={onSubmit}>
//          <FormGroup>
//             <Label>Quote</Label>
//             <Input
//                type="text"
//                value={selectedQuote.quote}
//                onChange={onChange}
//                name="quote"
//                placeholder="Enter Quote"
//                required
//             ></Input>
//          </FormGroup>
//          <Link to="/" className="btn btn-danger">
//             Cancel
//          </Link>
//          <Button type="submit" className="btn btn-info ml-2">
//             Save Changes
//          </Button>
//       </Form>
//    );
// };

//return (
//       <Form onSubmit={onSubmit}>
//          <FormGroup>
//             <Label>Quote</Label>
//             <Input
//                type="text"
//                name="quote"
//                value={quote}
//                onChange={(e) => setQuote(e.target.value)}
//                placeholder="Enter Quote"
//             ></Input>
//          </FormGroup>
//          <Link to="/" className="btn btn-danger">
//             Cancel
//          </Link>
//          <Button type="submit" className="btn btn-info ml-2">
//             Save Changes
//          </Button>
//       </Form>
//    );
// };
