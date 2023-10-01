import { useRef, useEffect, useState} from 'react';
import './Map.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useHistory } from 'react-router-dom';

function Map ({
    businesses,
    highlightedBusiness,
    mapOptions = {},
    mapEventHandlers = {},
    markerEventHandlers = {}
}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markers = useRef({});
    const history = useHistory();

    useEffect(() => {
        if (!map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: {
                    lat: 40.01820,
                    lng: -105.28013
                },
                zoom: 14,
                clickableIcons: false,
                ...mapOptions,
            }));
        }
    }, [mapRef, map, mapOptions]);

    useEffect(() => {
        if (map) {
            // set markers
            businesses.forEach(business => {
                if (markers.current[business.id]) return;
    
                const marker = new window.google.maps.Marker({
                    map,
                    position: new window.google.maps.LatLng(business.latitude, business.longitude),
                    // title: {
                    //     text: `${business.name}`,
                    //     fontWeight: 'bold',
                    //     color: 'black'
                    // }
                    title: `${business.name}`
    
                })
    
                Object.entries(markerEventHandlers).forEach(([event, handler]) => {
                    marker.addListener(event, () => handler(business))
                });
    
                markers.current[business.id] = marker
            });
    
            // remove markers
            Object.entries(markers.current).forEach(([businessId, marker]) => {
                if (businesses.some(business => business.id.toString() === businessId)) return;
    
                marker.setMap(null);
                delete markers.current[businessId]
            })
    
        };
            
    }, [businesses, history, map, markerEventHandlers]);

    // useEffect(() => {
    //     if (map) {
    //         const listeners = Object.entries(mapEventHandlers).map(([event, handler]) => window.google.maps.event.addListener(
    //             map,
    //             event, 
    //             (...args) => handler(...args, map)
    //         ));
    //     }
    // }, [map, mapEventHandlers]);

    return (
        <div className="map-container" ref={mapRef} >
            Map
        </div>
    )
}

function MapWrapper(props) {
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <Map { ...props} />
        </Wrapper>
    )
}

export default MapWrapper;