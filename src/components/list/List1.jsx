import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import ListItem11 from "../listItem/ListItem11";
import ListItem12 from "../listItem/ListItem12";
import ListItem13 from "../listItem/ListItem13";
import ListItem14 from "../listItem/ListItem14";
import ListItem15 from "../listItem/ListItem15";
import ListItem16 from "../listItem/ListItem16";
import ListItem17 from "../listItem/ListItem17";
import ListItem18 from "../listItem/ListItem18";
import ListItem19 from "../listItem/ListItem19";
import ListItem20 from "../listItem/ListItem20";
import "./list.scss";

export default function List1() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Romance</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem11 index={0} />
          <ListItem12 index={1} />
          <ListItem13 index={2} />
          <ListItem14 index={3} />
          <ListItem15 index={4} />
          <ListItem16 index={5} />
          <ListItem17 index={6} />
          <ListItem18 index={7} />
          <ListItem19 index={8} />
          <ListItem20 index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
