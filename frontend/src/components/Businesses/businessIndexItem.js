import { useEffect } from "react";
import { fetchBusiness } from "../../store/businesses";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function BusinessIndexItem ({business}) {

    const businessId = business.id;

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchBusiness(businessId))
    // }, [businessId])

  

    // if (business) {
    //     let days = Object.keys(business.hours)
    //     let times = Object.values(business.hours)
    //     hours = <ul>
    //         {days.map((day, i) => {
    //             return <li key={i}>{day.toUpperCase()} : {times[i]}</li>
    //         })}
    //     </ul>
    // }

    return (
        <div className="business-index-item-container">
            <NavLink to={`/businesses/${businessId}`}>
                <ul className="business-info">
                    <li>{business.name}</li>
                    {/* <li>{business.description}</li> */}
                    <li>{business.address}</li>
                    {/* <li>{business.longitude}</li> */}
                    {/* <li>{business.latitude}</li>
                    <li>{business.type}</li> */}
                    {/* {hours} */}
                </ul>
            </NavLink>
        </div>
    )
}

export default BusinessIndexItem;