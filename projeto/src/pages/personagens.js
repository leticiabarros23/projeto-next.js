// import '../src/components/cards';
import NavBar from '../components/nav';
import Carousel from '../components/carousel';
import Card from '../components/cards';
import Footer from '../components/footer';

import Link from 'next/link';

const Home = () => {
  const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];
  const cards = [
    { title: 'Alegria', description: 'Sempre feliz e animada!', image: '/images/alegria.jpeg' },
    { title: 'Tristeza', description: 'Melancólica e reflexiva.', image: '/images/tristeza1.jpeg' },
    { title: 'Raiva', description: 'Explosivo e sempre pronto a defender seus direitos.', image: '/images/raiva.jpeg' },
    { title: 'Nojinho', description: 'Sarcástica e sempre de olho em manter Riley longe de coisas indesejáveis.', image: '/images/nojinho.jpeg' },
    { title: 'Medo', description: 'Cauteloso e sempre preocupado com os perigos ao redor.', image: '/images/medo1.jpeg' },
    { title: 'Ansiedade', description: 'Sempre nervosa e apreensiva com o que pode acontecer.', image: '/images/ansiedade.jpeg' },
    { title: 'Inveja', description: 'Constantemente ressentida com os sucessos alheios.', image: '/images/inveja3.jpeg' },
    { title: 'Tédio', description: 'Indiferente e apática, sem interesse pelas coisas ao redor.', image: '/images/tedio.jpeg' },
    { title: 'Vergonha', description: 'Constantemente preocupada com a opinião dos outros e com medo de ser julgada.', image: '/images/vergonha.jpeg' },
  ];
  
  return (
    <div className="home">
      <NavBar />
      <Carousel images={images} />
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home