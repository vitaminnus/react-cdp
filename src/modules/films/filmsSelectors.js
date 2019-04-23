export const getFilms = state => state.persistedStore.allFilms;
export const getIsFetchingFilms = state => state.persistedStore.isFetchingFilms;
export const getIsFetchedFilms = state => state.persistedStore.isFetchedFilms;
export const getErrorFilms = state => state.persistedStore.errorFilms;
export const getMainFilm = state => state.persistedStore.mainFilm;
export const isShowSearchPage = state => state.persistedStore.showSearchPage;
