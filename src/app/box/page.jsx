'use client'; // 클라이언트 컴포넌트로 지정

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // 카메라 제어를 위한 OrbitControls 임포트
import Box from './box'; // Box 컴포넌트 임포트

export default function Page() {
  return (
    <Canvas>
      <color attach="background" args={['#171720']} /> {/* 배경색 설정 */}
      <ambientLight intensity={0.5} /> {/* 주변 조명 */}
      <directionalLight position={[10, 10, 10]} intensity={1} /> {/* 방향성 조명 */}
      <Box /> {/* Box 컴포넌트 렌더링 */}
      <OrbitControls /> {/* 마우스를 이용해 카메라 회전 및 줌 기능 추가 */}
    </Canvas>
  );
}

// 이 코드의 작동 구조:
// 1. `Canvas`는 Three.js 기반의 3D 씬을 렌더링하는 컨테이너입니다.
// 2. `OrbitControls`는 사용자 입력(마우스/터치)을 통해 카메라를 제어할 수 있도록 지원하며, 카메라의 회전 및 확대/축소 기능을 제공합니다.