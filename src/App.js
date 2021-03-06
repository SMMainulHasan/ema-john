import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import Not_Found from './component/Not_Found/Not_Found';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './component/ProductDetail/ProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:jumlfhgo">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <Not_Found></Not_Found>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
