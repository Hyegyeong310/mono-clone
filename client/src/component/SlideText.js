import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

class SlideText extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  onNextText = () => {
    if (this.state.activeIndex < 2) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  };

  componentDidMount() {
    setInterval(this.onNextText, 5000);
  }

  render() {
    const texts = [
      '귀사의 <em>데이터</em>는 <em>안녕</em>하십니까?',
      '<em>블록체인</em> 기반 <em>빅데이터</em> 분석을 통해 다양한 <em>솔루션</em>을 제공합니다.',
      '<em>고객 데이터</em>는 기업의 <em>미래를 보장</em>하는 매우 중요한 <em>자산</em>입니다.'
    ];
    const { activeIndex } = this.state;
    return (
      <div className="home-content">
        {texts.map((text, index) => (
          <TextElement
            key={index}
            text={text}
            fadeIn={activeIndex === index ? 'fadeIn' : ''}
          />
        ))}
        <p>
          데이터 관리
          <span>•</span>
          CM 최적화
          <span>•</span>
          CRM 솔루션
          <span>•</span>
          브랜드 보호
          <span>•</span>
          크립토 코드 정품 라벨
        </p>
        <Link
          className="mission-btn"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          OUR MISSION
        </Link>
      </div>
    );
  }
}

function TextElement({ text, fadeIn }) {
  return (
    <Fade top>
      <h1 className={fadeIn} dangerouslySetInnerHTML={{ __html: text }} />
    </Fade>
  );
}

export default SlideText;
