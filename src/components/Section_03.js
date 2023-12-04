import '../sass/section_03.scss'
import img_n_char from '../imgs/image_notre_charte.png'
import vector_L from '../imgs/Vector_notre_charte_left.png'
import vector_R from '../imgs/Vector_notre_charte_right.png'
function Section_03() {
  return (
    <section className='section_03'>
      <div className='div_01 notre_charte'>
          <img src={vector_L} alt="" />
          <h1>NOTRE CHARTE</h1>
          <img src={vector_R} alt="" />
      </div>

      <div className='div_02'>

        <div className='div_p_L'>
          <div>
            <p id='p1'>Assurer a l’enfant une sécurité <br/>affective et physique</p>
            <p id='p2'>Respecter les rythmes <br/>et repéres de l’enfant</p>
            <p id='p3'>Garantir a chacun<br/>des soins indivdualisés</p>
          </div>
        </div>

        <div className='div_img'>
            <img src= {img_n_char} alt="" />     
        </div>

        <div className='div_p_R'>
          <div>
            <p id='p1'>Favoriser l’éveil<br/>et l’autonomie de l’enfant</p>
            <p id='p2'>Soutenir l’enfant dans<br/>ses émotions et ses désirs</p>
            <p id='p3'>Situer les parents<br/>au centre de notre projet</p>
          </div>
        </div>

      </div>

      
    </section>
  )
}

export default Section_03