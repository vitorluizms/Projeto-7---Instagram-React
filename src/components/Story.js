export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.link} alt={props.name} />
      </div>
      <div class="usuario">{props.name}</div>
    </div>
  );
}
