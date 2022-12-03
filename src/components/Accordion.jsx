import { useState } from "react"
import { useParams } from "react-router-dom"
import accordionData from "../assets/data/logements.json"

/* accordion LOGEMENTS */
export function AccordionLog() {
  const { id } =  useParams()
  const accordion = Object.values(accordionData).find(e => e.id === id);
  const equipements = accordion.equipments;
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [isEquipementActive, setIsEquipementActive] = useState(false);

  return(
    <>
      <div className="accordion-item" key="description">
        <div className="accordion-title" style={{cursor : "pointer"}} onClick={() => setIsDescriptionActive(!isDescriptionActive)}>
            <h1>Description</h1>
            <div className="div-arrow">{isDescriptionActive ? <svg className="logement-arrow-accordion" width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/></svg>
            : <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
              </svg>}
            </div>
        </div>
        {isDescriptionActive && <div className="accordion-content"><p>{accordion.description}</p></div>}
      </div>
      <div className="accordion-item" key="equipement">
        <div className="accordion-title" style={{cursor : "pointer"}} onClick={() => setIsEquipementActive(!isEquipementActive)}>
          <h1>Équipement</h1>
          <div className="div-arrow">{isEquipementActive ? <svg  className="logement-arrow-accordion" width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
              </svg>
            : <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
              </svg>}
          </div>
        </div>
        {isEquipementActive && <div className="accordion-content" >{equipements.map((e) =>
                      <p key={e}>
                      {e}
                      </p>
                      )}</div>}
      </div>
    </>
  )
}

/* accordion A PROPOS */
export function AccordionApropos({title, content}) {
  const [active, setActive] = useState(null)
  const display = () => {
    setActive(!active)
  }
    return(
      <>
      <div className="accordion-item">
        <div className="accordion-title" style={{cursor : "pointer"}} onClick={display}>
          <h1 key={title}>{title}</h1>
          <div className="div-arrow">
            {active ? <svg className="logement-arrow-accordion" width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
            </svg> : <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
                </svg>}
          </div>
        </div>
        <div className="accordion-content">
            {active ? <p key={title}>{content}</p> : <p key={title} style={{display : "none"}}>{content}</p>}
        </div>
      </div>
      </>
    )
}
export default AccordionApropos
