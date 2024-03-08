import { onCampus, offCampus } from './mockStudySessions';

function TableElements(props){
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.info}</td>
        </tr>
    )
}

export default TableElements;