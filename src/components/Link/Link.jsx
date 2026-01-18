import { NavLink } from "react-router-dom";

const Link = ({ href, children }) => {
  return <NavLink to={href}>{children}</NavLink>;
};

export default Link;
