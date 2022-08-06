import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const [contents] = useSelector((state) => state.contents);

  console.log(contents);
  return (
    <div className="card">
      <h2>Contents from state</h2>
      {contents?.map((content, index) => (
        <div key={index}>
          <h3>{content.title}</h3>
          <p>{content.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
