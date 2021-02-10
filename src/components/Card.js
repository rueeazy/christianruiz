import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div className="card">
      <a href={props.live}>
        <img
          className="project-photo"
          alt={props.name}
          src={require(`../assets/images/${props.image}.png`)}
        />
      </a>
      <div className="caption">{props.name}</div>
      <div className="icons">
        <a href={props.repo}>
          <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
        </a>
        <a href={props.live}>
          <FontAwesomeIcon className="icon" icon="external-link-alt" />
        </a>
      </div>
    </div>
  );
};

export default Card;
