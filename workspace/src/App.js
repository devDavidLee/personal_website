// import './App.css';
// import Button from 'react-bootstrap/Button';
// import { motion, useScroll } from "framer-motion";

// function App() {
  
//   return (
//     <div className='App'>
//       <div className='title'>

//         <h1>
//           <span>긍정적</span>
//           <span>ESFJ</span>
//           <br></br>
//           <span>학습</span>
//           <span>애자일 방법론</span>
//           <span>인내</span>
//           <br></br>
//           <span>blank</span>
//           <span>호기심과 열정</span>
//           <br></br>
//           <span>높은 목표</span>
//           <span>낙관적</span>
//           <span>David</span>
//           <br></br>
//           <span>도전적</span>
//           <span>새로운 시도</span>
//         </h1>
        
//       </div>
//       <Button></Button>
//     </div>

//   );
// }



// export default App;

import React, { useRef } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const lineRef = useRef(null); // 선 요소의 ref
  const spansRefs = useRef([]); // 각 span 요소의 ref 배열

  const handleButtonClick = () => {
    // 버튼 클릭 시 각 span의 위치 값을 사용하여 선의 시작점과 끝점 계산
    const line = lineRef.current;
    const spans = spansRefs.current;
    const firstSpan = spans[0].current;
    const lastSpan = spans[spans.length - 1].current;
    const x1 = firstSpan.getBoundingClientRect().left + firstSpan.offsetWidth / 2;
    const y1 = firstSpan.getBoundingClientRect().top + firstSpan.offsetHeight / 2;
    const x2 = lastSpan.getBoundingClientRect().left + lastSpan.offsetWidth / 2;
    const y2 = lastSpan.getBoundingClientRect().top + lastSpan.offsetHeight / 2;

    // 선의 시작점과 끝점 설정 및 애니메이션 효과 적용
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x1);
    line.setAttribute('y2', y1);
    line.style.visibility = 'visible';
    line.style.transition = 'none';
    setTimeout(() => {
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.style.transition = 'stroke-dashoffset 2s ease-in-out';
    }, 0);
  };

  return (
    <div className='App'>
      <div className='title'>
        <svg className='svg-container'>
          {/* 선 요소 */}
          <line ref={lineRef} className='line' x1='0' y1='0' x2='0' y2='0' />
        </svg>
        <h1>
          <span ref={(ref) => (spansRefs.current[0] = ref)}>긍정적</span>
          <span ref={(ref) => (spansRefs.current[1] = ref)}>긍정적</span>
          <span ref={(ref) => (spansRefs.current[2] = ref)}>부정적</span>
          <span ref={(ref) => (spansRefs.current[3] = ref)}>자존감</span>
          <span ref={(ref) => (spansRefs.current[4] = ref)}>자아존중</span>
        </h1>
      </div>
      <Button onClick={handleButtonClick}>버튼</Button>
    </div>
  );
}

export default App;

