'use client'; // 클라이언트 컴포넌트로 지정

import { useRef } from 'react';

export default function Box() {
  const ref = useRef(null); // `ref`를 이용해 `mesh` 객체에 직접 접근할 수 있도록 설정.

  return (
    <mesh ref={ref}> {/* `ref`를 `mesh`에 바인딩하여 필요 시 접근 가능. */}
      <boxGeometry args={[1, 1, 1]} /> {/* 박스의 기하학을 정의함 */}
      <meshStandardMaterial color="orange" /> {/* 박스의 재질을 설정 */}
    </mesh>
  );
}

// 이 코드의 작동 구조:
// 1. `useRef` 훅은 `ref` 객체를 반환하며, 특정 요소나 컴포넌트에 직접 접근할 수 있게 해줍니다.
// 2. `ref`를 `mesh`에 바인딩함으로써 이 컴포넌트 내에서 해당 `mesh`에 접근하거나 조작할 수 있게 합니다. 예를 들어, 다른 기능을 추가할 때 회전이나 이동을 직접 구현할 때 유용합니다.