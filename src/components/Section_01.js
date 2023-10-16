import '../sass/section.sass'
import videsection from '../vids/committement--.mp4'
const section_01 = () => {
  return (
    <section className="section_01">
      
      <video src={videsection} autoPlay loop muted className='video'/>
      

    </section>
  )
}

export default section_01