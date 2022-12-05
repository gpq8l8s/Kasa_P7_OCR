import aproposData  from '../assets/data/apropos.json'
import { AccordionApropos } from '../components/Accordion';


export function Apropos() {

  return(
    <section>
    <div className='a-propos-image'></div>
      <article className='accordion-wrapper'>
        {aproposData.map((e) => {
          return(
            <>
              <AccordionApropos {...e} key={e.id}/>
            </>
          )
        })}
      </article>
    </section>
  )
}

