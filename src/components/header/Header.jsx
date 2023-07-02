import {React,useState}from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import "./Header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';


function Header({type}) {
  const [destination,setDestination]=useState("")
  const [opendate,setopendate]=useState(false)
  const [openoptions,setopenoptions]=useState(false)
  const [date, dateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [options,setoptions]=useState({
    adult:1,
    children:0,
    room:1
  });
  const handleOption = (name, operation) => {
    setoptions((prev) => {
      console.log(prev)
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate=useNavigate()
  const handleSearch=function(){
    navigate("/hotels",{state:{destination,options,date}})
  }
  return (
      <div className={type==="list"?'header1':'header'}>
      <div className='headercontainer'>
      <div className='headerlist'>
          <div className='headerListItem'>
          <div className='headeractive'>
          <FontAwesomeIcon icon= {faBed} />
          <span>Stays</span>
          </div>
          </div>
          <div className="headerListItem">
          <div className='headeractive1'>
          <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          </div>
          <div className="headerListItem">
          <div className='headeractive1'>
          <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span> 
          </div>
          </div>
          <div className="headerListItem">
          <div className='headeractive1'>
          <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          </div>
          <div className="headerListItem">
          <div className='headeractive1'>
          <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
          </div>
            </div>
            {type!=="list" && <div className='headerdesc'>
          <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input className='headerserachInput' type="text" placeholder='where are you going ?' onChange={function(e){
                    setDestination(e.target.value)
                }}/>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={function(){setopendate(!opendate)}} className='headerSearchtext'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {opendate && <DateRange
                  editableDateInputs={true}
                  onChange={item =>dateState([item.selection])}
                  moveRangeOnFirstSelection={false}
                 ranges={date}
                 className="date"
                 />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span  onClick={function(){setopenoptions(!openoptions)}} className='headerSearchtext'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              </div>
              {openoptions && <div className='options'>
              <div className='optionitem'>
              <span className='optionTitle'>Adult</span>
              <div>
                <button  className='optionCounterbtn' onClick={function(){handleOption("adult","i")}}>+</button>
                <span className='optionCounterspan'>{options.adult}</span>
                <button disabled={options.adult<=1} className='optionCounterbtn' onClick={function(){handleOption("adult","d")}}>-</button>
                </div>
              </div>
              
              <div className='optionitem'>
              <span className='optionTitle'>Children</span>
              <div>
              <button  className='optionCounterbtn' onClick={function(){handleOption("children","i")}}>+</button>
              <span className='optionCounterspan'>{options.children}</span>
              <button disabled={options.children<=0} className='optionCounterbtn' onClick={function(){handleOption("children","d")}}>-</button>
              </div>
              </div>
              <div className='optionitem'>
              <span className='optionTitle'>Room</span>
              <div>
                <button  className='optionCounterbtn' onClick={function(){handleOption("room","i")}}>+</button>
                <span className='optionCounterspan'>{options.room}</span>
                <button disabled={options.room<=1} className='optionCounterbtn'onClick={function(){handleOption("room","d")}}>-</button>
                </div>
              </div>
              </div>}
              <div>
                <button onClick={function(){handleSearch()}}>Search</button>
              </div>
            </div>
        </div>}
      </div>
      </div>
  )
}

export default Header
