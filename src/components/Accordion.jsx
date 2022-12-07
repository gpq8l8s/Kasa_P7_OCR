import { useState } from "react"

export function Accordion({id,title, content}) {
  const [active, setActive] = useState(false)
  const display = () => {
    setActive(!active)
  }
    return(
      <>
      <div className="accordion-item" key={id}>
        <div className="accordion-title" style={{cursor : "pointer"}} onClick={display}>
          <h1>{title}</h1>
          <div className="div-arrow">
            {active ? <svg className="logement-arrow-accordion" width="28" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.80001 13.9866L3.16001 16.3466L14 5.50662L24.84 16.3466Z" fill="white"/>
            </svg> : <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
                </svg>}
          </div>
        </div>
        {active ? 
        <div className="accordion-content" key={id}>
          {content}
        </div> : <div key={id} style={{display : "none"}}></div>
        }
      </div>
      </>
    )
}
export default Accordion
