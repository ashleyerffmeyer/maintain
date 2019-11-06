
import React, { Component } from 'react';

const YourLocation = ({ text }) => <div className="btn btn-primary">{text}</div>;
const MapMarker = ({ text }) => <div className="btn btn-secondary">{text}</div>;
const API_KEY = 'AIzaSyDLQVZcxQF9DGhPlYxExI3nrOr9wTC9Mqg'


let map, infoWindow, google, autocomplete;

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: true,
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 9
        };
    }

    componentDidMount() {
        window.getPlaces = this.getPlaces;
        loadJS(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=getPlaces`);
    }

    getPlaces(res) {
        google = window.google;
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 13
        });
        infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('You are here.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function() {
                this.handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            this.handleLocationError(false, infoWindow, map.getCenter());
        }

        autocomplete = new google.maps.places.Autocomplete(document.getElementById('places_search'), {
            // types: ['lawyer', 'police', 'courthouse', 'doctor', 'hospital', 'police'],
            types: ['establishment'],
            componentRestrictions: {country: 'us'},
            bounds: map.getBounds()
        });
    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    locationSearch() {
        console.log('locationSearch()')
        console.log(map.getBounds())
        // console.log(autocomplete.getPlaces())
    }

    render() {
        return (
            <div className="">
                <input id="places_search" name="places_search" placeholder="Search.." style={{ 'display': 'block' }}/>
                <div id="map" style={{'height': '550px'}}></div>
            </div>
        );
    }
}

export default GoogleMap;


function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}