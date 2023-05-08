import { useState } from "react";

export default function Post(props) {
  
  

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.perfil} alt={props.name} />
          {props.name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.imagem} alt={props.content} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeSrc} alt={props.likeUser} />
          <div className="texto">
            Curtido por <strong>{props.likeUser}</strong> e
            <strong> outras {Number(props.likeNumber).toLocaleString("pt-br")} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
