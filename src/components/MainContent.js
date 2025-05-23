import React from "react";

function MainContent({ title, children }) {
  return (
    <div className="main-content">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default MainContent;
