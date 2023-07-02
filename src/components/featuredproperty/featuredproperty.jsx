import useFetch from "../../hooks/usefetch";
import "./featuredproperty.css";

const FeaturedProperties = () => {
  const{data,loading,error}=useFetch('hotel?featured=true&limit=4')
  return (
    <div className="fp">
    {loading ? ("is Loading") :(
      <>
      {data.map((items)=>(
      <div className="fpItem" key={items._id}>
        <img
          src={items.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">{items.city}</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    ))
      
      }
      </>)}
    </div>
  );
};

export default FeaturedProperties;