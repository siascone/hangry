import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBusinesses } from "../../store/businesses";
import BusinessIndexItem from "./businessIndexItem";
import Map from "../Map/Map";
import './business.css'

function BusinessIndex () {

    const businesses = useSelector(state => Object.values(state.businesses))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBusinesses())
    },[])

    return (
        <div className="business-index-main">
            <div className="business-index-container">
                {businesses.map((business, i) => {
                    return <BusinessIndexItem business={business} key={i}/>
                })}
            </div>
            <Map />
        </div>
    )
}

export default BusinessIndex;