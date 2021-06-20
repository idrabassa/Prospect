import React from 'react'
import {useGlobalContext} from './context'
import {MdKeyboardArrowDown} from 'react-icons/md'
import styled from 'styled-components'
const FilterStyled = styled.div`
  //   height: 50px;
  //   // background: var(--clr-white-text-dark-mode-elements-ligth-mode);
  //   // border-radius: var(--radius);
  //   // box-shadow: var(--light-shadow);
  //   // transition: var(--transition);
  //   width: 100px;
  //   border: none;
  //   text-align: center;
  //   justify-content: space-between;
  
  // &.dark-mode{
  //   background: var(--clr-dark-blue-elements-dark-mode);
  //   color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  // }
  // :hover{
  //   // box-shadow: var(--dark-shadow);
  //   cursor: pointer;
  // }
`
const SelectStyled = styled.ul`
  //   position: relative;
  //   width: 100%;
  //   height: 100%;
  //   top: -15px;
  //   :focus{
  //     background:green;
  //   }
  //  .option1{
  //   display: flex;
  //   justify-content: space-between;
  //   margin: 15px 20px;
  //   position: relative;
  //   width: 100%;
  //   left: -20px;
  //   border: none;
  //   background: var(--clr-white-text-dark-mode-elements-ligth-mode);
  //   // border-radius: var(--radius);
  //   padding: 15px;
  //   outline: none !important;
    
  // } 
  // .option1.dark-mode{
  //   background: var(--clr-dark-blue-elements-dark-mode);
  //   color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  // }
  //  li{
  //   width: 100%;
  //   height: 100%;
  // }
  
  // .option1 svg{
  //   margin-top: 2px;
    
  // }
  
  //  &.view ul{
  //   display: block;
  //   position: relative;
  //   top:5px;
  //   display: block;
  //   background:white;
  //   // background: var(--clr-white-text-dark-mode-elements-ligth-mode);
  //   border-radius: 10px;
  //   border:1px solid #ef516d;
  //   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  //   transition:all ease-in-out 0.5s;
  //   width: 200px;
  //   // border: none;
  //   padding-top: 15px;
  //   padding-bottom: 15px;
  // }
  // &.view ul.dark-mode{
  //  background-color: var(--clr-dark-blue-elements-dark-mode);
  // } 
  // &.view ul li{
  //   height: 25px;
  //   text-align: left;
  //   padding-left: 20px;
  // }
  // &.view ul::before{
  //   position:absolute;
  //   content:'';
  //   top:-11px;
  //   left:30px;
  //   background:white;
  //   // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  //   transform:rotate(45deg);
  //   // border:none;
  //   width:20px;
  //   height:20px;
  //   // box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.1);
  //   border-top:1px solid #ef516d;
  //   border-left:1px solid #ef516d;
  //   // z-index:-1;
  // }
  // &.view ul li:hover{
  //   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  //   background:#ef516d;
  //   color:white;
  //   transition: all ease-in-out 0.2s;
  // }
`
const UlStyled = styled.ul`
    display: none;
`
function Filter({filterValue,handleFilter,isView,lists}) {
    const{isDarkMode}=useGlobalContext()
    return (
        <div className={`filter ${isDarkMode?'dark-mode':''}`} onClick={handleFilter}>
                    <ul className={`select ${isView?'view':''}`} >
                        <li className="default">
                            <button className={`option1 ${isDarkMode?'dark-mode':''}`}><p>{filterValue}</p><MdKeyboardArrowDown /></button>
                        </li>
                        <ul className={`intern ${isDarkMode?'dark-mode':''}`}>
                          {lists.map((list,index)=>{
                            return <li key={index}>{list}</li>
                          })}
                        {/* <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li> */}
                        </ul>
                    </ul>
                </div>
    )
}

export default Filter
