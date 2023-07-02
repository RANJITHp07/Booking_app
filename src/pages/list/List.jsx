import {React,useState} from 'react'
import "./List.css"
import {format} from "date-fns"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/searchItem'
import useFetch from '../../hooks/usefetch'

const List = () => {
  
  const location=useLocation()
  const [opendate,setopendate]=useState(false)
  const [destination,setDestination]=useState(location.state.destination);
  const [date,setDate]=useState(location.state.date);
  const [options,setOptions]=useState(location.state.options);
  const[min,setmin]=useState(undefined);
  const[max,setmax]=useState(undefined);

  const {data,loading,error,reFetch}=useFetch( `/hotel?city=${destination}&min=${min || 0}&max=${max || 999}`)
  console.log(data)
  return (
    <div>
      <Navbar/>
      <Header type ="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
        <div className='listSearch'>
           <h1 className='isTitle'>Search</h1>
           <label>Destination</label>
           <br/>
           <input type="text" placeholder={destination}/>
           <br/> 
           <label>Check-in Date:</label>
           <br/>
           
           <span onClick={function(){setopendate(!opendate)}}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
           <div>
           <div>
           {opendate && (<DateRange
                  editableDateInputs={true}
                  onChange={item =>setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                 ranges={date}
                 className="date"
                 />)}
           </div>
           </div>
           <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setmin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" OnChange={e=>setmax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={function(){
              reFetch()
            }}>Search</button>
          </div>     
        </div>
        <div className='listResult'>
        {loading ?"is loading":(<>
        {data.map(items =>(
          <SearchItem item={items} key={items._id}/>
        ))}</>)}
         
         
        </div>
      </div>
      </div>
    
  )
}

export default List
 