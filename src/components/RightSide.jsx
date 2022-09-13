import spaceman from '../imgs/spaceman.png'
import { Link } from "react-router-dom"

const RightSide = () => {
  return (
    <div className='right'>
        <img src={spaceman} />
        <section className='btns'>
            <Link className='btn1' to={'/apod'}>
                <h4>Picture of the Day</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="7 11 12 6 17 11" />
                    <polyline points="7 17 12 12 17 17" />
                </svg>
            </Link>
            <Link className='btn2' to={'/random'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="7 7 12 12 17 7" />
                    <polyline points="7 13 12 18 17 13" />
                </svg>
                <h4>Random Pictures</h4>
            </Link>
        </section>
    </div>
  )
}

export default RightSide