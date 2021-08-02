import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import bike1 from '../../public/projectImgs/bike4.png';
import decoracao from '../../public/projectImgs/decoracao1.jpeg';
import bgl from '../../public/projectImgs/bgl.png';
import portao from '../../public/projectImgs/portao.jpeg';
import aboutimg1 from '../../public/projectImgs/movel1.jpeg';
import aboutimg2 from '../../public/projectImgs/movel2.webp';
import logo from '../../public/projectImgs/logo.png';

import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"

import SwiperCore, { EffectCoverflow } from 'swiper/core';

SwiperCore.use(EffectCoverflow);


//react icons
import{
   RiCloseLine,
   RiFunctionLine , 
   RiFacebookBoxFill, 
   RiInstagramFill, 
   RiMailFill,
   RiWhatsappFill,
   RiArrowRightLine,
   RiArrowUpFill,
   RiMoonLine,
   RiSunLine
   } from "react-icons/ri";


  //fotos meios de pagamentos a vista
  import pag1 from '../../public/pagamentos/pag1.png';
  import pag2 from '../../public/pagamentos/pag2.png';
  import pag3 from '../../public/pagamentos/pag3.png';
  import pag4 from '../../public/pagamentos/pag4.png';
  import pag5 from '../../public/pagamentos/pag5.png';

  //a prazo
  import prazo1 from '../../public/pagamentos/prazo/prazo1.png'
  import prazo2 from '../../public/pagamentos/prazo/prazo2.png'
  import prazo3 from '../../public/pagamentos/prazo/prazo3.png'
  import prazo4 from '../../public/pagamentos/prazo/prazo4.png'
  import prazo5 from '../../public/pagamentos/prazo/prazo5.png'

  
  
 

export default function Home() {





  useEffect(() => {
    showMenu();
    removeMenuMobile();
    //textReveal();

    function scrollListern() {
      const scrollUp = document.getElementById('scroll-up');
      if(window.scrollY>= 200){
        scrollUp.classList.add('show-scroll');
      }
      else{
        scrollUp.classList.remove('show-scroll')
      }
  
      window.addEventListener('scroll', scrollListern);
      return()=>{
        window.removeEventListener('scroll', scrollListern);
      }
    }
    scrollListern();
    changeTheme();
  } , [])


  
  function textReveal(){
        
   
  }

  function showMenu(){
    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if(navToggle){
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }

    if(navClose){
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }
  }


  function removeMenuMobile(){
      const navLink = document.querySelectorAll('.nav__link')

      function linkAction(){
          const navMenu = document.getElementById('nav-menu')
          // When we click on each nav__link, we remove the show-menu class
          navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))

  }
    // const [theme, setTheme] = useState('Light')
    // const [statusTextMode, setstatusTextMode] = useState(true);

    
  function changeTheme(){
      /*==================== DARK LIGHT THEME ====================*/ 
      const themeButton = document.getElementById('theme-button')
      const darkTheme = 'dark-theme'
      const iconTheme = 'ri-sun-line'
      
      // Previously selected topic (if user selected)
      const selectedTheme = localStorage.getItem('selected-theme')
      const selectedIcon = localStorage.getItem('selected-icon')
      
      // We obtain the current theme that the interface has by validating the dark-theme class
      const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
      const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
      
      // We validate if the user previously chose a topic
      if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
      }
      
      // Activate / deactivate the theme manually with the button
      themeButton.addEventListener('click', () => {
          // Add or remove the dark / icon theme
          
          
          document.body.classList.toggle(darkTheme)
          themeButton.classList.toggle(iconTheme)
          // We save the theme and the current icon that the user chose
          localStorage.setItem('selected-theme', getCurrentTheme())
          localStorage.setItem('selected-icon', getCurrentIcon())
      })
    }
      

  const durationAnimation = 2800;
  

  return (
    
      
          <>  
    
            <header className="header" id="header">
                <nav className="nav container">
                   <a href="#" className="nav__logo">
                     <Image alt="" src={logo}/>
                   </a>

                   <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                        <Bounce delay={500} right>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Home</a>
                            </li>
                        </Bounce>

                        <Bounce delay={1000} right>
                            <li className="nav__item">
                                <a href="#" className="nav__link">Sobre</a>
                            </li> 
                        </Bounce>

                        <Bounce delay={1500} right>
                            <li className="nav__item">
                                <a href="#" className="nav__link">História</a>
                            </li> 
                        </Bounce>

                        <Bounce delay={2000} right>
                           <li className="nav__item">
                                <a href="#" className="nav__link">Serviços</a>
                            </li> 
                         </Bounce>

                        <Bounce delay={2500} right>
                           <li>  
                              <i className="ri-moon-line change-theme" id="theme-button"></i>
                            </li>
                        </Bounce>
                           
                        </ul>

                       

                        <RiCloseLine className="nav__close" id="nav-close"/>
                   </div>

                   <div className="nav__toggle" id="nav-toggle">
                     <RiFunctionLine />
                   </div>
                </nav>
            </header>

            <main className="main">
                <section className="home" id="home">
                  <div className="home__img">
                    {/* <Image  layout={'fill'} src={imgBg} alt="bgHome" /> */}
                  </div>
                   

                    <div className="home__container container grid">
                       <Reveal duration={durationAnimation} top>
                        <div  className="home__data">
                          <span className="home__data-subtitle">Tranformando metal em arte</span>
                          <h1 className="home__data-title">Fabricação <b>industrial</b>  <br/> <b>Decoração</b> <br/> Móveis</h1>
                          <Link passHref href="/services">
                            
                            <a  className="button">Iniciar meu Projeto</a>
                          
                          </Link>
                        </div>
                      </Reveal>

                      <Bounce duration={durationAnimation} left>
                        <div className="home__social">
                            <a href="#" target="_blank" className="home__social-link">
                                  <RiFacebookBoxFill/>
                            </a>

                            <a href="#" target="_blank" className="home__social-link">
                              <RiInstagramFill/>
                            </a>

                            <a href="#" target="_blank" className="home__social-link">
                              <RiWhatsappFill/>
                            </a>

                            <a href="#" target="_blank" className="home__social-link">
                              <RiMailFill />
                            </a>
                        </div>
                       </Bounce>
                       <Reveal duration={durationAnimation}  bottom>
                        <div className="home__info">
                            <div>
                              <span className="home__info-title">Produtos e Serviços</span>
                              <a href="#discover" className="button button--flex button--link home__info-button">
                                Ver <RiArrowRightLine/>
                              </a>
                            </div>

                            <div className="home__info-overlay">
                              <div className="home__info-img"> 
                                <Image  src={bgl} alt="" />
                              </div>
                              
                            </div>
                        </div>   
                       </Reveal>       
                    </div>
                </section>

                     {/* ------------ABOUT-------------*/}
                <section className="about section" id="about"> 
                  
                   <div className="about__container container grid">
                     
                        <div className="about__data ">
                        <Fade duration={durationAnimation} right>
                          <h2 className="section__title about__title">R.M Metal Arte</h2>
                        </Fade>
                          <Fade duration={durationAnimation} left>
                            <p className="about__description">
                            Especializada na fabricação de móveis, artigos decorativos e de segurança em metal, a R.M. 
                            Metal Arte busca levar em seus produtos durabilidade, beleza e sofisticação.
                            </p>
                          </Fade>
                          <a href="#" className="button">Faça um Orçamento</a>
                        </div>
                        <Fade duration={durationAnimation} right>
                          <div className="about__img">
                            <div className="about_img-overlay1">
                                <Image className="about_img-one" src={aboutimg1} alt=""/>
                            </div>

                            <div className="about_img-overlay2">
                                <Image className="about_img-one" src={aboutimg2} alt=""/>
                            </div>
                          </div>
                       </Fade>
                   </div>

                </section>

                    {/* ------------ABOU2T-------------*/}

                 <section className="discover section" id="discover">
                   <Fade duration={durationAnimation} bottom>
                      <h2 className="section__title title_disc">
                        Confira Abaixo <br/>
                        algumas de nossas criações 
                      </h2>
                    </Fade>
                   
                      <Swiper 
                      effect={'coverflow'}
                       grabCursor={true} 
                       centeredSlides={true} 
                       slidesPerView={'auto'}
                       spaceBetween={22}
                       loop={true}
                       autoplay={{delay:3000}}       
                       coverflowEffect={{
                        "rotate": 20,
                        
                      
                        }} className="discover__container container ">
                       {/*======== CARD-01 ===========*/}
                     
                 
                          <SwiperSlide className="discover__card">
                          <div className="discover__img">
                              <Image layout={'fill'} className="about_img-one" src={aboutimg2} alt=""/>
                            </div>
                         
                          <div className="discover__data">
                              <h2 className="discover__title">
                                Móveis
                              </h2>
                              <span className="discover__description"> Móveis em metal</span>
                          </div>
                          </SwiperSlide>
                    
                         {/*======== CARD-02 ===========*/}
                       
                            <SwiperSlide className="discover__card">
                            <div className="discover__img">
                              <Image layout={'fill'} className="about_img-one" src={bike1} alt=""/>
                            </div>
                            <div className="discover__data">
                                <h2 className="discover__title">
                                Decoração
                                </h2>
                                <span className="discover__description">Artigos decorativos em metal</span>
                            </div>
                          </SwiperSlide>
                

                         {/*======== CARD-03 ===========*/}
                        
                            <SwiperSlide className="discover__card">
                              <div className="discover__img">
                                <Image layout={'fill'} className="about_img-one" src={portao} alt=""/>
                              </div>
                              <div className="discover__data">
                                  <h2 className="discover__title">
                                    Portões
                                  </h2>
                                  <span className="discover__description">Portões em metal</span>
                              </div>
                          </SwiperSlide>
                     
                      </Swiper>
                 </section>   

                 {/* ------------EXPERIÊNCIA-------------*/}
                 <section className="experience section">
                     <h2 className="section__title">
                        Experiências <br/>
                        
                     </h2>

                     <div className="experience__container container grid">
                        <div className="experience__content grid">
                          <Fade top duration={durationAnimation}>   
                              <div className="experience__data">
                                <h2 className="experience__number">+20</h2>
                                <span>Anos <br/> Experiência</span>
                              </div>

                              <div className="experience__data">
                                <h2 className="experience__number">+150</h2>
                                <span>Clientes <br/> Satisfeitos</span>
                              </div>

                              <div className="experience__data">
                                <h2 className="experience__number">+10</h2>
                                <span>Anos <br/> no Mercado</span>
                              </div>
                            </Fade>
                        </div>
                         
                         <div className="experience__img grid">
                            <div className="experience__overlay">
                              <Fade left duration={durationAnimation}>
                                <div className="experience__img-one">
                                  <Image className="about_img-one" src={aboutimg1} alt=""/>
                                </div>
                              </Fade>

                              <Fade right duration={durationAnimation}>
                                <div className="experience__img-two">
                                  <Image className="about_img-one" src={aboutimg2} alt=""/>
                                </div>
                              </Fade>
                            </div>
                         </div>

                     </div>
                 </section>

                     {/*======== CONTACT SECTION ========*/}
                 <section className="subscribe section">
                   <div className="subscribe__bg">
                      <div className="subscribe__container container">
                          <h2 className="section__title subscribe__title">
                           Entre em<br/> <b>Contato</b>
                          </h2>
                          <Fade left>
                           <p className="subscribe__description">Entre em contato mande sua idéia, ou peça um orçamento, sem compromissos.</p>
                          </Fade>

                          <Fade right reset> 
                            <form action="" className="subscribe__form" >
                                <input type="text" placeholder="Nome" className="subscribe__input"/>
                                <input type="text" placeholder="Email" className="subscribe__input"/>
                                <textarea type="text" placeholder="Assunto" className="subscribe__input"/>

                                <button className="button">
                                      Enviar
                                </button>
                            </form>
                          </Fade>
                      </div>
                   </div>

                 </section>
                  
               
                  <footer className="footer section">
                 
                    <div className="footer__container container grid">
                      
                    <Fade bottom duration={durationAnimation}>
                            <div className="footer__social-area">
                              <a href="" target="_blank" className="footer__social">
                              <RiFacebookBoxFill/>
                              <span className="footer__social-contact">/RmMetal</span>
                              </a>

                              <a href="" target="_blank" className="footer__social">
                                <RiInstagramFill/>
                                <span className="footer__social-contact">@RmMetalArte</span>
                              </a>

                              <a href="" target="_blank" className="footer__social">
                              <RiMailFill/>
                              <span className="footer__social-contact">RmMetal@gmail.com</span>
                              </a>
                            
                              <a href="" target="_blank" className="footer__social">
                                <RiWhatsappFill/>
                                <span className="footer__social-contact">(41) 99179-2095</span>
                              </a>
                              
                            </div>
                      </Fade>

                            <div className="footer__content grid">
                            <Fade bottom duration={durationAnimation}>
                            <div className="footer__data">
                              <h3 className="footer__title">R.M metal Arte</h3>
                              <p className="footer__description">
                              Rua Pedro Massuqueto<br/>
                                  Vila Campesi
                                  Campo Largo - PR
                                  83604-525
                                  Brasil
                              </p>
                            </div>
                            </Fade>
                      </div>

                      
                    <div className="footer__final-data">
                    <Fade bottom duration={durationAnimation}>
                        <div className="footer__data">
                          <h3 className="footer__subtitle">Links</h3>

                          <ul>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Home</a>
                            </li>

                            <li className="footer__item">
                                <a href="#" className="footer__link">Sobre</a>
                            </li>

                            <li className="footer__item">
                                <a href="#" className="footer__link">História</a>
                            </li>
                          </ul>
                        </div>
                      </Fade>
                      
                        <div className="footer__pag">
                          <h4 className="section__title-pag">Formas de pagamento</h4>
                          <h4 className="footer__subtitle1">
                            A VISTA
                          </h4>
                          <Fade bottom duration={durationAnimation}>
                              <div className="footer__row">
                                  <div  className="footer__pag-img">
                                    <Image src={pag1} alt=""/>
                                  </div>

                                  <div className="footer__pag-img">
                                    <Image src={pag2} alt=""/>
                                  </div>
                                  
                                  <div className="footer__pag-img">
                                    <Image src={pag3} alt=""/>
                                  </div>

                                  <div className="footer__pag-img">
                                    <Image src={pag4} alt=""/>
                                  </div>

                                  <div className="footer__pag-img">
                                    <Image src={pag5} alt=""/>
                                  </div>

                                </div>
                            

                            <h4 className="footer__subtitle2">
                            A PRAZO
                          </h4>
                          <div className="footer__row">
                              <div  className="footer__pag-img">
                                <Image src={prazo1} alt=""/>
                              </div>

                              <div className="footer__pag-img">
                                <Image src={prazo2} alt=""/>
                              </div>
                              
                              <div className="footer__pag-img">
                                <Image src={prazo3} alt=""/>
                              </div>

                              <div className="footer__pag-img">
                                <Image src={prazo4} alt=""/>
                              </div>

                              <div className="footer__pag-img">
                                <Image src={prazo5} alt=""/>
                              </div>

                            </div>
                            </Fade>
                        </div>
                      </div>

                      <div className="footer__rights">
                        <p className="footer__copy">
                            &#169; 2021 KryTech. All rights reserved
                        </p>
                      
                      </div>

                    </div>
                    
                  </footer>
                 
                 <a href="#" className="scrollup" id="scroll-up">
                   <RiArrowUpFill className="scrollup-icon"/>
                 </a>
            </main>

           
    </>
  )
}
