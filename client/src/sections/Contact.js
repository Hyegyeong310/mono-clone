import React, { Component } from 'react';
import SectionTitle from '../component/SectionTitle';
import MapContainer from '../component/MapContainer';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    return (
      <div className="section contact">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <ul className="icons">
            <li>
              <i className="far fa-envelope fa-2x" />
              <h5 className="company-mail">contact@monolabs.io</h5>
            </li>
            <li>
              <i className="fas fa-map-marker-alt fa-2x" />
              <h5 className="company-address">
                서울 강남구 테헤란로 26길 14 06236
              </h5>
            </li>
          </ul>
          <div className="map-container">
            <MapContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
