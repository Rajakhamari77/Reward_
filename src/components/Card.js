import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white bg-opacity-90 backdrop-blur-lg shadow-xl p-4 rounded-lg ${className}`}>
    {children}
  </div>
);
