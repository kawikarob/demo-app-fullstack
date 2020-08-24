import React, { useState } from "react";
import { Card, Button, Form, FormGroup, Input } from "reactstrap";
import useForm from "../../useForm";
import validate from "../../validateLogin";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const responseGoogle = (response) => {
      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
   };
   const { handleChange, handleSubmit, values, errors } = useForm(
      submit,
      validate
   );
   const history = useHistory();
   function submit() {
      history.push("/all-quotes");
   }

   return (
      <div>
         <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
         >
            <div className="row">
               <div className="col">
                  <h1>Sign In</h1>
               </div>
            </div>

            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <div>
                     <Input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={values.email}
                        className="mb-2"
                        onChange={handleChange}
                        // required
                     ></Input>
                     {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                     )}
                  </div>
                  <div>
                     <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        className="mb-2"
                        onChange={handleChange}
                        // required
                     ></Input>
                     {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                     )}
                  </div>
               </FormGroup>
               <Button type="submit" block>
                  Submit
               </Button>
            </Form>
            <div className="mt-4">
               <p>Welcome: {name}</p>
               <p>Email: {email}</p>
            </div>
            <div>
               <div className="ml-auto mt-2">
                  <GoogleLogin
                     clientId="474045149746-t9k3pb0v4s205g1hbqd2bg4i1qmd5c6r.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={"single_host_origin"}
                  />
               </div>
            </div>
         </Card>
      </div>
   );
};

export default Login;
