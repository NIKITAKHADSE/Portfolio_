'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, RoundedBox, Sparkles } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const violet = '#ff4d00';
const cyan = '#ff7a00';

function InterfaceCard({ position, rotation, accent, children }: { position: [number, number, number]; rotation: [number, number, number]; accent: string; children?: React.ReactNode }) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[2.15, 1.35, 0.08]} radius={0.1} smoothness={4}>
        <meshPhysicalMaterial color="#171512" roughness={0.22} metalness={0.2} transparent opacity={0.9} />
      </RoundedBox>
      <mesh position={[0, 0.51, 0.052]}><planeGeometry args={[1.82, 0.035]} /><meshBasicMaterial color={accent} toneMapped={false} /></mesh>
      {children}
    </group>
  );
}

function DesignEngine({ reducedMotion }: { reducedMotion: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);
  const satellite = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const dots = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return [Math.cos(angle) * 1.46, Math.sin(angle) * 1.46] as const;
  }), []);

  useFrame((state, delta) => {
    if (!rig.current || !orbit.current || !satellite.current) return;
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, reducedMotion ? 0.08 : -pointer.y * 0.16 + 0.08, 4, delta);
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, reducedMotion ? -0.18 : pointer.x * 0.28 - 0.18, 4, delta);
    if (!reducedMotion) {
      orbit.current.rotation.z = state.clock.elapsedTime * 0.1;
      satellite.current.rotation.z = -state.clock.elapsedTime * 0.22;
      satellite.current.rotation.y = state.clock.elapsedTime * 0.16;
    }
  });

  return (
    <group ref={rig} rotation={[0.08, -0.18, 0]}>
      <Float speed={reducedMotion ? 0 : 1.25} rotationIntensity={0.08} floatIntensity={0.35}>
        <group ref={orbit}>
          <mesh rotation={[Math.PI / 2.55, 0.15, 0]}><torusGeometry args={[2.55, 0.018, 8, 160]} /><meshBasicMaterial color={cyan} transparent opacity={0.3} toneMapped={false} /></mesh>
          <mesh rotation={[Math.PI / 1.75, -0.3, 0.8]}><torusGeometry args={[2.05, 0.012, 8, 140]} /><meshBasicMaterial color={violet} transparent opacity={0.38} toneMapped={false} /></mesh>
        </group>
        <group ref={satellite} rotation={[0.42, 0.15, 0]}>
          <mesh position={[0, 2.62, 0]} rotation={[0.5, 0.2, 0.4]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial color={violet} emissive={violet} emissiveIntensity={1.2} roughness={0.25} />
          </mesh>
          <mesh position={[0, -2.42, 0]}>
            <torusKnotGeometry args={[0.11, 0.035, 48, 8]} />
            <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={0.8} metalness={0.7} roughness={0.2} />
          </mesh>
        </group>
        <group rotation={[0.1, 0.2, -0.08]}>
          <mesh><icosahedronGeometry args={[1.05, 3]} /><MeshTransmissionMaterial color={cyan} transmission={0.72} thickness={0.6} roughness={0.12} chromaticAberration={0.08} ior={1.35} /></mesh>
          <mesh scale={0.78}><icosahedronGeometry args={[1.05, 1]} /><meshStandardMaterial color="#2b2119" emissive={violet} emissiveIntensity={0.7} wireframe /></mesh>
          <mesh scale={0.35}><sphereGeometry args={[1, 32, 32]} /><meshBasicMaterial color="#fff4dc" toneMapped={false} /></mesh>
        </group>
        <InterfaceCard position={[-2.2, 0.55, 0.55]} rotation={[0.08, 0.5, -0.07]} accent={cyan}>
          {[0.23, -0.02, -0.27].map((y, i) => <mesh key={y} position={[-0.32 + i * 0.08, y, 0.054]}><planeGeometry args={[1.15 - i * 0.17, 0.055]} /><meshBasicMaterial color={i === 1 ? violet : '#8493b8'} transparent opacity={0.8} /></mesh>)}
        </InterfaceCard>
        <InterfaceCard position={[2.15, -0.58, 0.36]} rotation={[-0.08, -0.5, 0.06]} accent={violet}>
          <mesh position={[-0.45, 0, 0.056]}><circleGeometry args={[0.3, 36]} /><meshBasicMaterial color={cyan} toneMapped={false} /></mesh>
          {[0.15, -0.08, -0.31].map((y, i) => <mesh key={y} position={[0.48, y, 0.056]}><planeGeometry args={[0.62 - i * 0.09, 0.05]} /><meshBasicMaterial color="#8795b5" transparent opacity={0.78} /></mesh>)}
        </InterfaceCard>
        {dots.map(([x, y], i) => <mesh key={i} position={[x, y, 0.05]} scale={i % 3 === 0 ? 1.4 : 1}><sphereGeometry args={[0.027, 12, 12]} /><meshBasicMaterial color={i % 2 ? violet : cyan} toneMapped={false} /></mesh>)}
      </Float>
    </group>
  );
}

export default function HeroScene() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!wrapper.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '160px' });
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={wrapper} className="hero-scene" aria-hidden="true">
      <Canvas frameloop={visible ? 'always' : 'never'} dpr={[1, 1.5]} camera={{ position: [0, 0.05, 7.8], fov: 43 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={1.25} /><directionalLight position={[4, 5, 6]} intensity={3.5} color="#dffaff" /><pointLight position={[-3, -2, 3]} intensity={18} color={violet} distance={8} /><pointLight position={[3, 2, 4]} intensity={15} color={cyan} distance={8} />
        <Suspense fallback={null}><DesignEngine reducedMotion={reducedMotion} /><Sparkles count={reducedMotion ? 18 : 46} scale={[7, 5, 3]} size={1.35} speed={reducedMotion ? 0 : 0.2} color={cyan} opacity={0.38} /></Suspense>
      </Canvas>
    </div>
  );
}
