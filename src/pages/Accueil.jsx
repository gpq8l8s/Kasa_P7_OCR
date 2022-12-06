import Thumb from '../components/Thumb'

export function Accueil() {
  return(
    <>
      <section className='banner-home' key="banner-accueil">
        <div className='banner-img'></div>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
      </section>
      <Thumb/>
    </>
  )
}  
