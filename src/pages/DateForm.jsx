import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import useData from '../hooks/useData';

const DateForm = () => {
    const navigate = useNavigate()
    const { setUrl } = useData()
    const appId = import.meta.env.VITE_API_KEY

    const minDate = '1995-06-16'
    const milisecondsDay = 86400000;
    const dd = [0,1,2,3,4,5,6,7,8,9]

    const todayDate = () => {
        const d = new Date();
        return d.toISOString().slice(0, 10);
    }
    const futureDate = () => {
        const d = new Date(startDate).getTime();
        const future = d + (milisecondsDay * endDays);
        const f = new Date(future).toISOString().slice(0, 10);
        return f;
    }

    const [startDate, setStartDate] = useState(todayDate());
    const [endDays, setEndDays] = useState(0);
    const [error, setError] = useState(false);

    const handleResetSearch = () => {
        setStartDate(todayDate())
        setEndDays(0)
        let ele = document.getElementsByName("futureDays");
        for(let i=0;i<ele.length;i++)
            ele[i].checked = false;
    }
    const handleSubmit = e => {
        e.preventDefault();
        const today = new Date(todayDate()).getTime();
        const future = new Date(startDate).getTime() + (milisecondsDay * endDays);
        if (future > today) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 5000);
            let ele = document.getElementsByName("futureDays");
            for(let i=0;i<ele.length;i++)
                ele[i].checked = false;
        } else {
            setUrl(`https://api.nasa.gov/planetary/apod?api_key=${appId}&start_date=${startDate}&end_date=${futureDate()}`)
            navigate('/search')
        }
    }

  return (
    <form
        className='dateForm'
        onSubmit={handleSubmit}
    >
        <h2>search options</h2>
        <p>find the perfect picture&#32;<span>for the benefit of all</span></p>
        <div className='dateFields'>
            <div className='dates'>
                <label htmlFor='start'>Start date:</label>
                <input
                    type='date'
                    id='start'
                    min={minDate}
                    max={todayDate()}
                    value={startDate}
                    onChange={ e => setStartDate(e.target.value)}
                />
            </div>
            <div className='dates'>
                <label htmlFor='end'>End date:</label>
                <select
                    value={endDays}
                    onChange={ e => setEndDays(e.target.value)}
                >
                    {dd.map((dayNumber) => (
                        <option key={dayNumber} value={dayNumber}>
                            +{dayNumber} days
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <div className='searchBtns'>
            <button type='button' onClick={handleResetSearch}>
                clean
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6c6c6c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
            </button>
            <button type='submit'>
                Send
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-satellite" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
                    <path d="M6 10l-3 3l3 3l3 -3" />
                    <path d="M10 6l3 -3l3 3l-3 3" />
                    <line x1="12" y1="12" x2="13.5" y2="13.5" />
                    <path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
                    <path d="M15 21a6 6 0 0 0 6 -6" />
                </svg>
            </button>
        </div>
        {error && (
            <div className='alert'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh-alert" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FC3D21" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    <line x1="12" y1="9" x2="12" y2="12" />
                    <line x1="12" y1="15" x2="12.01" y2="15" />
                </svg>
                <p>End Date cannot be greater than Today's date</p>
            </div>
        )}
    </form>
  )
}

export default DateForm