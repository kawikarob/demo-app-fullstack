import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./components/pages/Landing";
import { AllQuotes } from "./components/pages/AllQuotes";
import { EditQuote } from "./components/pages/EditQuote";
import { AddQuote } from "./components/pages/AddQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
   return (
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
         <GlobalProvider>
            <Router>
               <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/all-quotes" component={AllQuotes} />
                  <Route exact path="/add-quote" component={AddQuote} />
                  <Route exact path="/edit-quote/:id" component={EditQuote} />
               </Switch>
            </Router>
         </GlobalProvider>
      </div>
   );
}

export default App;
