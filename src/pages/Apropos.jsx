import aproposData  from '../assets/data/apropos.json'
import { Accordion } from '../components/Accordion';


export function Apropos() {

  return(
    <section>
    <div className='a-propos-image'></div>
      <article className='accordion-wrapper'>
        {aproposData.map((e) => {
          return(
              <Accordion
                key={e.content}
                title={e.title} content={
                <p>
                  {e.content}
                </p>
                }/>
          )
        })}
      </article>
    </section>
  )
}

