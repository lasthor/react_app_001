import '../sass/section_02.scss'
import img_01 from '../imgs/headmaster.jfif'

function Section_02() {
  return (
    <section className='section_02 p-0 d-flex flex-column'>
        
        <h1>
            <div>
                <div className='div_h1_2'>
                  <span className=''>BIENVIENUE A <br/>JEANNE D’ARC </span>
                  <span className='TRILINGUE'>TRILINGUE</span>
                  <span className=''> SCHOOL<br/></span>
                  <span className='guete '>la guete de l’excellence</span>
                </div>
            </div>
        </h1>

        <div className='div_01 d-flex flex-column justify-content-start mt-3 flex-shrink-0'>
          <div className='child_div_01 d-inline-block text-left'>
            <div className='chi_chi_001'>
              <h1>
                MOT DU DIRECTEUR
              </h1>
              <p>
              chers parents ,<br/>
              fondé en 1921 , note établissement scolaire<br/>
              perpétue une tradition marquèe par la quéte de<br/>
              l’exvellence dans tous nos projects nous proposons<br/>
              une pédagogie éducative basée sur la réussite ,<br/>
              au monde de demain .lire la suite<br/>
              </p>
            </div>

            <img src={img_01} alt="" />

          </div>

        </div>

    </section>
  )
}

export default Section_02