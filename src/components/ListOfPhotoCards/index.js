import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery, gql } from '@apollo/client';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId: categoryId } });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const photos = data.photos;

  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
}