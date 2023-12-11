import React, { ReactNode, createContext, useState } from 'react';

interface IMoviesContext {
    children: ReactNode;
}

interface IMoviesContextProvider {
    movies: Imovies
    setMovies : (movies: Imovies) => void
}

interface Imovies {
    cinema: any,
    movies: any[]
}

export const MoviesContextProvider = createContext<IMoviesContextProvider | undefined>(undefined);

const MoviesContext: React.FC<IMoviesContext> = ({ children }) => {

    const defaultMovies: Imovies = {
        cinema: {},
        movies: []
    }

    const [movies, setMovies] = useState<Imovies>(defaultMovies)

    const data = {
        movies,
        setMovies
    }
    return (
        <MoviesContextProvider.Provider value={data}>{children}</MoviesContextProvider.Provider>
    )
}

export default MoviesContext