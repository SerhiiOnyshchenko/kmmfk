import React from 'react';
import Container from '../Container/Container';
import s from './Footer.module.css';

export default function Footer() {
   return (
      <footer className={s.footer}>
         <Container>
            <div className={s.top}>
               <a
                  className={s.link}
                  href="https://goo.gl/maps/gACZRMyEiC6nWQpDA"
               >
                  <svg
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 32 32"
                  >
                     <title>location2</title>
                     <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16.125c-3.383 0-6.125-2.742-6.125-6.125s2.742-6.125 6.125-6.125 6.125 2.742 6.125 6.125-2.742 6.125-6.125 6.125zM12.125 10c0-2.14 1.735-3.875 3.875-3.875s3.875 1.735 3.875 3.875c0 2.14-1.735 3.875-3.875 3.875s-3.875-1.735-3.875-3.875z"></path>
                  </svg>
                  вулиця Братиславська, 5, Київ, 02660
               </a>
               <div className={s.contactes}>
                  <a className={s.tel} href="tel:+380445187668">
                     тел.: (044) 518-7668
                  </a>
                  <a href="mailto:kmmk303@ukr.net">E-mail: kmmk303@ukr.net</a>
               </div>
            </div>
            <hr />
            <p>© 2022 Київський міський медичний фаховий коледж</p>
         </Container>
      </footer>
   );
}
