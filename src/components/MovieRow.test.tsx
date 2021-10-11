import React from 'react';
import {render, screen} from '@testing-library/react';
import MovieRow from './MovieRow';

test('renders learn react link', () => {
    render(<MovieRow movie={{id: 123, rating: 9, year: 2000, imdb_code: "tt1", title: "Test" }}/>);
    const idElement = screen.getByText(/123/);
    expect(idElement).toBeInTheDocument();
    const yearElement = screen.getByText(/2000/);
    expect(yearElement).toBeInTheDocument();
    const imdbElement = screen.getByText(/tt1/);
    expect(imdbElement).toBeInTheDocument();
    const titleElement = screen.getByText(/Test/);
    expect(titleElement).toBeInTheDocument();
});
