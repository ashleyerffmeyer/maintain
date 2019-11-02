import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PageWrapper from '../components/PageWrapper';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <PageWrapper>
                <div style={{ height: '100vh', width: 'calc(100% - 30px)' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDbFSEbs78FfAx0O4H41PBKIc-h-YqX98I' }}
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