import React, { Component } from 'react';
import SectionTitle from '../component/SectionTitle';
import Card from '../component/Card';

class Solution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      item: { id, title, subtitle, content }
    } = this.props;
    return (
      <div className="section solution">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <div className="technology">
            {content.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;
