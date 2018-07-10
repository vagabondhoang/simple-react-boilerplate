import { all } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { watchFetchMovies } from '../../app/containers/Home/saga';
import { watchFetchMovie } from '../../app/containers/MovieDetail/saga';
import { watchSearchMovie } from '../../app/containers/Search/saga';
import { watchSortFilm } from '../../app/containers/SortBy/saga'
import { watchFilterFilm } from '../../app/containers/Filter/saga'
import { watchFetchTrailers } from '../../app/containers/Trailers/saga'
import { watchFetchCasts } from '../../app/containers/Casts/saga'
import { watchFetchRecommendations } from '../../app/containers/Recommendations/saga'
import rootSaga from '../rootSaga'

describe('rootSaga()', () => {
  it('should watch all saga', () => {
    const gen = cloneableGenerator(rootSaga)();
    expect(gen.next().value).toEqual(all([
      watchFetchMovies(),
      watchFetchMovie(),
      watchSearchMovie(),
      watchSortFilm(),
      watchFilterFilm(),
      watchFetchTrailers(),
      watchFetchCasts(),
      watchFetchRecommendations(),
    ]))
  })
})