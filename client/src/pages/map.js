import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PageWrapper from '../components/PageWrapper';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = 'AIzaSyCDyMiORDkLeZ3U5DhE1nokuEbvsqfmPnk'

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?type=police&key=${API_KEY}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.warn(err);
            })
    }

    render() {
        return (
            <PageWrapper>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: API_KEY }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </PageWrapper>
        );
    }
}

export default SimpleMap;

//Make it show up
//Make it our location
//markers where I want them