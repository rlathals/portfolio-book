import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

function App() {
  return (
    <div className="book-container">
      {/* width와 height는 책의 한 페이지 크기입니다. 필요에 따라 조절하세요. */}
      <HTMLFlipBook width={400} height={600} showCover={true}>

        {/* 1. 표지 */}
        {/* 1. 앞표지 */}
        <div className="page page-cover"></div>

        {/* 2. ABOUT ME (왼쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>ABOUT ME</h2>
            <ul className="info-list">
              <li>
                <span className="label">학력사항</span>
                <span className="desc">덕성여자대학교 재학</span>
              </li>
              <li>
                <span className="label">교외_수상경력</span>
                <span className="desc">두들 메이커톤 1위<br />국제 유니버셜 아이디어 대전 우수상</span>
              </li>
              <li>
                <span className="label">교내_수상경력</span>
                <span className="desc">창업아이템 공모전, DSDI, 융복합 교양인 공모전 등 총 7건</span>
              </li>
              <li>
                <span className="label">활동내역</span>
                <span className="desc">
                  절주서포터즈 (스폰서십 기획)<br />
                  청년 민주주의 현장탐방<br />
                  서울시 대학생 놀이돌봄 인턴십
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. 자격증 (오른쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>CERTIFICATIONS</h2>
            <ul className="info-list" style={{ marginTop: '20px' }}>
              <li>
                <span className="label">파이썬프로그래밍활용능력 2급</span>
                <span className="desc">KRDI한국정보인재개발원 (2023.06.12)</span>
              </li>
              <li>
                <span className="label">컴퓨터활용능력 2급</span>
                <span className="desc">대한상공회의소 (2025.03.18)</span>
              </li>
              <li>
                <span className="label">GTQ 1급</span>
                <span className="desc">한국생산성본부 (2025.10.24)</span>
              </li>
              <li>
                <span className="label">Adobe Premiere Pro</span>
                <span className="desc">Adobe (2023.06.28)</span>
              </li>
              <li>
                <span className="label">자동차운전면허증</span>
                <span className="desc">경기도남부경찰청 (2023.01.16)</span>
              </li>
              <li>
                <span className="label">한국사능력검정시험</span>
                <span className="desc">국사편찬위원회 (2025.02.28)</span>
              </li>
              <li>
                <span className="label">어학 및 기타</span>
                <span className="desc">G-TELP (2024.09.01)<br />정보처리기사 필기 (2026.08.15)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. PROJECT 1: 다락방 (왼쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROJECTS</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>MEMORY ATTIC</h3>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '15px', lineHeight: '1.5' }}>
              졸업 프로젝트 (팀 '따라큐')<br />
              AI 기반 3D 다락방 VR 경험 (Meta Quest 3S 환경)<br />
              Blender 렌더링 및 3D 모델링 담당
            </p>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              [3D 다락방 이미지 자리]
            </div>
          </div>
        </div>

        {/* 5. PROJECT 2: 도봉구 앱 (오른쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROJECTS</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>도봉구 청년 ZIP</h3>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '15px', lineHeight: '1.5' }}>
              도봉구 청년 지원 모바일 애플리케이션<br />
              구글 플레이스토어 정식 출시
            </p>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              [도봉구 앱 캡처 자리]
            </div>
          </div>
        </div>

        {/* 6. PROJECT 3: AI 패션 앱 (왼쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROJECTS</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>AI 패션 브랜드 앱</h3>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '15px', lineHeight: '1.5' }}>
              AI를 활용한 맞춤형 패션 추천 및 브랜드 애플리케이션
            </p>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              [패션 앱 캡처 자리]
            </div>
          </div>
        </div>

        {/* 7. PROJECT 4: 딥페이크 방지 (오른쪽) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROJECTS</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>안티 딥페이크 웹 서비스</h3>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '15px', lineHeight: '1.5' }}>
              딥페이크 악용 방지를 위한 사진 노이즈 생성 웹사이트 구축
            </p>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              [웹사이트 캡처 자리]
            </div>
          </div>
        </div>

        {/* 8. 마무리 인사 (왼쪽) */}
        <div className="page">
          <div className="content-wrapper" style={{ marginTop: '50%' }}>
            <h2>Thank You!</h2>
            <p style={{ fontSize: '15px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>
              지금까지 제 포트폴리오를 읽어주셔서 감사합니다.<br />
              GitHub: github.com/rlathals
            </p>
          </div>
        </div>

        {/* 9. 빈 페이지 (오른쪽 - 짝수를 맞추기 위함) */}
        <div className="page">
          {/* 비워두거나, 연락처(이메일 등)를 적는 공간으로 활용할 수 있습니다. */}
        </div>

        {/* 10. 뒷표지 (왼쪽) */}
        <div className="page page-cover"></div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;