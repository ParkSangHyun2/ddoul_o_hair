'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GirlDot = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hair */}
    <rect x="12" y="4" width="24" height="12" fill="#4A2E2A"/>
    <rect x="8" y="10" width="4" height="16" fill="#4A2E2A"/>
    <rect x="36" y="10" width="4" height="16" fill="#4A2E2A"/>
    {/* Face */}
    <rect x="16" y="10" width="16" height="14" fill="#F0C1B0"/>
    <rect x="18" y="16" width="3" height="3" fill="#000"/> {/* Eye L */}
    <rect x="27" y="16" width="3" height="3" fill="#000"/> {/* Eye R */}
    {/* Dress */}
    <rect x="14" y="24" width="20" height="12" fill="#FFB7C5"/>
    {/* Legs */}
    <rect x="18" y="36" width="4" height="6" fill="#F0C1B0"/>
    <rect x="26" y="36" width="4" height="6" fill="#F0C1B0"/>
    {/* Shoes */}
    <rect x="16" y="42" width="6" height="2" fill="#4A2E2A"/>
    <rect x="26" y="42" width="6" height="2" fill="#4A2E2A"/>
  </svg>
);

const MeerkatDot = () => (
  <svg width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head with Ears */}
    <rect x="12" y="4" width="4" height="4" fill="#4A2E2A"/> {/* Ear L */}
    <rect x="24" y="4" width="4" height="4" fill="#4A2E2A"/> {/* Ear R */}
    <rect x="12" y="8" width="16" height="12" fill="#D2B48C"/> {/* Head */}
    <rect x="14" y="12" width="3" height="3" fill="#000"/>    {/* Eye L */}
    <rect x="23" y="12" width="3" height="3" fill="#000"/>    {/* Eye R */}
    <rect x="18" y="16" width="4" height="2" fill="#4A2E2A"/> {/* Nose/Muzzle */}
    
    {/* Body */}
    <rect x="14" y="20" width="12" height="24" fill="#D2B48C"/>
    {/* Belly (lighter) */}
    <rect x="16" y="24" width="8" height="16" fill="#F5DEB3"/>
    
    {/* Arms */}
    <rect x="10" y="22" width="4" height="8" fill="#D2B48C"/>
    <rect x="26" y="22" width="4" height="8" fill="#D2B48C"/>
    
    {/* Tail - Meerkat Signature */}
    <rect x="18" y="44" width="4" height="2" fill="#8B5A2B"/>
    <rect x="22" y="38" width="4" height="8" fill="#8B5A2B"/>
    <rect x="26" y="34" width="4" height="6" fill="#4A2E2A"/> {/* Dark tip */}

    {/* Feet */}
    <rect x="14" y="44" width="4" height="4" fill="#8B5A2B"/>
    <rect x="22" y="44" width="4" height="4" fill="#8B5A2B"/>
  </svg>
);

export default function DotCharacters() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // 추격전 경로 정의 (오른쪽 하단 영역 70~95vw, 70~90vh 로 엄격히 제한)
  const chasePathX = ['75vw', '92vw', '85vw', '72vw', '80vw', '75vw'];
  const chasePathY = ['82vh', '78vh', '88vh', '75vh', '85vh', '82vh'];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* 1. 앞장서서 도망가는 미어캣 */}
      <motion.div
        animate={{ 
          x: chasePathX,
          y: chasePathY,
          scaleX: [1, 1, -1, -1, 1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="absolute"
      >
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 0.35, repeat: Infinity }}
        >
            <MeerkatDot />
        </motion.div>
      </motion.div>

      {/* 2. 뒤쫓아가는 여자아이 */}
      <motion.div
        animate={{ 
          x: chasePathX,
          y: chasePathY,
          scaleX: [1, 1, -1, -1, 1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.4
        }}
        className="absolute"
      >
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
        >
            <GirlDot />
        </motion.div>
      </motion.div>

      {/* 3. 배경에서 빼꼼 쳐다보는 미어캣 (더 구석으로 밀착) */}
      <motion.div
        initial={{ x: '94vw', y: '98vh' }}
        animate={{ y: ['98vh', '91vh', '98vh'] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 10 }}
        className="absolute"
      >
        <MeerkatDot />
      </motion.div>
    </div>
  );
}
