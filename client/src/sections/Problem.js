import React, { Component } from 'react';
import SectionTitle from '../component/SectionTitle';

class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', event => {
      let problemTop = document
        .querySelector('#section2')
        .getBoundingClientRect().top;
      if (window.scrollY >= problemTop) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false });
      }
    });
  }

  render() {
    const {
      item: { id, title, subtitle, content }
    } = this.props;
    const { active } = this.state;
    return (
      <div className="section problem">
        <div className="section-content" id={`section${id}`}>
          <SectionTitle title={title} subtitle={subtitle} />
          <div className="card-content">
            {content.map((text, index) => (
              <Card key={index} text={text} active={active} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function Card({ text, active }) {
  return (
    <div className={`card ${active ? 'fadeIn' : ''}`}>
      <p>{text}</p>
    </div>
  );
}

export default Problem;
