import '../sass/section.sass'
import videsection from '../vids/committement--.mp4'
const section_01 = () => {
  return (
    <section className="section_01">
      <div></div>
      <video src={videsection} autoPlay loop muted className='video'/>
      <div></div>

    </section>
  )
}

export default section_01