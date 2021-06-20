import React, { useState, useContext,useEffect } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data,setData]=useState([])
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  
function changeMedia(mq){
  setDarkMode()
}
    useEffect(()=>{

        const mq=window.matchMedia('(prefers-color-scheme:dark)')
        mq.addListener(changeMedia);
    },[isDarkMode])

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if(!isDarkMode){
    document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')
    }
    const theme =isDarkMode.toString
    window.localStorage.setItem('bg','exe')
  };
  const setOffDarkMode = () => {
    setDarkMode(false);
  };


  return (
    <AppContext.Provider
      value={{
        loading,
        isDarkMode,
        isSubmenuOpen,
        page,
        location,
        openSubmenu,
        closeSubmenu,
        setDarkMode,
        setOffDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

