import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_SRC = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_SRC }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' // Revisa si el navegdor soporta IntersectionObserver
        ? window.IntersectionObserver // si lo soporta, carga el normal... de lo contrario, ejecuta el import dinámico
        : import('intersection-observer') //import dinámico que devuelve una promesa
    )
    .then(()=> {
      // console.log(element.current); // comprobamos que cada elemento está en el viewport del usuario
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries);
        const { isIntersecting } = entries[0];
        //console.log({isIntersecting});
        console.log(isIntersecting);
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      })
      observer.observe(element.current);
    })
  }, [element]);
  
  return (
    <Article ref={element}>
      {
        show && 
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      }
    </Article>
  )

  // return (
  //   <article>
  //     <a href={`/detail/${id}`}>
  //       <ImgWrapper>
  //         <Img src={src} />
  //       </ImgWrapper>
  //     </a>
  //     <Button>
  //       <MdFavoriteBorder size='32px'/>{likes} likes!
  //     </Button>
  //   </article>
  // );
};
