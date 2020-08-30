import React from "react";
import { Container, Image } from "react-bootstrap";
import style from "./scss/landing.module.scss";

const DisplayMembers = ({name, pos, head}) => {
  return (
    <div className={style.head}>
      <Image src={head} className="h-100" roundedCircle />
      <p>{name}</p>
    </div>
  );
};

const Team = ({members}) => {
  return (
    <Container className="pt-5 pb-5">
      <h1 className="mb-5">The Team</h1>
      <div className={style.heads}>
        { 
          members.map( ({name, head, pos}) => ( 
            <DisplayMembers
              key={name}
              name={name}
              head={head}
              pos={pos}
            />
          )) 
        } 
      </div>
    </Container>
  );
};

export default Team;
