// import { PlayIcon } from "@heroicons/react/24/solid";

export default function Top(props) {
    return (
        <div className="topCard">
            <img src={props.image} alt="topcardimage" className="topCardImage"/>
            <p className="topCardTitle">{props.title}</p>
            {/* <PlayIcon width={20} height={20} className="playButton"/> */}
        </div>
    )
}