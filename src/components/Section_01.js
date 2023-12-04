import '../sass/section_01.scss'
import videsection from '../vids/committement--.mp4'

const section_01 = () => {
  return (
    <section className="section_01 d-flex mt-4 justify-content-center">
      <video src={videsection} autoPlay loop muted className='video w-100'/>

    </section>
  )
}

export default section_01