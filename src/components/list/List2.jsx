import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem21 from "../listItem/ListItem21";
import ListItem22 from "../listItem/ListItem22";
import ListItem23 from "../listItem/ListItem23";
import ListItem24 from "../listItem/ListItem24";
import ListItem25 from "../listItem/ListItem25";

import ListItem26 from "../listItem/ListItem26";
import ListItem27 from "../listItem/ListItem27";
import ListItem28 from "../listItem/ListItem28";
import ListItem29 from "../listItem/ListItem29";
import ListItem30 from "../listItem/ListItem30";
import "./list.scss";

export default function List2() {
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
      <span className="listTitle">Comedy</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem21 index={0} />
          <ListItem22 index={1} />
          <ListItem23 index={2} />
          <ListItem24 index={3} />
          <ListItem25 index={4} />
          <ListItem26 index={5} />
          <ListItem27 index={6} />
          <ListItem28 index={7} />
          <ListItem29 index={8} />
          <ListItem30 index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
