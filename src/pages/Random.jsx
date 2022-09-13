import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Spinner from '../components/Spinner';

const Random = () => {
    const [loading, setLoading] = useState(false);
    const [apodArr, setApodArr] = useState([]);
    const appId = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const consultAPI = async () => {
            setLoading(true)
            try {
                const url = `https://api.nasa.gov/planetary/apod?api_key=${appId}&count=5`
                const answer = await fetch(url)
                const result = await answer.json()
                setApodArr(result)
            } catch (error) {
                console.log(error);
            }
        }
        consultAPI()
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);
    
    return (
        loading ? <Spinner/> :
        <div className='contentMenu apod'>
            <Link to={'/'} className='closeX'>x</Link>
            <h1>Nasa Results</h1>
            {apodArr.map((photo) => (
                <article key={photo.date}>
                    <h2>{photo.title}</h2>
                    <h4>Astronomy Photo of the Day: <span>{photo.date}</span></h4>
                    <div className='apodInfo'>
                        <div>
                            <img src={photo.url} alt={`APOD from ${photo.date}`}/>
                            <h4>{photo.copyright ? `${photo.copyright} ©` : ''} </h4>
                        </div>
                        <p>{photo.explanation}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Random