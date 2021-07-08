import { Link, Route, Switch } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <br />
      <Link to="/page1/detailA">detailA</Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
    </div>
  );
};
