
import Header from './Header';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcommingMovies } from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
      <GptSearch />
      ) : (<>
      <MainContainer />
      <SecondaryConatiner />
      </>
      )}
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