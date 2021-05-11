import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  listener = null;
  state = {
    nav: false,
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    const _fnEmptyFunctionPointer = () => {};
    window.removeEventListener("scroll", _fnEmptyFunctionPointer);
  };
  handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };
  render() {
    return (
      <nav id="navbar" className={`navbar ${this.state.nav && "sticky"}`}>
        <div className="dropdown">
          <Link
            to={{
              pathname: "/recipes",
            }}
          >
            Recipes
          </Link>
          <div className="dropdown-content">
            <Link to="bean-grain-recipes">BEANS & GRAINS</Link>
            <Link to="breakfast-recipes">BREAKFAST</Link>
            <Link to="dessert-recipes">DESSERT</Link>
            <Link to="globally-inspired-recipes">GLOBAL</Link>
            <Link to="meat-recipes">MEAT</Link>
            <Link to="pasta-recipes">PASTA</Link>
            <Link to="pizza-recipes">PIZZA</Link>
            <Link to="quick-recipes">QUICK</Link>
            <Link to="salad-recipes">SALAD</Link>
            <Link to="slow-cooker-recipes">SLOW COOKER</Link>
            <Link to="soup-recipes">SOUP</Link>
            <Link to="vegan-recipes">VEGAN</Link>
            <Link to="vegetarian-recipes">VEGETARIAN</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/meal-prep">Meal prep</Link>
          <div className="dropdown-content">
            <Link to="beef-meal-prep">beef meal prep</Link>
            <Link to="chicken-meal-prep">chicken meal prep</Link>
            <Link to="breakfast-meal-prep">breakfast meal prep</Link>
            <Link to="no-re-heat-meal-prep">no re-heat meal prep</Link>
            <Link to="vegetarian-meal-prep">vegetarian meal prep</Link>
          </div>
        </div>
        <a href="https://shop.budgetbytes.com/">meal plans</a>

        <a href="https://shop.budgetbytes.com/shop">shop</a>
        <div className="dropdown">
          <a href="https://www.budgetbytes.com/about/">about</a>
          <div className="dropdown-content">
            <a href="https://www.budgetbytes.com/about/">About me</a>
            <a href="https://www.budgetbytes.com/faq/">FAQ</a>
            <a href="https://www.budgetbytes.com/contact/">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
