
import '../sass/section_04.scss'
import img_bac23 from '../imgs/BAC2023.png'
import vec_R from '../imgs/Vector_notre_charte_right.png'
import vec_L from '../imgs/Vector_notre_charte_left.png'
import img_raison from '../imgs/image_raison.png'
import raison4 from '../imgs/raison4.png'
import raison5 from '../imgs/raison5.png'
import raison6 from '../imgs/raison6.png'

function Section_04() {
  return (
    <section className="section_04">
        <div className='div_title'>
            <h1>
                <span>UN ENSIGNEMENT </span>
                <span className='Trigli'>TRILINGUE<br/></span>
                <span>D’EXCELLENCE DE </span>
                <span className='Creche'>LA CRÈCHE AU LYCÉE</span>
            </h1>

        </div>
        <div className='middel_row'>
            <div>
                <img src= {img_bac23} alt="" />
                <p>
                    l’enseignement trillingue adopté par notre établissement aide <br />nos éléves a developper une meilleure sensiblité <br />communicative dans un environnement plurilingue et <br />multiculturel .<br/><br/>
                    Jeanne D’Arc Trilingue School a toujours veillé a incluqe a ses <br />apprenants ,l’adhésion auz valeurs universelles et cultive en <br />eux l’art de la cohabitation avec les citonyens du monde .
                </p>
            </div>
        </div>
        <div className='last_row'>

            <div className='last_row_div1'>
                <div className='div2_title'>
                        <img src={vec_L} alt="" />
                        <h1>
                            6 RAISONS<br/>POUR NOUS CHOISIR
                        </h1>
                        <img src={vec_R} alt="" />
                </div>
            </div>

            <div className='last_row_div2'>
                <div className='raison1'>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                    <img src={raison4} alt="" className='img_raisons'/>
                </div>
                <div className='raison2'>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                    <img src={raison4} alt="" className='img_raisons'/>
                </div>
                <div className='raison3'>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                    <img src={raison4} alt="" className='img_raisons'/>
                </div>
                <img src={img_raison} alt="" className='img_resion'/>
                <div className='raison4'>
                    <img src={raison4} alt="" className='img_raisons'/>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                </div>
                <div className='raison5'>
                    <img src={raison5} alt="" className='img_raisons'/>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                </div>
                <div className='raison6'>
                    <img src={raison6} alt="" className='img_raisons'/>
                    <p>un enseigenment <br/>presonnalisée et cen<br/>autoure de l’enfant</p>
                </div>
               
            </div>

        </div>
    </section>
  )
}

export default Section_04