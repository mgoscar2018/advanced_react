import React from 'react';
import { useGetFavorite } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';

export const Favs = ()=> {
    const { data, loading, error } = useGetFavorite()

    if (loading) return 'loading...'
    if (error) return 'error'

    return <ListOfFavs favs={data.favs} />
}