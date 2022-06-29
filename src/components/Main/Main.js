import React from 'react';
import ImageGallery from 'react-image-gallery';
import Container from './../Container/Container';
import s from './Main.module.css';

const images = [
   {
      original: `${require('../../images/coledge/1.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/2.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/3.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/4.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/5.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/6.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/7.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/8.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/9.jpg')}`,
      originalHeight: 300,
   },
   {
      original: `${require('../../images/coledge/10.jpg')}`,
      originalHeight: 300,
   },
];

export default function Main() {
   return (
      <main>
         <Container>
            <ImageGallery
               additionalClass={s.box}
               items={images}
               showThumbnails={false}
               autoPlay={true}
            />
         </Container>
      </main>
   );
}
