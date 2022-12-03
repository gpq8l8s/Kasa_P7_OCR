import logo from "../assets/images/logo-footer.png"

export function Footer() {
  return(
    <>
    <footer>
          <div>
            <img src={logo} alt="logo-footer"></img>
            <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
          </div>
      </footer>
    </>
  )
}