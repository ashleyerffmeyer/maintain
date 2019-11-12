import React, { Component } from 'react';
const API_KEY = 'AIzaSyDLQVZcxQF9DGhPlYxExI3nrOr9wTC9Mqg'

let map, google;

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: true,
            coords: {
                lat: 38.899648,
                lng: -94.726123
            },
            zoom: 13,
            locations: [
                {
                    type: 'You',
                    color: 'pink',
                    search_term: null
                },
                {
                    type: 'Hospital',
                    color: 'green',
                    search_term: 'hospital'
                },
                {
                    type: 'Police',
                    color: 'blue',
                    search_term: 'police'
                },
                {
                    type: 'Lawyer',
                    color: 'yellow',
                    search_term: 'lawyer'
                },
                //{
                //    type: 'Misc',
                //    color: 'purple',
                //    search_term: null
                //}
            ]
        };
        this.getPlaces = this.getPlaces.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
    }

    componentDidMount() {
        window.getPlaces = this.getPlaces;
        loadJS(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=getPlaces`);
    }

    getPlaces(res) {
        google = window.google;
        map = new google.maps.Map(document.getElementById('map'), {
            center: this.state.coords,
            zoom: this.state.zoom
        });
        if (navigator.geolocation) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                var coords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                self.setState(coords);
                let result = {
                    geometry: {
                        location: coords
                    },
                    name: 'You are here!'
                }
                self.createMarker(result, 'pink', true)
                map.setCenter(coords);

                self.state.locations.forEach(location => {
                    if (location.search_term) self.getMarkers(location);
                })
            }, function () {
                self.handleLocationError(true);
            });
        } else {
            this.handleLocationError(false);

            this.state.locations.forEach(location => {
                if (location.search_term) this.getMarkers(location);
            })
        }

        new google.maps.places.Autocomplete(document.getElementById('places_search'), {
            types: ['establishment'],
            componentRestrictions: { country: 'us' },
        });

        this.setState({ is_loading: false })
    }

    handleLocationError(browserHasGeolocation) {
        console.error(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.')
    }

    locationSearch() {
        console.log('locationSearch()')
    }

    getMarkers(location) {
        var request = {
            location: this.state.coords,
            radius: '2000',
            type: location.search_term
        }
        var service = new google.maps.places.PlacesService(map);

        let self = this;
        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                results.forEach(result => {
                    self.createMarker(result, location.color)
                })
            }
        });
    }

    createMarker(result, color = 'green', open_on_load = false) {
        if (result.geometry) {
            var icon = `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;
            let marker = new google.maps.Marker({
                position: result.geometry.location,
                map: map,
                title: result.name,
                icon: icon
            });
            marker.addListener('click', function () {
                new google.maps.InfoWindow({
                    content: (result.plus_code) ? result.name + '<br /> <a href="https://google.com/maps/dir//' + result.geometry.location.lat() + ',' + result.geometry.location.lng() + '">Get Directions</a>' : result.name
                }).open(map, marker);
            });
            if (open_on_load) {
                google.maps.event.trigger(marker, 'click');
            }
        }
    }

    render() {
        return (
            <div className="">
                <div className="d-flex container justify-content-between flex-column pt-3 pb-3" style={{ 'top': '0' }}>
                    <div className="d-flex justify-content-around pb-3">
                        {
                            this.state.locations.map(location => {
                                return (
                                    <span className="btn btn-outline-secondary" key={location.type}>{location.type} <img src={`http://maps.google.com/mapfiles/ms/icons/${location.color}-dot.png`} /></span>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="map" style={{ 'height': '550px' }}></div>
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