export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.link} alt={props.name} />
      </div>
      <div className="usuario">{props.name}</div>
    </div>
  );
}
