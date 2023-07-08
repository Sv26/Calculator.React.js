import React, { useEffect, useRef } from "react";

import "./Header.css";

function Header(props) {
  // References for scrolling
  const resultRef = useRef();
  const expressionRef = useRef();

  // Scroll to result when history changes
  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  // Scroll expression container to the end when expression changes
  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className="header custom-scroll">
      {/* Display history */}
      <div className="header_history">
        {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
      </div>
      <br />
      {/* Display expression */}
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      {/* Display result */}
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
}

export default Header;
