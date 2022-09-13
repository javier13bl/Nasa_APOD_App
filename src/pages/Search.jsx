import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Spinner from '../components/Spinner';
import useData from "../hooks/useData"

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [apodArr, setApodArr] = useState([]);
    const { url } = useData()

    useEffect(() => {
        const consultAPI = async () => {
            setLoading(true)
            try {
                const urlSearch = url
                const answer = await fetch(urlSearch)
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
            <h1>Nasa Results</h1>
            <Link to={'/'} className='closeX'>x</Link>
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

export default Search