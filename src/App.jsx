import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

function App() {
  const [detailInfo, setDetailInfo] = useState(null);
  const [page, setPage] = useState(0); // 🌟 1. 페이지 상태 선언하기
  const bookRef = useRef(null);

  const stopBookFlip = (e) => {
    e.stopPropagation();
  };

  const goToPage = (e, targetPage) => {
    e.stopPropagation();
    e.preventDefault();

    if (bookRef.current && bookRef.current.pageFlip()) {
      const flipObj = bookRef.current.pageFlip();
      const currentPage = flipObj.getCurrentPageIndex();

      if (currentPage === targetPage) {
        return;
      }

      flipObj.turnToPage(targetPage);
    }
  };

  return (
    <div className="book-container">

      {/* 🌟 2. page가 0일 때만 렌더링 (에러 해결) */}
      {page === 0 && (
        <div className="cover-hint" style={{ transition: 'none' }}>
          <h1 className="hint-title">My<br />Portfolio</h1>
          <p className="hint-arrow">표지를 클릭해서 펼쳐보세요! ▶</p>
        </div>
      )}

      {/* 3D 북 컴포넌트 */}
      <HTMLFlipBook
        ref={bookRef}
        width={400}
        height={600}
        showCover={true}
        style={{ margin: '0 auto' }}
        onFlip={(e) => {
          setPage(e.data); // 🌟 3. 페이지가 바뀔 때마다 상태 업데이트
          const hint = document.querySelector('.cover-hint');
          if (hint) {
            hint.style.opacity = e.data === 0 ? '1' : '0';
          }
        }}
      >
        {/* 1. 앞표지 (index: 0) */}
        <div className="page page-cover front-cover">
          <div className="content-wrapper cover-content">
            <div className="cover-title-box">
              <h1 className="cover-main-title">MY<br />Portfolio</h1>
              <p className="cover-sub-title">2026 Developer Log</p>
            </div>

            <div className="cover-footer">
              <span>📖 Click to Open</span>
            </div>
          </div>
        </div>

        {/* 2. ABOUT ME (왼쪽, index: 1) - Profile 챕터 */}
        <div className="page">
          <div className="content-wrapper">
            <h2>ABOUT ME</h2>

            <div className="photo-container">
              <div className="polaroid-frame avatar-frame">
                <img src="/avatar.png" alt="My Pixel Avatar" />
              </div>

              <div className="polaroid-frame real-photo-frame">
                <img src="/my-photo.jpg" alt="My Real Photo" />
              </div>
            </div>

            <ul className="info-list">
              <li className="tooltip-item">
                <span className="label">학력사항</span>
                <span className="desc">덕성여자대학교 재학</span>
                <div className="css-tooltip">덕성여자대학교 4학년 마지막 학기에 재학 중이며, 27년 2월 졸업예정입니다.</div>
              </li>
              <li className="tooltip-item">
                <span className="label">교외_수상경력</span>
                <span className="desc">두들 메이커톤 1위<br />국제 유니버셜 아이디어 대전 우수상</span>
                <div className="css-tooltip">두들 메이커톤 1위: 아이디어 기획 및 프로토타입 제작{'\n'}국제 유니버셜 아이디어 대전 우수상: 배리어프리 디자인 제안</div>
              </li>
              <li className="tooltip-item">
                <span className="label">교내_수상경력</span>
                <span className="desc">창업아이템 공모전, DSDI, 융복합 교양인 공모전 등 총 7건</span>
                <div className="css-tooltip">스마트 버스 대중교통 솔루션 창업 경진대회 출전 (기구 설계 및 비전 AI 승객 수요 예측 적용) 등 총 7건의 교내 공모전 수상</div>
              </li>
              <li className="tooltip-item">
                <span className="label">활동내역</span>
                <span className="desc">
                  절주서포터즈 (스폰서십 기획)<br />
                  청년 민주주의 현장탐방<br />
                  서울시 대학생 놀이돌봄 인턴십
                </span>
                <div className="css-tooltip">절주서포터즈: 몬스터 에너지, 콤부차 등 실제 브랜드 스폰서십 제안 및 캠페인 기획{'\n'}청년 민주주의 현장탐방{'\n'}서울시 대학생 놀이돌봄 인턴십</div>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. 자격증 (오른쪽 페이지) */}
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

        {/* 따라큐 프로젝트: 왼쪽 페이지 (프로젝트 개요 및 기획 배경) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>GRADUATION PROJECT</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>VR 가상현실 프로젝트</h3>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '10px', lineHeight: '1.5' }}>
              <strong>[주제]</strong> AI 기반 3D 다락방 공간 VR 체험 서비스<br />
              <strong>[사용 툴]</strong> Blender, Meta Quest 3S, React, Vite
            </p>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '12px', lineHeight: '1.5' }}>
              AI 사진 분석 기술과 3D 그래픽을 융합하여, 사용자가 가상 공간(다락방) 속에서 몰입감 있는 인터랙션을 경험할 수 있도록 프론트엔드 웹과 VR 환경을 구축했습니다.
            </p>

            <div style={{ backgroundColor: '#fffde7', border: '1px solid #f1e6b9', padding: '10px 12px', borderRadius: '4px', marginTop: '15px', fontSize: '12px', color: '#666' }}>
              💡 <strong>PART:</strong> 3D 에셋 모델링, 메타퀘스트 3S VR 환경 최적화 및 UI 인터랙션 구현
            </div>
          </div>
        </div>

        {/* 따라큐 프로젝트: 오른쪽 페이지 (VR 시각화 및 상세 구현 내용) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>VR EXPERIENCE</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>Blender & Meta Quest 3S 연동</h3>

            {/* 🌟 노션 링크 연결 + 이벤트 차단 + 안내 문구가 포함된 래퍼 */}
            <a
              href="https://app.notion.com/p/VR-407e8feb8d3a805b8b40c99d66906685"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 이벤트를 차단해서 책장이 넘어가는 것을 막아줍니다! */
              style={{ textDecoration: 'none', display: 'block', marginTop: '12px' }}
            >
              <div style={{ width: '100%', height: '170px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #ddd' }}>
                <img
                  src="/darak.png"
                  alt="추억 다락방 VR 서비스 화면"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <p style={{ fontSize: '12px', color: '#d17b9b', textAlign: 'center', marginTop: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                👆 클릭하면 상세 페이지로 이동합니다!
              </p>
            </a>

            <ul className="info-list" style={{ marginTop: '10px', fontSize: '12px' }}>
              <li>
                <span className="label">AI 연동 3D 다락방</span>
                <span className="desc">Blender를 활용한 정교한 실내 인테리어 3D 모델링 및 텍스처링</span>
              </li>
              <li>
                <span className="label">Meta Quest 3S 활용</span>
                <span className="desc">VR 기기를 통한 실시간 공간 시뮬레이션 및 UX 최적화</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 도봉구 청춘 ZIP: 왼쪽 페이지 (프로젝트 개요 및 기획 의도) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>COMMUNITY SERVICE</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>도봉구 청춘 ZIP 웹 플랫폼</h3>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '10px', lineHeight: '1.5' }}>
              <strong>[프로젝트명]</strong> 도봉구 청춘 ZIP<br />
              <strong>[주제]</strong> 지역 청년들을 위한 정보 공유 및 커뮤니티 웹 서비스<br />
              <strong>[사용 기술]</strong> React, Vite, CSS, JavaScript
            </p>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '12px', lineHeight: '1.5' }}>
              도봉구 지역 청년들이 다양한 정책, 공간 정보, 커뮤니티 소통을 한눈에 확인할 수 있도록 기획·개발한 플랫폼입니다. 사용자 친화적인 UI/UX를 바탕으로 지역 청년들의 접근성을 높이는 데 초점을 맞추었습니다.
            </p>

            <div style={{ backgroundColor: '#fffde7', border: '1px solid #f1e6b9', padding: '10px 12px', borderRadius: '4px', marginTop: '15px', fontSize: '12px', color: '#666' }}>
              💡 <strong>주요 기여:</strong> 프론트엔드 UI 설계, 반응형 컴포넌트 구현 및 사용자 맞춤형 정보 탐색 페이지 구축
            </div>
          </div>
        </div>

        {/* 도봉구 청춘 ZIP: 오른쪽 페이지 (서비스 화면 이미지 및 노션 링크 연동) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PLATFORM FEATURES</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>청년 맞춤형 공간 & 정책 안내</h3>

            {/* 🌟 노션 링크 연결 + 이벤트 차단(책장 넘김 방지) + 안내 문구 */}
            <a
              href="https://app.notion.com/p/zip-3D-407e8feb8d3a809b8546d114f348caf7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 책장이 넘어가는 것을 막아줍니다! */
              style={{ textDecoration: 'none', display: 'block', marginTop: '12px' }}
            >
              <div style={{ width: '100%', height: '170px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #ddd' }}>
                <img
                  src="/dbj.png" /* 👈 public 폴더에 넣어둔 png 파일명 */
                  alt="도봉구 청춘 ZIP 서비스 화면"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <p style={{ fontSize: '12px', color: '#d17b9b', textAlign: 'center', marginTop: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                👆 클릭하면 상세 페이지로 이동합니다!
              </p>
            </a>

            <ul className="info-list" style={{ marginTop: '10px', fontSize: '12px' }}>
              <li>
                <span className="label">공간 큐레이션</span>
                <span className="desc">도봉구의 숨겨진 명소를 3D로 구현하여 웹상에서 소개</span>
              </li>
              <li>
                <span className="label">반응형 UI 디자인</span>
                <span className="desc">모바일과 PC 환경 모두에서 쾌적하게 동작하는 직관적인 레이아웃 설계</span>
              </li>
            </ul>
          </div>
        </div>


        {/* KAIWAI 앱: 왼쪽 페이지 (프로젝트 개요 및 기획 배경) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>MOBILE APP</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>AI 패션 브랜드 앱 'KAIWAI'</h3>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '10px', lineHeight: '1.5' }}>
              <strong>[프로젝트명]</strong> KAIWAI (카이와이)<br />
              <strong>[주제]</strong> AI 기반 맞춤형 패션 추천 및 브랜드 모바일 애플리케이션<br />
              <strong>[성과]</strong> 구글 플레이스토어 정식 출시 (베타테스트 완료)
            </p>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '12px', lineHeight: '1.5' }}>
              사용자의 취향과 트렌드를 분석하여 최적의 패션 스타일을 제안하고, 브랜드 아이덴티티를 경험할 수 있도록 기획부터 개발, 그리고 실제 스토어 배포까지 전 과정을 완주한 모바일 앱 서비스입니다.
            </p>

            <div style={{ backgroundColor: '#fffde7', border: '1px solid #f1e6b9', padding: '10px 12px', borderRadius: '4px', marginTop: '15px', fontSize: '12px', color: '#666' }}>
              💡 <strong>주요 역할:</strong> 모바일 앱 프론트엔드 개발, UI/UX 인터페이스 구현 및 플레이스토어 출시 관리
            </div>
          </div>
        </div>

        {/* KAIWAI 앱: 오른쪽 페이지 (앱 화면 이미지 및 노션 링크 연동) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>APP FEATURES</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>AI 스타일링 & 스토어 런칭</h3>

            {/* 🌟 노션 링크 연결 + 이벤트 차단(책장 넘김 방지) + 안내 문구 */}
            <a
              href="https://app.notion.com/p/AI-KAIWAI-407e8feb8d3a80a4a66dd6fff9381cf5"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 책장이 넘어가는 것을 막아줍니다! */
              style={{ textDecoration: 'none', display: 'block', marginTop: '12px' }}
            >
              <div style={{ width: '100%', height: '170px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #ddd' }}>
                <img
                  src="/kaiwai.png" /* 👈 public 폴더에 넣어둔 png 파일명 */
                  alt="KAIWAI 앱 실행 화면"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <p style={{ fontSize: '12px', color: '#d17b9b', textAlign: 'center', marginTop: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                👆 클릭하면 상세 페이지로 이동합니다!
              </p>
            </a>

            <ul className="info-list" style={{ marginTop: '10px', fontSize: '12px' }}>
              <li>
                <span className="label">AI 맞춤형 패션 큐레이션</span>
                <span className="desc">사용자 취향 데이터 기반의 실시간 스타일 추천 알고리즘 연동</span>
              </li>
              <li>
                <span className="label">실제 서비스 상용화</span>
                <span className="desc">베타테스트를 거쳐 구글 플레이스토어 정식 출시 및 피드백 반영 개선</span>
              </li>
            </ul>
          </div>
        </div>


        {/* 1. 안티 딥페이크: 왼쪽 페이지 (프로젝트 개요 및 설명) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROJECTS</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>안티 딥페이크 웹 서비스</h3>
            <p style={{ fontSize: '14px', color: '#555', marginTop: '15px', lineHeight: '1.5' }}>
              딥페이크 악용 방지를 위한 사진 노이즈 생성 웹사이트 구축
            </p>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '15px', lineHeight: '1.6' }}>
              인공지능 기술의 부작용인 딥페이크 범죄와 무단 이미지 도용을 방지하기 위해 기획된 웹 서비스입니다. 사용자가 업로드한 이미지에 보호 노이즈를 더해 악의적인 AI 학습 및 2차 가정을 방어하는 서비스입니다.
            </p>

            <div style={{ backgroundColor: '#fffde7', border: '1px solid #f1e6b9', padding: '10px 12px', borderRadius: '4px', marginTop: '20px', fontSize: '12px', color: '#666' }}>
              💡 <strong>주요 역할:</strong> 프론트엔드 인터페이스 구축, 이미지 업로드 및 보호 처리 프로세스 UI 구현
            </div>
          </div>
        </div>

        {/* 2. 안티 딥페이크: 오른쪽 페이지 (실제 이미지 링크 및 상세 기능) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>PROTECTION SYSTEM</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>노이즈 생성 및 상세 보기</h3>

            {/* 작성해주셨던 실제 이미지 및 노션 링크 코드 적용 */}
            <a
              href="https://app.notion.com/p/AI-407e8feb8d3a800c9e78c82e34d99fe8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 이벤트를 차단해서 책장이 넘어가는 것을 막아줍니다! */
              style={{ textDecoration: 'none', display: 'block', marginTop: '15px' }}
            >
              <div style={{ width: '100%', height: '170px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
                <img
                  src="/antideepfake.jpg"
                  alt="안티 딥페이크 웹 서비스 캡처"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <p style={{ fontSize: '12px', color: '#d17b9b', textAlign: 'center', marginTop: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                👆 클릭하면 상세 페이지로 이동합니다!
              </p>
            </a>

            <ul className="info-list" style={{ marginTop: '10px', fontSize: '12px' }}>
              <li>
                <span className="label">보호 노이즈 적용</span>
                <span className="desc">AI 모델의 무단 학습 방해 섭동 노이즈 생성</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 비교과 활동 1: 왼쪽 페이지 (개요 및 설명) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>EXTRACURRICULAR</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>3D 모델링 멘토링 프로그램</h3>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '15px', lineHeight: '1.6' }}>
              <strong>[역할]</strong> 멘토 (교수자)<br />
              <strong>[참여 인원]</strong> 본인(멘토) + 후배 멘티 2명<br />
              <strong>[사용 툴]</strong> Blender
            </p>
            <p style={{ fontSize: '13px', color: '#555', marginTop: '15px', lineHeight: '1.6' }}>
              후배 2명을 대상으로 진행한 주차별 블렌더 3D 모델링 멘토링 활동입니다. 매주 새로운 레퍼런스 사진을 선정하여 기초부터 단계별로 모델링 스킬을 전수하고 피드백을 주고받으며 실력을 함께 향상시켰습니다.
            </p>

            {/* 감성적인 메모 박스 포인트 */}
            <div style={{ backgroundColor: '#fffde7', border: '1px solid #f1e6b9', padding: '10px 12px', borderRadius: '4px', marginTop: '20px', fontSize: '12px', color: '#666' }}>
              💡 가르치는 과정을 통해 저 스스로도 모델링 공정을 체계적으로 정리하고 깊이 있게 이해할 수 있었던 소중한 경험이었습니다.
            </div>
          </div>
        </div>

        {/* 3D 멘토링 활동: 오른쪽 페이지 (작업물 및 노션 링크 연동) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>MENTORING LOG</h2>
            <h3 style={{ color: '#d17b9b', marginTop: '10px' }}>단계별 성장 과정 & 3D 모델링</h3>

            {/* 🌟 노션 링크 연결 + 이벤트 차단(책장 넘김 방지) + 안내 문구 */}
            <a
              href="https://app.notion.com/p/3D-407e8feb8d3a802484ccc5cc315a0ada"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 책장이 넘어가는 것을 막아줍니다! */
              style={{ textDecoration: 'none', display: 'block', marginTop: '12px' }}
            >
              <div style={{ width: '100%', height: '170px', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #ddd' }}>
                <img
                  src="/mentoring.png"
                  alt="3D 모델링 멘토링 작업물 - 빵 바구니"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <p style={{ fontSize: '12px', color: '#d17b9b', textAlign: 'center', marginTop: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                👆 클릭하면 상세 페이지로 이동합니다!
              </p>
            </a>

            <ul className="info-list" style={{ marginTop: '10px', fontSize: '12px' }}>
              <li>
                <span className="label">주차별 커리큘럼 기획</span>
                <span className="desc">기초 형태 잡기부터 라이팅·텍스처링까지 단계별 구성</span>
              </li>
              <li>
                <span className="label">1:1 코칭 및 피드백</span>
                <span className="desc">멘티들의 작업물 분석 및 디테일 개선점 지도</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 8. SKILLS & TOOLS (왼쪽 또는 오른쪽, 원하는 면에 배치) */}
        <div className="page">
          <div className="content-wrapper">
            <h2>SKILLS & TOOLS</h2>

            <div className="skills-section">
              <h4 className="skill-category">Web Development</h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
              </div>
            </div>

            <div className="skills-section">
              <h4 className="skill-category">3D & XR Design</h4>
              <div className="skill-tags">
                <span className="skill-tag">Blender</span>
                <span className="skill-tag">Meta Quest 3S</span>
                <span className="skill-tag">Maya</span>
                <span className="skill-tag">Unity</span>
                <span className="skill-tag">Unreal</span>
              </div>
            </div>

            <div className="skills-section">
              <h4 className="skill-category">Programming & Data</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Processing</span>
              </div>
            </div>

            <div className="skills-section">
              <h4 className="skill-category">Design & Video</h4>
              <div className="skill-tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">After Effects</span>
              </div>
            </div>

          </div>
        </div>

        {/* 마지막 페이지: 전체 요소를 위로 올리고 폴라로이드 사진 크기를 키운 디자인 */}
        <div className="page">
          <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%', textAlign: 'center', padding: '25px 15px 15px 15px' }}>

            {/* 🌟 1. 위쪽 폴라로이드 사진 2장 (크기 키움) */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '10px', justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#fff', padding: '7px 7px 22px 7px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transform: 'rotate(-4deg)', width: '110px', border: '1px solid #eee', borderRadius: '2px' }}>
                <img src="/mod1.png" alt="작품 1" style={{ width: '100%', height: '90px', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#fff', padding: '7px 7px 22px 7px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transform: 'rotate(3deg)', width: '110px', border: '1px solid #eee', borderRadius: '2px' }}>
                <img src="/mod2.png" alt="작품 2" style={{ width: '100%', height: '90px', objectFit: 'cover' }} />
              </div>
            </div>

            {/* 🌟 2. 가운데 'Thank You!' 문구 및 설명 */}
            <h2 style={{ color: '#4a3b40', marginBottom: '4px', fontSize: '18px', fontWeight: 'bold' }}>Thank You!</h2>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: '1.4', marginBottom: '10px' }}>
              지금까지 제 포트폴리오를 읽어주셔서 감사합니다.<br />
              더욱 성장하는 인재가 되겠습니다!
            </p>

            {/* 🌟 3. 아래쪽 폴라로이드 사진 2장 (크기 키움) */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', justifyContent: 'center' }}>
              <div style={{ backgroundColor: '#fff', padding: '7px 7px 22px 7px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transform: 'rotate(2deg)', width: '110px', border: '1px solid #eee', borderRadius: '2px' }}>
                <img src="/mod3.png" alt="작품 3" style={{ width: '100%', height: '90px', objectFit: 'cover' }} />
              </div>
              <div style={{ backgroundColor: '#fff', padding: '7px 7px 22px 7px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', transform: 'rotate(-3deg)', width: '110px', border: '1px solid #eee', borderRadius: '2px' }}>
                <img src="/mod4.png" alt="작품 4" style={{ width: '100%', height: '90px', objectFit: 'cover' }} />
              </div>
            </div>

            {/* 🌟 4. 인스타그램 링크 버튼 */}
            <a
              href="https://instagram.com/life_also_pizza" /* 👈 본인의 인스타그램 링크로 수정해주세요! */
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} /* 책장이 넘어가는 것을 막아줍니다! */
              style={{
                textDecoration: 'none',
                color: '#4a3b40',
                fontWeight: 'bold',
                fontSize: '12px',
                backgroundColor: '#f7d6de',
                padding: '9px 18px',
                borderRadius: '20px',
                border: '1px solid #ebb5c3',
                display: 'inline-block',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              ✨ 더 많은 작품 보기 (Instagram)
            </a>
          </div>
        </div>

        {/* 10. 뒷표지 (index: 9) */}
        <div className="page page-cover back-cover">
          <div className="back-cover-content">
            <div className="barcode-box">
              <div className="barcode-lines"></div>
              <div className="barcode-text">ISBN 978-0-123456-47-8</div>
            </div>
            <div className="publisher-info">
              Published by github.com/rlathals
            </div>
          </div>
        </div>

      </HTMLFlipBook>


      {/* 팝업(모달) UI */}
      {detailInfo && (
        <div className="modal-overlay" onClick={() => setDetailInfo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4 style={{ color: '#d17b9b', marginBottom: '15px', borderBottom: '1px dashed #ccc', paddingBottom: '5px' }}>상세 정보</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', whiteSpace: 'pre-wrap', textAlign: 'left' }}>
              {detailInfo}
            </p>
            <button
              onClick={() => setDetailInfo(null)}
              style={{ marginTop: '20px', padding: '6px 15px', backgroundColor: '#fce4ec', border: 'none', borderRadius: '4px', color: '#d84374', fontWeight: 'bold', cursor: 'pointer' }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;