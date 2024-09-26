import React from "react";

export const ScrollArea = ({ children, className }) => (
  <div className={`overflow-y-scroll ${className}`}>
    {children}
  </div>
);
