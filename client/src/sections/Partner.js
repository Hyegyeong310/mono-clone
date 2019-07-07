import React, { Component } from 'react';
import SectionTitle from '../component/SectionTitle';

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      item: { id, title, subtitle }
    } = this.props;
    return (
      <div className="section partner">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
        </div>
        <div className="blog-content">
          <div className="section-content">
            <p>블로그에서 최신 정보를 확인하세요.</p>
            <p>
              <a
                className="blog-btn"
                href="http://monolabs.io/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                BLOG
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
