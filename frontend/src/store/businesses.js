// ACTION TYPES

const RECEIVE_ALL_BUSINESSES = 'businesses/RECEIVE_ALL_BUSINESSES';
const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS';

// ACTIONS

const receiveAllBusinesses = (businesses) => {
    return {
        type: RECEIVE_ALL_BUSINESSES,
        businesses
    }
}

const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

// THUNK ACTIONS

export const fetchAllBusinesses = () => async dispatch => {
    let res = await fetch('/api/businesses');

    if (res.ok) {
        let data = await res.json();
        dispatch(receiveAllBusinesses(data));
    } else {
        throw res;
    }

    return res;

}

export const fetchBusiness = (businessId) => async dispatch => {
    let res = await fetch(`/api/businesses/${businessId}`);

    if (res.ok) {
        let data = await res.json();
        dispatch(receiveBusiness(data));
    } else {
        throw res;
    }

    return res;
}

// REDUCER

const businessesReducer = (state = {}, action) => {
    let nextState = {...state}

    switch(action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return {...nextState, ...action.businesses};
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business;
            return nextState;
        default:
            return state;
    }
} 

export default businessesReducer;