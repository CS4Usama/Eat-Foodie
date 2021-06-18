import './HowWorks.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function HWcomp(props) {
    return(
        <div>
            <span className="round-border my-4">
                <img src={props.src} alt={props.alt} className="how-works" draggable='false' />
            </span>
            <h3 className="h3 mb-3">{props.heading}</h3>
            <p className="mb-4">
                {props.text}
            </p>
        </div>
    );
}