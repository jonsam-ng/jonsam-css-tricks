// Generated with util/create-component.js
import React, { useState } from "react";
import { SimpleLoginProps } from "./SimpleLogin.types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faSignInAlt} from "@fortawesome/fontawesome-free-solid";
import "./SimpleLogin.scss";

const SimpleLogin: React.FC<SimpleLoginProps> = ({}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="simple__login--container">
      <div className="show-login-btn" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faSignInAlt} />&nbsp;&nbsp;登&nbsp;陆
      </div>
      <div className={`login-box ${show ? "showed" : ""}`}>
        <div className="hide-login-btn" onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <form action="index.html" className="login-form" method="POST">
          <h1>Welcome</h1>
          <input type="text" className="txtb" placeholder="用户名" />
          <input
            type="password"
            className="txtb"
            placeholder="密码"
          />
          <input
            type="button"
            value="登&nbsp;&nbsp;&nbsp;陆"
            className="login-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default SimpleLogin;
