import { Link } from "react-router-dom";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";

export default function HomePage(){
  return <>
    <Carousel/>
    <Categories/>
  </>
}