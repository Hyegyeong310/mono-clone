import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div className="section home-content">
        <Fade top>
          <h1>
            귀사의 <em>데이터</em>는 <em>안녕</em>하십니까?
          </h1>
        </Fade>
        <Fade top>
          <h1>
            <em>블록체인</em> 기반 <em>빅데이터</em> 분석을 통해 다양한{' '}
            <em>솔루션</em>을 제공합니다.
          </h1>
        </Fade>
        <Fade top>
          <h1>
            <em>고객 데이터</em>는 기업의 <em>미래를 보장</em>하는 매우 중요한{' '}
            <em>자산</em>입니다.
          </h1>
        </Fade>
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
        <a href="#none">OUR MISSION</a>
      </div>
    );
  }
}

export default Home;
