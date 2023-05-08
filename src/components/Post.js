import { useState } from "react";

export default function Post(props) {

  let [save, setSave] = useState("bookmark-outline")
  let [like, setLike] = useState("heart-outline")
  let [classHeart, setClassHeart] = useState('')
  let [curtidas, setCurtidas] = useState(Number(props.likeNumber).toLocaleString("pt-br"))

  function trocarBookmark() {
    let saved = "bookmark"
    if (save === "bookmark-outline") {
      setSave(saved)
    }
    else {
      setSave("bookmark-outline")
    }
  }

  function trocarCurtida() {
    let liked = "heart"
    let novaCurtida = Number((props.likeNumber).toLocaleString("pt-br")) + 1
    let curtidaStr = novaCurtida.toLocaleString("pt-br")

    setLike(liked)
    setClassHeart('vermelho')
    setCurtidas(curtidaStr)
  }

  function trocarLike() {
    let liked = "heart";
    let novaCurtida = Number((props.likeNumber).toLocaleString("pt-br")) + 1
    let curtidaStr = novaCurtida.toLocaleString("pt-br")
    console.log(curtidaStr)
    
    if (like === "heart-outline") {
      setLike(liked)
      setClassHeart('vermelho')
      setCurtidas(curtidaStr)
    }
    else{
      setLike('heart-outline')
      setClassHeart('')
      setCurtidas(Number(props.likeNumber).toLocaleString("pt-br"))
    }
  }

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
        <img onDoubleClick={trocarCurtida} src={props.imagem} alt={props.content} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon onClick={trocarLike} class={classHeart} name={like}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={trocarBookmark} name={save}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeSrc} alt={props.likeUser} />
          <div className="texto">
            Curtido por <strong>{props.likeUser}</strong> e
            <strong> outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
