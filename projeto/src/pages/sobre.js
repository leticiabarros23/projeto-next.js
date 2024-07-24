import NavBar from '../components/nav';
import Footer from '../components/footer';


import Link from 'next/link';

const Sobre = () => {
  return (
      <><NavBar />
      <section>
        <div className="home">
        <div className='blog'>
            <div className='texto-blog'>

            <h4>Oi pessoal!</h4>
            <h2> Eu sou a Riley </h2>
            <p>Bem-vindos ao meu blog! Aqui, quero compartilhar com vocês algumas das minhas memórias 
            e experiências mais incríveis e emocionantes. Preparem-se para embarcar comigo em uma jornada cheia de risos, lágrimas e muitas emoções. 
            Espero que vocês gostem e se identifiquem com essas lembranças tanto quanto eu. Vamos juntos nessa viagem inesquecível!
            </p>

            </div>
            <div className='imagem-riley'>
              <img src='/images/riley3.jpeg' alt="riley" />
            </div>
          </div>
        </div>
    </section>
    
        
    <Footer /></>
  );
};

export default Sobre