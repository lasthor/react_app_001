import '../sass/header.scss'
const Header = ({titile}) => {
  console.log(`Screen width: ${window.innerWidth}px`);
  return (
    <nav className='d-flex justify-content-between px-1 mt-2'>
      <div className=' w-fit-content'>
        <img src={require('../imgs/Logo.png')} alt="" className='img_'/>
      </div>
      <div className='div__ w-fit-content align-items-center'>
        <a href="" className=' fw-bold text-break text-decoration-none'>Accueil</a>
        <a href="" className=' fw-bold text-break text-decoration-none'>Notre École</a>
        <a href="" className='a_3 fw-bold text-break text-decoration-none px-1 rounded d-flex align-items-center justify-content-center'>Academique</a>
        <a href="" className=' fw-bold text-break text-decoration-none'>Admissions</a>
        <a href="" className=' fw-bold text-break text-decoration-none'>Vie Scolaire</a>
        <a href="" className=' fw-bold text-break text-decoration-none'>Actualitées</a>
        <a href="" className=' fw-bold text-break text-decoration-none'>contactez nous</a>
        



        <button className='regis_btn rounded border-0 px-1'>
          <a href="" className='fw-bold text-break text-decoration-none d-flex w-100 h-100 align-items-center justify-content-center'>{titile}</a>
        </button>
      </div>
      <div className='span_ w-fit-content '>
        <span class="material-symbols-outlined">
          menu
        </span>
      </div>
    </nav>
  )
}

export default Header