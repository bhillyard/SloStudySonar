//import { onCampus, offCampus } from './mockStudySessions';
import React from "react";

function TableElements(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.info}</td>
    </tr>
  );
}

export default TableElements;
