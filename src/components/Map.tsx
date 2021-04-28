import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps';

interface Props{
    googleMapURL: string,
    containerElement: any,
    mapElement: any,
    loadingElement: any
    latitude: number
    longitude: number
}

const Map = (props: Props) => {
    return (
        <GoogleMap defaultZoom={16}
        defaultCenter={{lat: props.latitude, lng: props.longitude}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
