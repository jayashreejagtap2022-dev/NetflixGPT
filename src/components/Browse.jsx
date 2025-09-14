
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcommingMovies } from '../hooks/useUpcommingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

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