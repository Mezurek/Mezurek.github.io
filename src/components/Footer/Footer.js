import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrap">
          <div className="footer-about widget">
            <h3 className="widget-title">About Budget Bytes</h3>
            <div className="textwidget">
              <p>
                <strong>Small budget? No problem!</strong>
                Cooking on a budget shouldn't mean canned beans and ramen
                noodles night after night. Welcome to the world of delicious
                recipes designed for small budgets.
              </p>
            </div>
          </div>

          <div id="nav-menu1" className="widget widget_nav_menu">
            <h3 className="widget-title">Information</h3>
            <div className="menu-footer-1-container">
              <ul id="menu-footer-1" className="menu">
                <li>
                  <a href="https://www.budgetbytes.com/about/">
                    Hi, I'm Beth...
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/contact/">Contact</a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/faq/">FAQ</a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/terms-conditions/">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/budget-bytes-web-accessibility-policy/">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="nav-menu2" className="widget widget_nav_menu">
            <h3 className="widget-title">Browse</h3>
            <div className="menu-footer-2-container">
              <ul id="menu-footer-2" className="menu">
                <li>
                  <a href="https://www.budgetbytes.com/category/recipes/">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/category/how-to/">
                    How-To
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/kitchen-basics/">
                    Kitchen Basics
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/stock-kitchen-pantry-staples/">
                    Pantry Staples
                  </a>
                </li>
                <li>
                  <a href="https://www.budgetbytes.com/category/extra-bytes/">
                    Extra Bytes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="nav-menu3" className="widget widget_nav_menu">
            <h3 className="widget-title">Connect</h3>
            <div className="menu-footer-3-container">
              <ul id="menu-footer-3" className="menu">
                <li>
                  <a href="https://www.facebook.com/budgetbytes1">Facebook</a>
                </li>
                <li>
                  <a href="https://pl.pinterest.com/budgetbytes/_created/">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/budgetbytes/">Instagram</a>
                </li>
                <li>
                  <a href="https://twitter.com/budget_bytes">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC17vdVOZBVxTSDcldUBBlRg">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">©2021 Mączyński Sebastian</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
