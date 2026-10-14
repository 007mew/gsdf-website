/**
 * ===================================================================
 * GSDF - Govind Social Development Foundation
 * Master Script: Three.js 3D Canvas, Lenis Smooth Scroll,
 * Ripple Glassmorphism, 3D Card Tilt, Bilingual i18n & Modals
 * ===================================================================
 */

(function () {
  'use strict';

  // --- Global State ---
  const state = {
    lang: localStorage.getItem('gsdf_lang') || 'en',
    currentDonationAmount: 1200,
    upiId: '8092445240@ybl',
    ngoName: 'Govind Social Development Foundation',
    phone: '+918092445240',
    email: 'gsdfngo@gmail.com'
  };

  // --- Multilingual Dictionary (English & Hindi) ---
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_programs: 'Programs',
      nav_donate: 'Donate ❤︎',
      nav_contact: 'Contact',
      hero_badge: 'Registered Non-Governmental Organization • Deoghar, Jharkhand',
      hero_title_1: 'Empowering Grassroots India.',
      hero_title_2: 'Transforming Lives.',
      hero_desc: 'Govind Social Development Foundation (GSDF) is dedicated to elevating marginalized rural communities through quality education, rural healthcare, women empowerment, and sustainable community development.',
      hero_cta_donate: 'Donate to Support ❤︎',
      hero_cta_explore: 'Explore Our Mission',
      hero_stat_1_num: '5,000',
      hero_stat_1_lbl: 'Children Educated',
      hero_stat_2_num: '10,000',
      hero_stat_2_lbl: 'Healthcare Lives',
      hero_stat_3_num: '300',
      hero_stat_3_lbl: 'Villages Reached',
      sec_impact_badge: 'Measurable Ground Impact',
      sec_impact_title: 'Real Change on the Ground',
      sec_impact_desc: 'From tribal villages in Deoghar to remote rural hamlets across Jharkhand, our verified field actions bring tangible hope every day.',
      sec_pillars_badge: 'What We Do',
      sec_pillars_title: 'Core Pillars of Empowerment',
      sec_pillars_desc: 'A comprehensive holistic approach to eradicate poverty, illiteracy, and health inequality in rural India.',
      pillar_edu_title: 'Quality Child Education',
      pillar_edu_desc: 'Free learning centres, school kit distribution, digital literacy, and evening tutoring for underprivileged children.',
      pillar_health_title: 'Rural Healthcare & Camps',
      pillar_health_desc: 'Mobile medical camps, maternal health counseling, free medicines, and eye testing in remote rural pockets.',
      pillar_women_title: 'Women Empowerment',
      pillar_women_desc: 'Self-help groups (SHGs), vocational tailoring training, and micro-entrepreneurship for village women.',
      pillar_green_title: 'Water & Environment',
      pillar_green_desc: 'Tree plantation drives, clean drinking water access, and eco-friendly village sanitation campaigns.',
      pillar_relief_title: 'Emergency & Winter Relief',
      pillar_relief_desc: 'Winter blanket drives for elderly & homeless, nutritional food kits for tribal children, and disaster response.',
      pillar_learn_more: 'Learn More →',
      sec_gallery_badge: 'Field Snapshots',
      sec_gallery_title: 'Verified Ground Action',
      sec_gallery_desc: 'Transparent, real-time photographic proof of our humanitarian initiatives across Deoghar, Madhupur, and Jharkhand.',
      gallery_filter_all: 'All Drives',
      gallery_filter_health: 'Health Camps',
      gallery_filter_relief: 'Nutrition & Relief',
      gallery_filter_edu: 'Education',
      sec_trust_badge: 'Transparency & Trust',
      sec_trust_title: 'Verified & Certified NGO',
      sec_trust_desc: 'GSDF operates with 100% financial transparency and strict compliance with Indian regulatory authorities.',
      trust_cert_view: 'View Official Certificate',
      trust_cert_download: 'Download Certificate (PDF)',
      sec_cta_title: 'Be the Reason Someone Smiles Today',
      sec_cta_desc: 'Your generous contribution provides food, education, and healthcare directly to a vulnerable child or family.',
      sec_cta_btn: 'Make a Contribution Now',
      toast_copied: 'UPI ID copied to clipboard!',
      toast_msg_sent: 'Thank you! Your message has been sent successfully.',
      footer_about_desc: 'Govind Social Development Foundation (GSDF) is a registered NGO committed to holistic rural transformation in Jharkhand and across India.',
      footer_quick_links: 'Quick Links',
      footer_our_work: 'Our Focus',
      footer_contact_info: 'Official Contact',
      footer_copy: 'Govind Social Development Foundation. All rights reserved. Registered NGO in Jharkhand, India.'
    },
    hi: {
      nav_home: 'होम',
      nav_about: 'हमारे बारे में',
      nav_programs: 'कार्यक्रम',
      nav_donate: 'दान करें ❤︎',
      nav_contact: 'संपर्क करें',
      hero_badge: 'पंजीकृत गैर-सरकारी संगठन • देवघर, झारखंड',
      hero_title_1: 'ग्रामीण भारत का सशक्तिकरण।',
      hero_title_2: 'जीवन में नया उजाला।',
      hero_desc: 'गोविंद सोशल डेवलपमेंट फाउंडेशन (GSDF) गुणवत्तापूर्ण शिक्षा, ग्रामीण स्वास्थ्य सेवा, महिला सशक्तिकरण और सतत विकास के माध्यम से वंचित समुदायों के उत्थान के लिए समर्पित है।',
      hero_cta_donate: 'सहयोग करें / दान करें ❤︎',
      hero_cta_explore: 'हमारा मिशन जानें',
      hero_stat_1_num: '5,000',
      hero_stat_1_lbl: 'शिक्षित बच्चे',
      hero_stat_2_num: '10,000',
      hero_stat_2_lbl: 'स्वास्थ्य लाभार्थी',
      hero_stat_3_num: '300',
      hero_stat_3_lbl: 'सहायता प्राप्त गांव',
      sec_impact_badge: 'प्रत्यक्ष ज़मीनी प्रभाव',
      sec_impact_title: 'धरातल पर वास्तविक बदलाव',
      sec_impact_desc: 'देवघर के आदिवासी गांवों से लेकर झारखंड के सुदूर इलाकों तक, हमारा प्रयास हर दिन उम्मीद और प्रगति लेकर आता है।',
      sec_pillars_badge: 'हमारे मुख्य कार्य',
      sec_pillars_title: 'सशक्तिकरण के आधार स्तंभ',
      sec_pillars_desc: 'ग्रामीण भारत से गरीबी, अशिक्षा और स्वास्थ्य असमानता को मिटाने के लिए समग्र एवं पारदर्शी दृष्टिकोण।',
      pillar_edu_title: 'गुणवत्तापूर्ण बाल शिक्षा',
      pillar_edu_desc: 'निशुल्क शिक्षा केंद्र, स्कूल बैग व किताबों का वितरण, और वंचित बच्चों के लिए निःशुल्क कोचिंग।',
      pillar_health_title: 'ग्रामीण स्वास्थ्य व चिकित्सा शिविर',
      pillar_health_desc: 'सुदूर गांवों में मोबाइल मेडिकल कैंप, मातृ स्वास्थ्य मार्गदर्शन, निःशुल्क दवाइयां व नेत्र जांच।',
      pillar_women_title: 'महिला सशक्तिकरण',
      pillar_women_desc: 'स्वयं सहायता समूह (SHG), सिलाई-कढ़ाई प्रशिक्षण एवं ग्रामीण महिलाओं के लिए आजीविका के साधन।',
      pillar_green_title: 'स्वच्छ जल व पर्यावरण',
      pillar_green_desc: 'वृक्षारोपण अभियान, स्वच्छ पेयजल की व्यवस्था एवं पर्यावरण संरक्षण व स्वच्छता जागरूकता।',
      pillar_relief_title: 'आपदा व शीतकालीन राहत',
      pillar_relief_desc: 'कड़ाके की ठंड में बुजुर्गों को कंबल वितरण, बच्चों को पौष्टिक आहार पैकेट एवं आपातकालीन सहायता।',
      pillar_learn_more: 'विस्तार से जानें →',
      sec_gallery_badge: 'कार्यक्षेत्र की झलकियां',
      sec_gallery_title: 'सत्यापित ज़मीनी गतिविधियां',
      sec_gallery_desc: 'देवघर, मधुपुर और झारखंड के विभिन्न क्षेत्रों में संचालित हमारी मानवीय पहलों की वास्तविक तस्वीरें।',
      gallery_filter_all: 'सभी गतिविधियां',
      gallery_filter_health: 'स्वास्थ्य शिविर',
      gallery_filter_relief: 'पोषण व राहत',
      gallery_filter_edu: 'शिक्षा सेवा',
      sec_trust_badge: 'पारदर्शिता व विश्वसनीयता',
      sec_trust_title: 'पंजीकृत एवं प्रमाणित संस्था',
      sec_trust_desc: 'GSDF पूर्ण वित्तीय पारदर्शिता एवं भारत सरकार के विनियामक नियमों के अनुरूप कार्य करती है।',
      trust_cert_view: 'आधिकारिक प्रमाण पत्र देखें',
      trust_cert_download: 'सर्टिफिकेट डाउनलोड करें (PDF)',
      sec_cta_title: 'आज किसी के जीवन में आशा की किरण बनें',
      sec_cta_desc: 'आपका छोटा सा योगदान किसी जरूरतमंद बच्चे की शिक्षा और परिवार के इलाज में बड़ा संबल बन सकता है।',
      sec_cta_btn: 'अभी सहयोग राशि प्रदान करें',
      toast_copied: 'UPI ID कॉपी कर लिया गया है!',
      toast_msg_sent: 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।',
      footer_about_desc: 'गोविंद सोशल डेवलपमेंट फाउंडेशन (GSDF) झारखंड एवं संपूर्ण भारत में समग्र ग्रामीण परिवर्तन के लिए समर्पित एक पंजीकृत गैर-सरकारी संगठन है।',
      footer_quick_links: 'महत्वपूर्ण लिंक',
      footer_our_work: 'हमारी कार्य योजनाएं',
      footer_contact_info: 'आधिकारिक संपर्क',
      footer_copy: 'गोविंद सोशल डेवलपमेंट फाउंडेशन। सर्वाधिकार सुरक्षित। पंजीकृत गैर-सरकारी संगठन, झारखंड, भारत।'
    }
  };

  // --- Document Ready Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    initThreeCanvas();
    initLenisScroll();
    initScrollProgressBar();
    initNavbar();
    initRippleEffect();
    init3DCardTilt();
    initMotionObserver();
    initCounterAnimation();
    initBilingualSystem();
    initDonationSystem();
    initGalleryLightbox();
    initCertificateModal();
    initContactForms();
    initDynamicYear();
  });

  // ===================================================================
  // 1. THREE.JS 3D INTERACTIVE CONSTELLATION / NETWORK OF HOPE
  // ===================================================================
  function initThreeCanvas() {
    const container = document.getElementById('three-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Particle Constellation Sphere
    const particleCount = window.innerWidth < 768 ? 400 : 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPrimary = new THREE.Color('#00e5bc');
    const colorCyan = new THREE.Color('#38bdf8');
    const colorEmerald = new THREE.Color('#10b981');

    const radius = 240;
    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const r = radius + (Math.random() - 0.5) * 60;
      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? colorPrimary : i % 3 === 1 ? colorCyan : colorEmerald;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture via Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(0, 229, 188, 0.8)');
    gradient.addColorStop(1, 'rgba(0, 229, 188, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.PointsMaterial({
      size: 9,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Interactive Mouse Tracking with smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - windowHalfX) * 0.4;
      mouseY = (e.clientY - windowHalfY) * 0.4;
    });

    // Ripple shockwave on window click
    let shockwaveRadius = 0;
    let isShockwaving = false;
    window.addEventListener('click', () => {
      shockwaveRadius = 0;
      isShockwaving = true;
    });

    // Animation Loop
    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.08 + targetX * 0.001;
      particles.rotation.x = targetY * 0.001;

      if (isShockwaving) {
        shockwaveRadius += 4;
        material.size = 9 + Math.sin(shockwaveRadius * 0.1) * 3;
        if (shockwaveRadius > 100) {
          isShockwaving = false;
          material.size = 9;
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // ===================================================================
  // 2. ULTRA-SMOOTH LENIS MOMENTUM SCROLLING
  // ===================================================================
  function initLenisScroll() {
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      window.lenisInstance = lenis;
    }
  }

  // ===================================================================
  // 3. TOP SCROLL PROGRESS BAR
  // ===================================================================
  function initScrollProgressBar() {
    const bar = document.querySelector('.scroll-progress-bar');
    const dockTopBtn = document.querySelector('.dock-btn-top');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (bar) bar.style.width = `${progress}%`;

      if (dockTopBtn) {
        if (scrollTop > 400) {
          dockTopBtn.classList.add('visible');
        } else {
          dockTopBtn.classList.remove('visible');
        }
      }
    });

    if (dockTopBtn) {
      dockTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ===================================================================
  // 4. NAVBAR SCROLL EFFECT & MOBILE DRAWER
  // ===================================================================
  function initNavbar() {
    const header = document.querySelector('.site-header');
    const hamburger = document.querySelector('.hamburger-btn');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.mobile-drawer-overlay');

    window.addEventListener('scroll', () => {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    if (hamburger && drawer && overlay) {
      const toggleDrawer = () => {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
          drawer.classList.remove('open');
          overlay.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.style.overflow = '';
        } else {
          drawer.classList.add('open');
          overlay.classList.add('active');
          hamburger.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      };

      hamburger.addEventListener('click', toggleDrawer);
      overlay.addEventListener('click', toggleDrawer);

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          toggleDrawer();
        }
      });
    }
  }

  // ===================================================================
  // 5. LIQUID RIPPLE EFFECT GENERATOR ON CLICK
  // ===================================================================
  function initRippleEffect() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.ripple-surface, .btn, .glass-card, .filter-btn, .tier-select-btn');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-wave');

      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      target.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    });
  }

  // ===================================================================
  // 6. 3D CARD TILT & SPECULAR MOUSE LIGHT
  // ===================================================================
  function init3DCardTilt() {
    if (window.innerWidth < 768) return; // Disable heavy tilt on touch

    const cards = document.querySelectorAll('.glass-card, .pillar-card, .impact-card, .trust-banner');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card.style.transform = `perspective(1000px) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ===================================================================
  // 7. MOTION REVEAL OBSERVER (Framer Motion feel)
  // ===================================================================
  function initMotionObserver() {
    const elements = document.querySelectorAll('[data-motion]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el, index) => {
      // Add staggered delay if inside a grid
      if (!el.style.transitionDelay && el.parentElement && el.parentElement.children.length > 1) {
        const siblingIndex = Array.from(el.parentElement.children).indexOf(el);
        el.style.transitionDelay = `${siblingIndex * 0.08}s`;
      }
      observer.observe(el);
    });
  }

  // ===================================================================
  // 8. LIVE NUMBER COUNTER ANIMATION WITH EASING
  // ===================================================================
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-val');
    if (!counters.length) return;

    let hasRun = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            hasRun = true;
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
              const duration = 2200; // ms
              const startTime = performance.now();

              function updateCount(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease Out Expo
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentVal = Math.floor(easeOutExpo * target);

                counter.textContent = currentVal.toLocaleString('en-IN');

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  counter.textContent = target.toLocaleString('en-IN');
                }
              }
              requestAnimationFrame(updateCount);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const firstCounter = counters[0];
    if (firstCounter) observer.observe(firstCounter.closest('section') || firstCounter);
  }

  // ===================================================================
  // 9. INSTANT BILINGUAL TRANSLATION (English <-> Hindi)
  // ===================================================================
  function initBilingualSystem() {
    applyLanguage(state.lang);

    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const newLang = state.lang === 'en' ? 'hi' : 'en';
        state.lang = newLang;
        localStorage.setItem('gsdf_lang', newLang);
        applyLanguage(newLang);
      });
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update toggle button text
    document.querySelectorAll('.lang-toggle-btn span').forEach((span) => {
      span.textContent = lang === 'en' ? '🌐 हिंदी' : '🌐 English';
    });
  }

  // ===================================================================
  // 10. INTERACTIVE DONATION PORTAL & DYNAMIC UPI QR GENERATOR
  // ===================================================================
  function initDonationSystem() {
    const tierBtns = document.querySelectorAll('.tier-select-btn');
    const customInput = document.querySelector('.custom-amount-input');
    const qrFrame = document.querySelector('.qr-code-frame img');
    const copyBtn = document.querySelector('.copy-upi-btn');

    function updateQR(amount) {
      if (!qrFrame) return;
      const cleanAmount = parseInt(amount, 10) || 500;
      state.currentDonationAmount = cleanAmount;

      const upiUrl = `upi://pay?pa=${encodeURIComponent(state.upiId)}&pn=${encodeURIComponent(state.ngoName)}&am=${cleanAmount}&cu=INR&tn=Donation%20to%20GSDF`;
      // Use clean QR API
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(upiUrl)}`;
      qrFrame.src = qrApiUrl;
    }

    tierBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        tierBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const amount = btn.getAttribute('data-amount');
        if (customInput) customInput.value = amount;
        updateQR(amount);
      });
    });

    if (customInput) {
      customInput.addEventListener('input', (e) => {
        tierBtns.forEach((b) => b.classList.remove('active'));
        const val = parseInt(e.target.value, 10);
        if (val && val > 0) {
          updateQR(val);
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(state.upiId).then(() => {
          showToast(translations[state.lang]?.toast_copied || 'UPI ID copied to clipboard!');
        });
      });
    }

    // Initialize with default
    updateQR(state.currentDonationAmount);
  }

  // ===================================================================
  // 11. GROUND GALLERY LIGHTBOX MODAL
  // ===================================================================
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.lightbox-modal');
    if (!modal) return;

    const modalImg = modal.querySelector('.lightbox-img');
    const modalTitle = modal.querySelector('.lightbox-title');
    const modalDesc = modal.querySelector('.lightbox-desc');
    const closeBtn = modal.querySelector('.modal-close-btn');

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const fullSrc = item.getAttribute('data-full') || item.querySelector('img').src;
        const title = item.getAttribute('data-title') || 'GSDF Field Activity';
        const desc = item.getAttribute('data-desc') || 'Community development in Deoghar, Jharkhand.';

        if (modalImg) modalImg.src = fullSrc;
        if (modalTitle) modalTitle.textContent = title;
        if (modalDesc) modalDesc.textContent = desc;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Gallery Category Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        galleryItems.forEach((item) => {
          const itemCat = item.getAttribute('data-category');
          if (cat === 'all' || itemCat === cat) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ===================================================================
  // 12. CERTIFICATE PDF MODAL
  // ===================================================================
  function initCertificateModal() {
    const certModal = document.querySelector('.cert-modal');
    const triggerBtns = document.querySelectorAll('.open-cert-modal');
    if (!certModal) return;

    const closeBtn = certModal.querySelector('.modal-close-btn');

    const openModal = (e) => {
      if (e) e.preventDefault();
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    triggerBtns.forEach((btn) => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // ===================================================================
  // 13. INTERACTIVE CONTACT & DONATION RECEIPT FORMS
  // ===================================================================
  function initContactForms() {
    const contactForm = document.querySelector('.contact-form-main');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('[name="name"]')?.value || '';
        const message = contactForm.querySelector('[name="message"]')?.value || '';
        const subject = contactForm.querySelector('[name="subject"]')?.value || 'Website Inquiry';

        // Direct WhatsApp redirection option
        const whatsappText = encodeURIComponent(`Hello GSDF,\nMy name is ${name}.\nSubject: ${subject}\nMessage: ${message}`);
        const sendViaWhatsApp = confirm("Would you also like to send this inquiry directly via WhatsApp for faster response?");
        
        if (sendViaWhatsApp) {
          window.open(`https://wa.me/918092445240?text=${whatsappText}`, '_blank');
        }

        showToast(translations[state.lang]?.toast_msg_sent || 'Message sent successfully!');
        contactForm.reset();
      });
    }

    const receiptForm = document.querySelector('.receipt-form');
    if (receiptForm) {
      receiptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Receipt request submitted! Our accounts team will verify your transaction and issue your 80G receipt.');
        receiptForm.reset();
      });
    }
  }

  // ===================================================================
  // 14. TOAST NOTIFICATION HELPER
  // ===================================================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--primary)"></i> <span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ===================================================================
  // 15. DYNAMIC CURRENT YEAR
  // ===================================================================
  function initDynamicYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach((el) => {
      el.textContent = year;
    });
  }

  // Expose global helpers if needed
  window.GSDF = {
    showToast,
    applyLanguage,
    state
  };
})();
