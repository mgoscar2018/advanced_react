import React from 'react';
import { PhotoCard } from '../components/PhotoCard';

import { useQuery, gql } from '@apollo/client';
//import { Query } from '@apollo/client/react/components';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

// Utilizando "useQuery"
export const PhotoCardWithQuery = (props) => { 
  const { id } = props;
  const { data, loading } = useQuery(GET_SINGLE_PHOTO, {variables: {id}})

  return ( loading ? null : <PhotoCard {...data.photo} /> );
}

// Utilizando Query de '@apollo/client/react/components'
// export const PhotoCardWithQuery = ({ id }) => (
//   <Query query={query} variables={{ id }}>
//     {
//       ({ loading, data }) => {
//         if (loading) return null;
//         else {
//           //const { photo = {} } = data
//           return <PhotoCard {...data.photo} />
//         }
//       }
//     }
//   </Query>
// );
