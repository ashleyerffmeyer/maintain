import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import GoogleMap from '../components/GoogleMap';


class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <PageWrapper>
                <GoogleMap />
            </PageWrapper>
        );
    }
}

export default SimpleMap;
