import NavBar from "./components/navBar";
import Products from "./components/products";
import ProductsDetails from "./components/productDetails";
import Posts from "./components/posts";
import Admin from "./components/admin/dashboard";
import Home from "./components/home";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="content">
        <Switch>
          {/* <Route path="/products" component={Products}></Route> */}
          {/* routes parameter */}
          <Route path={"/products/:id"} component={ProductsDetails}></Route>
          <Route
            path="/products"
            render={(props) => (
              <Products anyProps="12345" {...props}></Products>
            )} //pass props as arg so react inject history, match,location props to component
          ></Route>
          <Route path="/posts/:month?/:year?" component={Posts}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found"></Redirect>
          {/* <Redirect from="/old-route" to="/new-route"></Redirect> */}

          {/* Protecting Route */}
          {/* <Route path="/admin" render={props => {
            if(!admin) return <Redirect to="login"></Redirect>
            return <Admin {...props} ></Admin>
          }}></Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
// with Switch or exact it will route to exact componnet, that matches route
