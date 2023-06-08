import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness } from "../../store/businesses";

function BusinessShow () {

    const {businessId} = useParams();
    const dispatch = useDispatch();
    const business = useSelector(state => state.businesses[businessId])

    useEffect(() => {
        dispatch(fetchBusiness(businessId))
    }, [businessId]);

    if (!business) return null;

    const { name, description, address, hours, businessType } = business;

    let days = Object.keys(hours)
    let times = Object.values(hours)

    let formattedHours = <ul className="hours">
        {days.map((day, i) => {
            return <li key={i}>{day.charAt(0).toUpperCase() + day.slice(1)} : {times[i]}</li>
        })}
    </ul>

    return (
        <div className="business-show-container">
            <h1>{name}</h1>
            <p className="business-description">{description}</p>
            <p>Type: {businessType}</p>

            <h2>Address</h2>
            <p>{address}</p>

            <h2>Hours</h2>
            {formattedHours}
            
        </div>
    )

}

export default BusinessShow;