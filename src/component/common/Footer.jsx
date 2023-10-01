import React from "react";
import { BackTop, FloatButton } from "antd";

const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#">TECH</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">copyright &copy; 2020 Tech</div>
        <FloatButton.BackTop></FloatButton.BackTop>
      </div>
    </div>
  );
};

export default AppFooter;
