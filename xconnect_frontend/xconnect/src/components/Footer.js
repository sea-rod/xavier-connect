import React from 'react'
import './Footer.css'

export default function Footer() {
  const yearObj = new Date();
  const year = yearObj.getFullYear();
  return (
    <footer className="green-container mt-5">
        <div className="ml-1 mb-5 mt-auto row container">
            <div className="col-lg-6 col-12">

                <h4>Xconnect</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore dolor quidem, expedita
                    praesentium hic impedit rem porro id ea. Recusandae magnam minima, fugiat at voluptatem nam
                    laudantium provident consequuntur.</p>
            </div>
            <div className="col-lg-6 col-12 pl-lg-5">

                <h4 className='d-block'>Quick links</h4>
            <div className="col-lg-6 col-12 pl-lg-5 justify-content-between d-flex">
                <a href="/Home">Home</a>
                <a href="/">Menu</a>
                <a href="/">About</a>
                <a href="/">Contacts</a>
            </div>
            </div>

        </div>
        <div className="social-media text-center">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
        </div>
      <div className="footer-copyright text-center col-12">© {year} Copyright:
            <a href="/"> Xconnect</a>
        </div>
    </footer>
  )
}
