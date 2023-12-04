import '../sass/section_5.scss'
import vec_L from '../imgs/Vector_notre_charte_left.png'
import vec_R from '../imgs/Vector_notre_charte_right.png'
import erly from '../imgs/early.png'
import primary from '../imgs/primary.png'
import secondary from '../imgs/lower-secondary.png'
import uuper from '../imgs/upper-secondary.png'

function Section_5() {
  return (
    <section className="section_5">
        <div className="">
            <div className='d-flex justify-content-center align-items-center titel'>
                <img src={vec_L} alt="" />
                <h1>Nos Cycles</h1>
                <img src={vec_R} alt="" />
            </div>
        </div>
        <div className="cycle">
            <div id='div_mat'>
                <h1>Créche<br/>Maternelle<br/></h1>
            </div>
            <div id='div_Prima'>
               
                <h1 className='same_h1'>Primaire</h1>
            </div>
            <div id='div_Coll'>
               
                <h1 className='same_h1'>Collége</h1>
            </div>
            <div id='div_Lyc'>
                <h1 className='same_h1'>Lycée</h1>
            </div>
            
            
            
        </div>
    </section>
  )
}

export default Section_5