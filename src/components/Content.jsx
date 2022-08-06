import React from "react";
import { useSelector } from "react-redux";
import "./Content.css";

const Content = () => {
  const [contents] = useSelector((state) => state.contents);

  console.log(contents);
  return (
    <div className="card">
      <h2>Contents from state</h2>
      <div className="content">
        {contents?.map((content, index) => (
          <div key={index} className="content__item">
            <h3>{content.title}</h3>
            <p>{content.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
