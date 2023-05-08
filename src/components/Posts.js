import Post from "./Post.js"

export default function Posts() {
 
    const postDados = [
    {
      perfil: "assets/img/meowed.svg",
      name: "meowed",
      imagem: "assets/img/gato-telefone.svg",
      content: "gato-telefone",
      likeSrc: "assets/img/respondeai.svg",
      likeUser: "respondeai",
      likeNumber: "101523"
    },
    {
      perfil: "assets/img/barked.svg",
      name: "barked",
      imagem: "assets/img/dog.svg",
      content:"dog",
      likeSrc: "assets/img/adorable_animals.svg",
      likeUser: "adorable_animals",
      likeNumber: "99159"
    },
    {
      perfil: "assets/img/meowed.svg",
      name: "meowed",
      imagem: "assets/img/gato-telefone.svg",
      content: "gato-telefone",
      likeSrc: "assets/img/respondeai.svg",
      likeUser: "respondeai",
      likeNumber: "101523"
    },
  ]

  return (
    <div className="posts">
        {postDados.map(dados => <Post perfil={dados.perfil} name={dados.name} imagem={dados.imagem}
        likeSrc={dados.likeSrc} likeUser={dados.likeUser} likeNumber={dados.likeNumber} />)}
    </div>
  )
}
