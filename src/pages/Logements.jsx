// import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import data from '../assets/data/logements.json'
import PropTypes from 'prop-types';
import ImageSlider from '../components/Carousel'
import { AccordionLog } from "../components/Accordion"
// import { useState } from 'react';


export function Logements() {
  const { id } =  useParams()
  const logement = Object.values(data).find(e => e.id === id);
  // const idCompare = id !== logement.id
  /* solution 1
  useEffect + navigate to error
  */
  const navigate = useNavigate();
  useEffect(() => {
    const idCompare = id === logement.id;
    if(!idCompare){
      return navigate ("Error")
    }
  });
  
  
  // const tags = logement.tag
  return(
    /*
    solution 2
    if logement existe on affiche la section
    sinon on affiche la page erreur
    */
    <section className="logements-section">
        <article className="logement-a">
          <ImageSlider slides={logement}></ImageSlider>
          <div className='flex-desktop'>
            <div className="logements-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
              <div className="logements-tags">
                  {logement.tags.map((e) =>
                      <span className="tag-text" key={e}>{e}
                      </span>)}
              </div>
            </div>
            <div className="logements-profile">
              <div className="rating">
              {(() => {
                  let arr = [];
                  const isRatingNum = Number(logement.rating);
                  for(let i = 0; i < isRatingNum; i++) {
                    arr.push(<svg key={i} width="16" height="16" className="rating-star" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
                  </svg>
                      )
                    }
                    for(let j = 5; j > isRatingNum; j--) {
                      arr.push(<svg key={j} width="16" height="16" className="rating-star" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/>
                      </svg>
                      )
                    }
                    return arr;
                })()}
              </div>
              <div className="host-info">
                <p className='logements-host'>{logement.host.name}</p>
                <img className='logements-host-pic' src={logement.host.picture} alt=""></img>
              </div>
            </div>
          </div>
        </article>
          <article className="logements-accordion">
            <AccordionLog key="accordion-logements"/>
          </article>
  </section>
  )
}

Logements.prototypes = {
  title: PropTypes.string,
  pictures : PropTypes.string,
}