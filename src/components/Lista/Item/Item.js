
import '../Lista.css';
export function Item(props) {

    return (
        <li>
            <span className="item">{props.data}</span>
            <br/>
            <span className="item">{props.hora}</span>
        </li>
    )
}