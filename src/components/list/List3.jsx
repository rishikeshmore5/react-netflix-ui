import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem31 from "../listItem/ListItem31";
import ListItem32 from "../listItem/ListItem32";
import ListItem33 from "../listItem/ListItem33";
import ListItem34 from "../listItem/ListItem34";
import ListItem35 from "../listItem/ListItem35";
import ListItem36 from "../listItem/ListItem36";
import ListItem37 from "../listItem/ListItem37";
import ListItem38 from "../listItem/ListItem38";
import ListItem39 from "../listItem/ListItem39";
import ListItem40 from "../listItem/ListItem40";
import "./list.scss";

export default function List3() {
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
      <span className="listTitle">Horror</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem31 index={0} />
          <ListItem32 index={1} />
          <ListItem33 index={2} />
          <ListItem34 index={3} />
          <ListItem35 index={4} />
          <ListItem36 index={5} />
          <ListItem37 index={6} />
          <ListItem38 index={7} />
          <ListItem39 index={8} />
          <ListItem40 index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
