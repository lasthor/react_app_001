import '../sass/footer.scss'

import logo from '../imgs/Logo.png'

function Footer() {
    
    function h1_title(params) {
        return (
            <h1 className='cp-h1'>ALL RIGHTS RESERVED <i class="fa-solid fa-copyright"></i> 2023 JEANNE D’ARC INTERNATIONAL SCHOLL</h1>
        )
    }

  return (
   <footer>

        <div className='div1'>

            <div className='container-div marg-l align-center'>
                <img src={logo} alt="" />
            </div>

            <div className='container-div'>
                <h1>STIMEAP</h1>
                <div className='div-of-content'>
                    <span className='marge-b-t'>Admissions</span>
                    <span className='marge-b-t'>Gallerie</span>
                    <span className='marge-b-t'>Recutement</span>
                    <span className='marge-b-t'>Inscriptions</span>
                    <span className='marge-b-t'>School Policies</span>
                </div>
            </div>

            <div className='container-div'>
                <h1>CONTACT</h1>
                <div className='div-of-content'>
                    <span className='center-iteam marge-b-t'>
                    <span class="material-symbols-outlined icon_size">pin_drop</span>
                        <p>jeanne D’Arc International School <br /> N57 Boulevard Moulay Youssef, <br /> Anfa-Casablanca</p>
                    </span>
                    <span className='center-iteam marge-b-t'>
                        <span class="material-symbols-outlined icon_size">call</span>
                        <p>+212 522 22 01 70 - +212 642 56 23 28</p>
                    </span>
                    <span className='center-iteam marge-b-t'>
                        <span class="material-symbols-outlined icon_size">mail</span>
                        <p>contact@jeannedarcinternational.ma</p>
                    </span>
                </div>
            </div>

            <div className='container-div witdh-adj'>
                <h1 className='marge-b-2'>SUIVEZ-NOUS</h1>
                <div className='center-icons'>
                    <a href=""><i class="fa-brands fa-square-facebook font-i"></i></a>
                    <a href=""><i class="fa-brands fa-square-instagram font-i insta "></i></a>
                    <a href=""><i class="fa-brands fa-square-youtube font-i"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin font-i"></i></a>
                    <a href=""><i class="fa-brands fa-tiktok font-i"></i></a>
                    
                </div>
            </div>
        </div>

        <div className="div2-cpright">
            {
                h1_title()
            }
        </div>


   </footer>
  )
}

export default Footer