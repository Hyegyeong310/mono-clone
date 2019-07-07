import React, { Component } from 'react';
import SectionTitle from '../component/SectionTitle';

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    return (
      <div className="section">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
      </div>
    );
  }
}

export default Problem;
