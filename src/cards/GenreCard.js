export default function Genre(props) {
  return (
    <div style={{ height: 200, width: 195, borderRadius: 10, backgroundColor: props.color }} >
      <h2 className="genreCardTitle">{props.title}</h2>
    </div>
  );
}
