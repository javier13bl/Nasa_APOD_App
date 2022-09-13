import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Apod = () => {
    const [loading, setLoading] = useState(false);
    const [apodArr, setApodArr] = useState([]);
    const appId = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const consultAPI = async () => {
            setLoading(true)
            try {
                const url = `https://api.nasa.gov/planetary/apod?api_key=${appId}`
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
        }, 750);
    }, []);

    return (
        loading ? <Spinner/> :
        <article className='apod'>
            <Link to={'/'} className='closeX'>x</Link>
            <h2>{apodArr.title}</h2>
            <h4>Astronomy Photo of the Day: <span>{apodArr.date}</span></h4>
            <div className='apodInfo'>
                <div>
                    <img src={apodArr.url} alt='Astronomy Photo of the Day'/>
                    <h4>{apodArr.copyright} &copy;</h4>
                </div>
                <p>{apodArr.explanation}</p>
            </div>
        </article>
    )
}

export default Apod