import { Link } from "react-router-dom"

const LeftSide = () => {
  return (
    <div className='left contenedor'>
        <nav className='navbar'>
            <Link to={'/'} className='linko'>
                <img src="/nasaLogo.svg" className="logo" alt="NASA logo" />
                <h2>Search</h2>
            </Link>
            <div className="navLinks">
                <a href="https://apod.nasa.gov" target="_blank">
                    <h2>&#123; A P O D &#125;</h2>
                </a>
                <a href="https://github.com/javier13bl" target="_blank">
                    <h2>Javier13bl</h2>
                </a>
            </div>
        </nav>
        <section className="nasaWord">
            <h1>n</h1>
            <h1>a</h1>
            <h1>s</h1>
            <h1>a</h1>
        </section>
    </div>
  )
}

export default LeftSide