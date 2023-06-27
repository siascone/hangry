import { useEffect, useState } from "react";
import { fetchBusiness } from "../../store/businesses";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDayOfWeek, getClosingHour, openOrClosed, opensAt, closesAt, getOpeningHour } from "../../utilities/dates";

import './business.css'

function BusinessIndexItem ({business}) {

    const businessId = business.id;
    const day = getDayOfWeek();
    const timeBlock = business.hours[day];
    const closingHour = getClosingHour(timeBlock);
    const openingHour = getOpeningHour(timeBlock)
    let open = openOrClosed(timeBlock);

    let status
    if (open) {
        status = <p><span className= "is-open">Open</span> until {closingHour}</p>
    } else {
        status = <p><span className="is-closed">Closed</span> until {openingHour}</p>
    }

    return (
        <NavLink to={`/businesses/${businessId}`} className="business-index-item-container">
            <img src={business.photoUrl} alt="business photo" className="business-index-item-image"/>
            <div className="business-info">
                <div className="business-name">{business.name}</div>

                <div className="business-type-list">
                    <p>{business.businessType}</p>
                </div>

                <div className="closing-hour">
                    {status}
                </div>

                <div className="business-description-index">
                    {business.description}
                </div>
            </div>
        </NavLink>
    )
}

export default BusinessIndexItem;