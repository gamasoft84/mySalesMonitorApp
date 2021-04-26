import React from 'react';
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps';

interface Props{
    googleMapURL: string,
    containerElement: any,
    mapElement: any,
    loadingElement: any

}

const Map = (props: Props) => {
    return (
        <GoogleMap defaultZoom={15}
        defaultCenter={{lat:26.927622632445964, lng:-101.41830412689119}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
