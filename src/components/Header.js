import '../sass/header.sass'
const Header = ({titile}) => {
  return (
    <nav>
      <div>
        <img src={require('../imgs/Logo.png')} alt="" className='img_'/>
      </div>
      <div className='div__'>
        <a href="" className=''>Accueil</a>
        <a href="" className=''>Notre École</a>
        <a href="" className='a_3'>Academique</a>
        <a href="" className=''>Admissions</a>
        <a href="" className=''>Vie Scolaire</a>
        <a href="" className=''>Actualitées</a>
        <a href="" className=''>contactez nous</a>
        



        <button className='regis_btn'>
          <a href="">{titile}</a>
        </button>
      </div>
    </nav>
  )
}

export default Header