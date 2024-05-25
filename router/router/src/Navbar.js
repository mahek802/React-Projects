import Navbar from './Navbar'
import { Routes , Route, Link } from 'react-router-dom'

export default function Nav(props){
    return(

        <nav className="nav border border-bottom p-3 shadow-sm d-flex justify-content-between">
        <img src="../images/illustration/imgs11.png" alt="" />
        {/* <p><b>FREGG</b></p> */}
        <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src="../images/illustration/menu.png" alt="" /></button>

<div class="offcanvas offcanvas-top h-50" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-body">
  <ul className="d-lg-none" type='none'>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/">{props.mainNav[0].navOne}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/about">{props.mainNav[0].navTwo}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/work">{props.mainNav[0].navThree}</Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/services">{props.mainNav[0].navFour}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/contact">{props.mainNav[0].navFive}</Link>
        </li>
</ul>
  </div>
</div>


    <ul className="nav justify-content-center d-none d-lg-block d-lg-flex color-light">
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/">{props.mainNav[0].navOne}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/about">{props.mainNav[0].navTwo}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/work">{props.mainNav[0].navThree}</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/services">{props.mainNav[0].navFour}</Link>
        </li>
        
        <li className="nav-item">
            <Link className="nav-link text-dark" to="/contact">{props.mainNav[0].navFive}</Link>
        </li>
</ul>
    </nav>
        
    )
}