export default function ArtistSearch(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        width="165"
        height="165"
        alt="cardimage"
        className="artistSearchCardImage"
      />
      <p className="cardTitle">{props.title}</p>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}
