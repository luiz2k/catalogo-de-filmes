import { Carousel } from '../components/Carousel/Carousel';

const category = {
  emCartaz: 'now_playing',
  popularidade: 'popular',
  avaliacao: 'top_rated',
  emBreve: 'upcoming',
};

export const Home = () => {
  window.scrollTo(0, 0);
  document.title = 'Início';

  return (
    <>
      <section style={{ minHeight: 'calc(100vh - 60px)' }} className="flex flex-col justify-center">
        <Carousel
          category={category.popularidade}
          page={1}
          language={'pt-br'}
          carouselCategory={'Mais populares'}
        />

        <Carousel
          category={category.avaliacao}
          page={1}
          language={'pt-br'}
          carouselCategory={'Melhores avaliações'}
        />
      </section>
    </>
  );
};
