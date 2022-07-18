import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery, gql } from '@apollo/client';

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const photos = data.photos;

  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
}