import React from "react";

export const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={`block text-lg font-medium ${className}`}>
    {children}
  </label>
);
