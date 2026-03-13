/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Wind, Coffee, Compass, ChevronRight, Tent } from 'lucide-react';

const Campfire = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Ambient background glow */}
    <motion.div 
      className="absolute inset-0 bg-orange-600/20 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.7, 0.4]
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 overflow-visible">
      <defs>
        <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <linearGradient id="flame-main" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff3d00" />
          <stop offset="40%" stopColor="#ff9100" />
          <stop offset="100%" stopColor="#ffea00" />
        </linearGradient>
        
        <linearGradient id="flame-core" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff9100" />
          <stop offset="100%" stopColor="#ffff00" />
        </linearGradient>
      </defs>

      {/* Glowing Ember Bed */}
      <ellipse cx="50" cy="84" rx="28" ry="8" fill="#d84315" filter="url(#glow-strong)" opacity="0.8" />
      <ellipse cx="50" cy="84" rx="18" ry="4" fill="#ff8f00" filter="url(#glow-soft)" opacity="0.9" />

      {/* Logs */}
      <g className="logs">
        <rect x="15" y="78" width="70" height="9" rx="4.5" transform="rotate(18 50 82)" fill="#3e2723" />
        <rect x="15" y="78" width="70" height="9" rx="4.5" transform="rotate(-18 50 82)" fill="#4e342e" />
        <rect x="25" y="82" width="50" height="9" rx="4.5" fill="#2d1a11" />
        
        {/* Log highlights/texture */}
        <path d="M 20 81 L 80 81" stroke="#2a1810" strokeWidth="1" transform="rotate(18 50 82)" />
        <path d="M 20 81 L 80 81" stroke="#3a231c" strokeWidth="1" transform="rotate(-18 50 82)" />
        <path d="M 30 85 L 70 85" stroke="#1a0f0a" strokeWidth="1" />
      </g>

      {/* Flames */}
      <g filter="url(#glow-soft)" style={{ mixBlendMode: 'screen' }}>
        {/* Left Flame */}
        <motion.path
          d="M 40 82 Q 25 82 25 65 Q 25 45 35 25 Q 45 45 45 65 Q 45 82 40 82 Z"
          fill="url(#flame-main)"
          style={{ originX: '40px', originY: '82px' }}
          animate={{ 
            scaleY: [1, 1.2, 0.8, 1.1, 1], 
            scaleX: [1, 0.9, 1.1, 0.95, 1],
            skewX: [0, 5, -3, 4, 0] 
          }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
        
        {/* Right Flame */}
        <motion.path
          d="M 60 82 Q 55 82 55 65 Q 55 45 65 25 Q 75 45 75 65 Q 75 82 60 82 Z"
          fill="url(#flame-main)"
          style={{ originX: '60px', originY: '82px' }}
          animate={{ 
            scaleY: [1, 0.8, 1.25, 0.9, 1], 
            scaleX: [1, 1.1, 0.85, 1.05, 1],
            skewX: [0, -5, 4, -2, 0] 
          }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
        />

        {/* Main Center Flame */}
        <motion.path
          d="M 50 84 Q 30 84 30 60 Q 30 35 50 10 Q 70 35 70 60 Q 70 84 50 84 Z"
          fill="url(#flame-main)"
          style={{ originX: '50px', originY: '84px' }}
          animate={{ 
            scaleY: [1, 1.15, 0.9, 1.1, 1], 
            scaleX: [1, 0.95, 1.05, 0.95, 1],
            skewX: [0, -2, 3, -1, 0] 
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Inner Core Flame */}
        <motion.path
          d="M 50 84 Q 38 84 38 65 Q 38 45 50 25 Q 62 45 62 65 Q 62 84 50 84 Z"
          fill="url(#flame-core)"
          style={{ originX: '50px', originY: '84px' }}
          animate={{ 
            scaleY: [1, 1.1, 0.95, 1.05, 1],
            scaleX: [1, 0.95, 1.05, 0.98, 1]
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </g>

      {/* Sparks */}
      {[...Array(12)].map((_, i) => (
        <motion.ellipse
          key={i}
          cx={50}
          cy={75}
          rx={1.5}
          ry={3}
          fill="#fff59d"
          filter="url(#glow-soft)"
          animate={{
            cy: [75, -10],
            cx: [50, 50 + (Math.random() - 0.5) * 60],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5 + Math.random() * 2,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="font-sans bg-stone-950 text-stone-100 min-h-screen overflow-x-hidden selection:bg-orange-900/50">
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="font-serif text-2xl tracking-widest font-semibold">山野星空</div>
        <button className="text-sm tracking-widest uppercase border border-stone-100/30 rounded-full px-6 py-2 hover:bg-stone-100 hover:text-stone-950 transition-colors duration-300">
          立即预定
        </button>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80" 
            alt="Starry night camping" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/starrynight/1920/1080";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/20 to-stone-950"></div>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <Campfire />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
          >
            逃离喧嚣<br/>
            <span className="italic text-orange-200/80">拥抱星辰</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-300/80 text-lg md:text-xl max-w-xl font-light tracking-wide mb-12"
          >
            在海拔1200米的隐秘山谷，体验极致奢华的自然栖息。
            仅限周末开放，为您保留最纯粹的星空与宁静。
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-widest text-stone-950 bg-orange-100 rounded-full transition-all hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(255,237,213,0.2)]"
          >
            <span className="relative flex items-center gap-2">
              开启周末逃离计划 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-stone-500 to-transparent"></div>
        </motion.div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              重新定义<br/><span className="italic text-stone-400">野外栖息</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-8 text-lg">
              忘掉搭建帐篷的繁琐。我们的野奢帐篷配备了五星级酒店标准的床品、独立卫浴以及全景天窗。在温暖的被窝里，抬头即可仰望浩瀚银河。
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-orange-200">
                  <Tent className="w-5 h-5" />
                </div>
                <h3 className="text-lg tracking-wide">全景野奢帐篷</h3>
                <p className="text-sm text-stone-500">270度落地观景窗，沉浸式自然体验</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-orange-200">
                  <Coffee className="w-5 h-5" />
                </div>
                <h3 className="text-lg tracking-wide">山野私厨</h3>
                <p className="text-sm text-stone-500">米其林主厨定制营地晚餐与手冲咖啡</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-orange-200">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-lg tracking-wide">恒温系统</h3>
                <p className="text-sm text-stone-500">全天候地暖与空调，无惧山间温差</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full border border-stone-800 flex items-center justify-center text-orange-200">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg tracking-wide">专属管家</h3>
                <p className="text-sm text-stone-500">24小时贴心服务，定制周边徒步路线</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury glamping tent" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/glamping/1000/1500";
              }}
            />
            <div className="absolute inset-0 border border-stone-100/10 rounded-3xl m-4 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-stone-900 overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="font-serif text-3xl md:text-4xl italic text-stone-300">瞬间 · 永恒</h2>
        </div>
        <div className="flex gap-6 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
          {[
            "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=800&auto=format&fit=crop"
          ].map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden snap-center relative group"
            >
              <img 
                src={src} 
                alt="Camp life" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/camplife${idx}/800/1200`;
                }}
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 relative flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
            alt="Mountains" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/mountains/1920/1080";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Star className="w-8 h-8 mx-auto text-orange-200/50 mb-8" />
          <h3 className="font-serif text-2xl md:text-4xl leading-relaxed text-stone-200 mb-8">
            "这是我度过最宁静的一个周末。没有信号的打扰，只有篝火的噼啪声和漫天繁星。管家准备的早餐让人惊艳。"
          </h3>
          <p className="text-stone-500 tracking-widest uppercase text-sm">— 城市逃离者, Lin</p>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">准备好出发了吗？</h2>
          <p className="text-stone-400 mb-12 text-lg">本周末仅余 <span className="text-orange-200 font-semibold">2</span> 顶星空帐篷</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-orange-100 text-stone-950 rounded-full font-medium tracking-widest hover:bg-white transition-colors">
              立即预定
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-stone-700 rounded-full font-medium tracking-widest hover:border-stone-400 transition-colors">
              咨询管家
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-stone-900 text-center text-stone-600 text-sm flex flex-col items-center gap-4">
        <div className="font-serif text-xl text-stone-500">山野星空</div>
        <p>© 2026 山野星空高端露营地. All rights reserved.</p>
      </footer>
    </div>
  );
}
