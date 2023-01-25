import { Link } from "react-router-dom";

export default function HomePage(){
  return <>
    Home
    <Link to="login">
      login
    </Link>
  </>
}