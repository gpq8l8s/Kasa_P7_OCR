import aproposData  from '../assets/data/apropos.json'
import { Accordion } from '../components/Accordion';


export function Apropos() {

  return(
    <section>
    <div className='a-propos-image'></div>
      <article className='accordion-wrapper'>
        {aproposData.map((e) => {
          return(
            <>
              <Accordion title={e.title} content={
                <p>
                  {e.content}
                </p>
                } key={e.id}/>
            </>
          )
        })}
      </article>
    </section>
  )
}

