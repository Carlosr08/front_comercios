import { Link } from "react-router-dom";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Frequent from "../components/home/Frequent";

export default function HomePage() {

  return <>
    <Carousel />
    <Categories />
    <Frequent />
  </>
}