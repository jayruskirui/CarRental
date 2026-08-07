import { createContext, useContext } from "react";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY

    const value = {
        navigate,currency
    }

    return (
        <AppContext.Provider value={value}>
            { Children }
        </AppContext.Provider>
    )
}


export const useAppContext = ()=> {
    return useContext(AppContext)
}