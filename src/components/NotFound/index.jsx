import { Link } from "react-router-dom";

export function NotFound() {
  return(
    <>
      <section className="error-wrapper">
        <h1 className="error">404</h1>
        <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
        <p className="gotoaccueil"><Link to="/">Retourner sur la page d’accueil</Link></p>
      </section>
    </>
  )
}
