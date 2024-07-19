import NavBar from '../components/nav';
// import Carousel from '../components/carousel';
import Card from '../components/cards';
import Footer from '../components/footer';

import Link from 'next/link';

const Home = () => {
  return (
      <><NavBar />
      <section>
        <div className="home">
          <div className='conteudo'>
            <div className='texto-divertidamente'>
              <h1> Divertidamente</h1>
              <p>Divertida Mente (2015) é uma animação da Disney-Pixar que explora as emoções de uma jovem chamada Riley, de 11 anos,
                que enfrenta uma grande mudança ao se mudar para San Francisco. Dentro de sua mente, cinco emoções – Alegria, Tristeza,
                Raiva, Nojinho e Medo – trabalham juntas no centro de controle para ajudá-la a lidar com suas experiências diárias.
                A líder, Alegria, tenta manter Riley feliz, mas quando ela e Tristeza são acidentalmente afastadas do centro de controle,
                as outras emoções ficam no comando. Durante uma jornada para retornar, Alegria descobre a importância de todas as emoções,
                especialmente da Tristeza, para o bem-estar de Riley.<br />

                <br />Divertida Mente 2 (2024) continua a explorar a complexidade das emoções de Riley, agora uma adolescente enfrentando novos
                desafios. As emoções no centro de controle, incluindo novas emoções introduzidas na sequência, precisam se adaptar às mudanças
                de humor e às novas experiências de Riley enquanto ela navega pela adolescência. A trama aborda temas como autoconhecimento e
                a importância de aceitar todas as emoções como partes essenciais do crescimento. A sequência aprofunda a mensagem do primeiro
                filme, destacando a evolução das emoções e a complexidade da mente humana à medida que Riley amadurece.
              </p>
            </div>
            <div className='imagem-divertidamente'>
              <img src='images/dvt2.jpeg' alt="personagens" />
            </div>
          </div>
        </div>
    </section>
    <Footer /></>
  );
};

export default Home