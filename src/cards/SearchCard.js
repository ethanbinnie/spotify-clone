export default function SearchCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        width="165"
        height="165"
        alt="cardimage"
        className="cardImage"
      />
      <p className="cardTitle">{props.title}</p>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}
