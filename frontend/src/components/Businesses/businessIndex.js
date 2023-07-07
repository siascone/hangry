import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBusinesses } from "../../store/businesses";
import BusinessIndexItem from "./businessIndexItem";
import './business.css'
import Map from "../Map/Map";
import { useHistory } from "react-router-dom";

function BusinessIndex () {

    const businesses = useSelector(state => Object.values(state.businesses))
    const history = useHistory();
    const dispatch = useDispatch();
    const [highlightedBusiness, setHighlightedBusiness] = useState(null);


    useEffect(() => {
        dispatch(fetchAllBusinesses())
    },[])

    // const mapEventHandlers = useMemo(() => {
    //     click: event => {
    //         const search = new URLSearchParams(event.latLng.toJSONI().toString();
    //         history.push({ pathname: 'businesses/'}))
    //     }
    // })

    return (
        <div className="business-index-main">
            <div className="business-index-container">
                {businesses.map((business, i) => {
                    return <BusinessIndexItem business={business} key={i}/>
                })}
            </div>
            <Map 
                businesses={businesses}
                // mapEventHandlers={mapEventHandlers}
                markerEventHandlers={{
                    click: (business) => history.push(`/businesses/${business.id}`),
                    mouseover: (business) => setHighlightedBusiness(business.id),
                    mouseout: () => setHighlightedBusiness(null)
                }}
                highlightedBusiness={highlightedBusiness}
            />
        </div>
    )
}

export default BusinessIndex;