import {createContext, useState} from 'react'
const SearchContext = createContext()

const SearchProvider = ({children}) => {
    const [url, setUrl] = useState('');
    return (
        <SearchContext.Provider
            value={{
                url,
                setUrl
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}
export {
    SearchProvider
}
export default SearchContext