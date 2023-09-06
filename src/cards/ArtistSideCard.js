export default function ArtistSide(props) {
  return (
    <div className="sideCard">
      <img
        src={props.image}
        width={48}
        height={48}
        alt="contentimg"
        className="artistSideCardImg"
      />
      <div className="sideCardDetails">
        <p className="sideCardTitle">{props.title}</p>
        <p className="sideCardInfo">{props.info}</p>
      </div>
    </div>
  );
}
