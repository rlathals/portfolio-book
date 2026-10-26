import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';
// 에러를 일으키던 import 줄은 삭제했습니다.

const Page = forwardRef((props, ref) => {
  return (
    <div className={`page ${props.cover ? 'page-cover' : ''}`} ref={ref} style={props.style}>
      {props.children}
    </div>
  );
});

function App() {
  return (
    <div className="book-container">
      <HTMLFlipBook width={400} height={600} showCover={true}>

        {/* 1쪽: 표지 (public 폴더의 이미지를 바로 불러옵니다) */}
        {/* 1쪽: 표지 */}
        <Page cover={true} style={{ padding: 0 }}> {/* 여백 제거 */}
          <img
            src="/cover.png"
            alt="포트폴리오 표지"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </Page>

        {/* 2쪽: ABOUT ME */}
        <Page>
          <div className="content-wrapper">
            <h2>ABOUT ME</h2>
            <ul className="info-list">
              <li>
                <span className="label">학력사항</span>
                <span className="desc">덕성여자대학교 재학</span>
              </li>
              <li>
                <span className="label">교외_수상경력</span>
                <span className="desc">국제 디자인 공모전 수상</span>
              </li>
              <li>
                <span className="label">교내_수상경력</span>
                <span className="desc">내용을 입력하세요</span>
              </li>
              <li>
                <span className="label">활동내역</span>
                <span className="desc">절주서포터즈 (스폰서십 기획)</span>
              </li>
              <li>
                <span className="label">장단점</span>
                <span className="desc">내용을 입력하세요</span>
              </li>
            </ul>
          </div>
        </Page>

        {/* 3쪽: PROJECTS */}
        <Page>
          <h2>PROJECTS</h2>
          <p>MEMORY ATTIC</p>
        </Page>

        {/* 4쪽: 뒷표지 */}
        <Page cover={true}>
          <h2>THE END</h2>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default App;