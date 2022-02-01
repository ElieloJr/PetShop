import React from "react";
import { Link } from "react-router-dom";

const ListaDePost = () =>{
    const posts = [
        {
          "id": 1,
          "title": "Banho no cão",
          "metadescription": "Use as utensilios certos para banhar seu cão",
          "body": "A maioria dos cães prefere pular a hora do banho, mas o banho desempenha um papel importante na saúde do pelo e da pele do seu cão, ajudando a mantê-lo limpo e livre de sujeira e parasitas. Ter os produtos certos pode ajudá-lo a se sentir mais confortável.",
          "categoria": "bem-estar",
          "subcategoria": "higiene"
        },
        {
          "id": 2,
          "title": "Seu cachorro merece um tapete higiênico",
          "metadescription": "O banheiro que seu cachorro merece",
          "body": "Os tapetes higiênicos são uma inovação do mercado pet, perfeitos para que seu cão faça suas necessidades com conforto e sem sujar a casa. São produtos descartáveis ou laváveis que garantem conforto ao animal.",
          "categoria": "bem-estar",
          "subcategoria": "higiene"
        },
        {
          "id": 3,
          "title": "Época de pulgas?",
          "metadescription": "É necessário evitar que seus animais sejam afetados por esses parasitas",
          "body": "Não é a mordida, mas a reação alérgica a ela que faz seu cão coçar. Alguns animais de estimação são hipersensíveis a pulgas e podem sofrer uma reação severa com apenas uma única mordida. No entanto, todos os animais de estimação sentirão desconforto em caso de picadas de pulgas. Portanto, assim que você vir arranhões repetidos, suspeite de pulgas.",
          "categoria": "bem-estar",
          "subcategoria": "saude"
        },
        {
          "id": 4,
          "title": "Uma onda de pets estressados",
          "metadescription": "A mudança de rotina pode ser o maior fator",
          "body": "Eles começaram a contar com a atenção extra incluindo todos aqueles novos cachorrinhos que esperam que estejamos por perto, mas com mais pessoas voltando ao escritório ou saindo de férias, os cães vão sentir a ausência mais do que nunca, criando uma pandemia de ansiedade entre nossos cães, para a qual podemos não estar preparados.",
          "categoria": "comportamento",
          "subcategoria": "educacao"
        },
        {
          "id": 5,
          "title": "Como treinar seu cachorro para parar de ter medo",
          "metadescription": "A socialização é um grande fator nesse aprendizado",
          "body": "Ensinar um cachorro a parar de ter medo só pode ser feito aumentando sua autoconfiança. Isso significa mudar a forma como sua mente reage em certas situações e transformar associações negativas em positivas. Fazer isso requer muita paciência e uma série de exposições controladas ao evento ou objeto temido, mas a uma distância suficiente para que o cão não se sinta ansioso.",
          "categoria": "comportamento",
          "subcategoria": "educacao"
        },
        {
          "id": 6,
          "title": "Por que os gatos rosnam?",
          "metadescription": "Rosnando é um ruído de aviso",
          "body": "Uma coisa que os cientistas sabem com certeza é que a parte do cérebro do gato que controla as vocalizações está muito conectada à parte do cérebro que controla as emoções do gato. Portanto, o que o gato está “dizendo” é absolutamente uma percepção de como ele está se sentindo.",
          "categoria": "comportamento",
          "subcategoria": "treinamento"
        },
        {
          "id": 7,
          "title": "Como treinar um gato",
          "metadescription": "Sim! Você pode treinar um gato e é muito mais fácil do que você pensava",
          "body": "Normalmente usado como ferramentas de treinamento para uma ampla variedade de animais, um clicker custará apenas alguns dólares e ajudará você a dar um reforço positivo quando estiver aprendendo a treinar um gato. (Você também pode usar uma caneta comum com um botão de clique - o importante é ter um ruído distinto que possa fazer instantaneamente.) A maior parte do treinamento do gato envolve oferecer a seu gato uma guloseima que ele goste após um clique para marcar o comportamento desejado.",
          "categoria": "comportamento",
          "subcategoria": "treinamento"
        }
      ]
    return(
        <section className="posts container">
            {
                posts.map((post) => {
                    <Link className={`cartao-post cartao-post--${post.categoria}`}>
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo">
                                {post.title}
                            </h3>
                            <p className="cartao-post__meta">
                                {post.metadescription}
                            </p>
                        </article>
                    </Link>
                })
            }
            {/* <Link to="/" className="cartao-post cartao-post--bem-estar">
                    <article key="1">
                        <h3 className="cartao-post__titulo">
                            Banho no cão
                        </h3>
                        <p className="cartao-post__meta">
                        Use as utensilios certos para banhar seu cão
                        </p>
                    </article>
                </Link> */}
        </section>
    )
}

export default ListaDePost