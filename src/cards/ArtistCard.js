export default function Artist(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        width="165"
        height="165"
        alt="cardimage"
        className="artistCardImage"
      />
      <p className="cardTitle">{props.title}</p>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}
