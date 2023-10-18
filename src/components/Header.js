import '../sass/header.scss'
const Header = ({titile}) => {
  console.log(`Screen width: ${window.innerWidth}px`);
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
      <div className='span_'>
        <span class="material-symbols-outlined">
          menu
        </span>
      </div>
    </nav>
  )
}

export default Header