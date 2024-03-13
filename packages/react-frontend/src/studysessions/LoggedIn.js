//Will display a table of your active study sessions
//import from mockStudySpaces for now
//import { onCampus, offCampus } from './mockStudySessions';
import TableElements from "./TableElements";
import React from "react";

function LoggedIn() {
  const mechDescription =
    "Struggling with fluid dynamics? Working on your project last-minute? Join fellow struggling mechanical engineering students in Baker on Match 11. Drinks and snacks will be provided.";
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Info</th>
        </tr>
      </thead>
      <tbody>
        <TableElements
          name="Mech Allnighter"
          date="March 11"
          info={mechDescription}
        />
        <TableElements
          name="Calculus 3 Study Party"
          date="March 16"
          info="TBD"
        />
      </tbody>
    </table>
  );
}

export default LoggedIn;
