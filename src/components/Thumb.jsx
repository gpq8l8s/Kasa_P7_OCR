import { Link } from "react-router-dom"
import data from "../assets/data/logements.json"

export default function Thumb() {
  return(
    <>
  <section className='section-a' key='section-a'>
  {data && data.map((element) => {
    return(
      <Link to = {`/logements/${element.id}`} key={element.id}>
      <article  className={element.id}>
      <h1 className='title-location'>{element.title}</h1>
      <img src={element.cover} alt="" />
      </article>
      </Link>
      )
    })}
  </section>
  </>
  )
}