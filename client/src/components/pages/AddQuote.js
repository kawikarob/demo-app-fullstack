import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
// import axios from "axios";

export const AddQuote = () => {
   const [quote, setQuote] = useState("");
   const { addQuote } = useContext(GlobalContext);
   const history = useHistory();

   useEffect(() => {
      axios
         .post(`/api/v1/quotes/`)
         .then((res) => {
            console.log(res);
            setQuote(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const onSubmit = (e) => {
      e.preventDefault();
      const newQuote = {
         id: uuid(),
         quote,
      };
      addQuote(newQuote);
      history.push("/all-quotes");
   };

   const onChange = (e) => {
      setQuote(e.target.value);
   };
   console.log(onChange);

   return (
      <Form onSubmit={onSubmit}>
         <FormGroup>
            <Label>Quote</Label>
            <Input
               type="text"
               value={quote}
               onChange={onChange}
               placeholder="Enter Quote"
               required
            ></Input>
         </FormGroup>
         <Link to="/all-quotes" className="btn btn-danger">
            Cancel
         </Link>
         <Button type="submit" to="/all-quotes" className="btn btn-info ml-2">
            Submit
         </Button>
      </Form>
   );
};
