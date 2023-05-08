import Usuario from "./Usuario.js";
import Sugestao from "./Sugestao.js";
import { useState } from "react";



export default function Sidebar() {

    const sugestDados = [
        {
          perfil: "assets/img/bad.vibes.memes.svg",
          alt: "bad.vibes.memes.svg",
          nome: "bad.vibes.memes",
          razao: "Segue você",
        },
        {
          perfil: "assets/img/chibirdart.svg",
          alt: "chibirdart",
          nome: "chibirdart",
          razao: "Segue você",
        },
        {
          perfil: "assets/img/razoesparaacreditar.svg",
          alt: "razoesparaacreditar",
          nome: "razoesparaacreditar",
          razao: "Novo no instagram",
        },
        {
          perfil: "assets/img/adorable_animals.svg",
          alt: "adorable_animals",
          nome: "adorable_animals",
          razao: "Segue você",
        },
        {
          perfil: "assets/img/smallcutecats.svg",
          alt: "smallcutecats",
          nome: "smallcutecats",
          razao: "Segue você",
        },
      ];

  return (
    <div className="sidebar">
      <Usuario />
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestDados.map((dados) => (
          <Sugestao
            perfil={dados.perfil}
            alt={dados.alt}
            nome={dados.nome}
            razao={dados.razao}
          />
        ))}
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}
