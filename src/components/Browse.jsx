
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatiner />

      {/*
        mainContainer
          - videobackground
          - videoTitle
        secondaryConatainer
          - MovieList * n
              - cards * n 

      
       */}
    </div>
  )
}

export default Browse;