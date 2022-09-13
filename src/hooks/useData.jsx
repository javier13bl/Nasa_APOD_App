import { useContext } from "react";
import SearchContext from "../context/SearchProvider";

const useData = () => {
    return useContext(SearchContext)
}

export default useData