import React from 'react'
import { Article, ImgWrapper, Img } from './styles';
//import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useMuationToogleLike } from '../../hooks/useMutationToggleLike';
import { FavButton } from '../FavButton';
import { Link } from 'react-router-dom';

const DEFAULT_SRC = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_SRC }) => {
  const [show, element] = useNearScreen();
  const { mutation/*, mutationLoading, mutationError */} = useMuationToogleLike();
  //const key = `like-${id}`;
  //const [liked, setLiked] = useLocalStorage(key, false);
  
  const handleFavClick = () => {
    /*!liked && */mutation({
      variables: {
        input: { id }
      }
    })
    //setLiked(!liked)
  }

// console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  return (
    <Article ref={element}>
      {
        show && 
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
};
