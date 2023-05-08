import { useState } from "react";

export default function Usuario() {
  
  let [nome, setNome] = useState('catanacomics');
  let [imagem, setImagem] = useState("assets/img/catanacomics.svg");

  function trocarNome() {
    let novoNome = prompt("Digite um nome:")
    if (novoNome === null || novoNome === undefined || novoNome === ''){
      setNome(nome);
    }
    else {
      setNome(novoNome)
    }
  }

  function trocarImagem() {
    let novaImagem = prompt("Digite o link de uma imagem:");

    if (novaImagem === null || novaImagem === undefined || novaImagem === '') {
      setImagem(imagem)
    }
    else {
      if (novaImagem.includes(".jpg")) {
        setImagem(novaImagem)
      }
      else {
        setImagem(imagem)
      }
    }
  }
  
  return (
    <div className="usuario">
      <img data-test="profile-image" onClick={trocarImagem} src={imagem} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong data-test="name">{nome}</strong>
          <ion-icon data-test="edit-name" onClick = {trocarNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
