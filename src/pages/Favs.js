import React from 'react';
import { useGetFavorite } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';
import { Layout } from '../components/Layout';

export const Favs = ()=> {
    const { data, loading, error } = useGetFavorite()

    if (loading) return 'loading...'
    if (error) return 'error'

    return <>
        <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
            <ListOfFavs favs={data.favs} />    
        </Layout>
    </>
}