//Get Datas
import data  from '../assets/data/logements.json'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

export function Accueil() {
  return(
    <>
      <section className='banner-home' key="banner-accueil">
        <div className='banner-img'></div>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
      </section>
      <section className='section-a' key='section-a'>
        {data && data.map(element => {
          return(
              <Link to = {`/logements/${element.id}`} key={element.id}>
            <article  className={element.id}>
                  <h1 className='title-location'>{element.title}</h1>
                  <img src={element.cover} alt="" />
              </article>
              </Link>
            )
          })
        }
      </section>
    </>
  )
}  


Accueil.prototypes = {
  title: PropTypes.string,
  pictures : PropTypes.string,
}