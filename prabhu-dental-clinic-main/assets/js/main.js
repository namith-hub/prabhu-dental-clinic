


/**
 * Gallery Category Tab Switcher (Clinic Photos <-> Patient Photos)
 */

function initGalleryTabs() {
  const tabs = document.querySelectorAll('.js-gallery-tab');
  const panels = document.querySelectorAll('.js-gallery-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = tab.getAttribute('data-gallery-tab');
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      panels.forEach(panel => {
        const isMatch = panel.getAttribute('data-gallery-cat') === targetCat;
        panel.classList.toggle('is-active', isMatch);
        panel.style.display = isMatch ? 'block' : 'none';
      });
    });
  });
}

function initGalleryLoadMore() {
  const toggleButtons = document.querySelectorAll('.js-gallery-toggle-btn');
  if (!toggleButtons.length) return;

  toggleButtons.forEach(btn => {
    const category = btn.getAttribute('data-target');
    const panel = btn.closest('.js-gallery-panel');
    if (!panel) return;

    const hiddenCards = panel.querySelectorAll('.js-gallery-hidden');
    const wrap = btn.closest('.gallery-more-wrap');

    if (!hiddenCards.length && wrap) {
      wrap.style.display = 'none';
      return;
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = btn.classList.contains('is-expanded');
      const textEl = btn.querySelector('.js-gallery-more-text');

      if (!isExpanded) {
        hiddenCards.forEach(card => {
          card.classList.remove('gallery-card--hidden');
          card.classList.add('gallery-card--revealed');
        });
        btn.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        if (textEl) {
          textEl.setAttribute('data-i18n', 'gallery.btn_view_less');
          textEl.textContent = (translations[currentLang] && translations[currentLang]['gallery.btn_view_less']) || 'View Less';
        }
      } else {
        hiddenCards.forEach(card => {
          card.classList.add('gallery-card--hidden');
          card.classList.remove('gallery-card--revealed');
        });
        btn.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        if (textEl) {
          textEl.setAttribute('data-i18n', 'gallery.btn_view_more');
          textEl.textContent = (translations[currentLang] && translations[currentLang]['gallery.btn_view_more']) || 'View More';
        }
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/**
 * 9. Scroll Reveal Engine using IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 10. Desktop & Tablet Dynamic Cursor Physics Engine for Floating Dental Characters & Badges
 * Features:
 * - Generous, clearly visible cursor parallax (up to 45px - 75px translation)
 * - Local proximity repulsion & buoyant curiosity: teeth rotate, gently drift away, scale, and glow when cursor nears
 * - Smooth lerp spring physics without jitter
 * - Interactive click & tap burst creating dancing sparkle stars
 * - 3D depth tilt & perspective
 */
function initMouseParallax() {
  // A. Hero Visual Stage 3D Card Tilt
  const stage = document.querySelector('.hero-visual-stage');
  const card = document.querySelector('.hero-image-card');
  const decorBadge = document.querySelector('.hero-decor-badge-sparkle');

  if (stage && card && window.innerWidth >= 992) {
    let stageTicking = false;
    stage.addEventListener('mousemove', (e) => {
      if (stageTicking) return;
      stageTicking = true;
      requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / rect.height) * 10;
        const rotateY = (x / rect.width) * 10;

        card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        if (decorBadge) {
          decorBadge.style.transform = `translate(${(x * 0.06).toFixed(1)}px, ${(y * 0.06).toFixed(1)}px)`;
        }
        stageTicking = false;
      });
    });

    stage.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (decorBadge) decorBadge.style.transform = '';
    });
  }

  // B. Global Interactive Dental Floating Elements (Mouse Cursor Response & Interactive Physics)
  const floatDoms = Array.from(document.querySelectorAll('.js-dental-float'));
  if (!floatDoms.length) return;

  // Initialize per-item tracking state
  const items = floatDoms.map(el => ({
    el: el,
    depth: parseFloat(el.getAttribute('data-depth') || 0.12),
    scrollSpeed: parseFloat(el.getAttribute('data-scroll') || 0.05),
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    scale: 1,
    targetX: 0,
    targetY: 0,
    targetRx: 0,
    targetRy: 0,
    targetRz: 0,
    targetScale: 1
  }));

  let cursorScreenX = window.innerWidth / 2;
  let cursorScreenY = window.innerHeight / 2;
  let normX = 0;
  let normY = 0;
  let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let isTicking = false;

  // Helper to trigger physics loop
  function requestUpdate() {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateFloatPositions);
    }
  }

  // Track mouse coordinates across entire viewport
  function onPointerMove(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    cursorScreenX = clientX;
    cursorScreenY = clientY;

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    normX = (clientX - halfW) / (halfW || 1); // -1 to 1
    normY = (clientY - halfH) / (halfH || 1); // -1 to 1

    requestUpdate();
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });

  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset || document.documentElement.scrollTop;
    requestUpdate();
  }, { passive: true });

  // Interactive Click & Tap Reaction (Jelly Bounce & Sparkle Stars Burst)
  floatDoms.forEach(el => {
    el.addEventListener('click', (e) => {
      const badge = el.querySelector('.dental-floating-character, .dental-floating-badge, .dental-mascot-ambient');
      if (badge) {
        badge.classList.remove('tooth-jelly-active');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('tooth-jelly-active');
      }
      spawnSparkleBurst(e.clientX, e.clientY);
    });
  });

  // Main animation frame physics step
  function updateFloatPositions() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const radius = 260; // Cursor interaction proximity radius in pixels

    let needsNextFrame = false;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const el = item.el;
      const rect = el.getBoundingClientRect();

      // Viewport culling for 60fps silky smooth rendering
      if (rect.bottom < -160 || rect.top > winH + 160) continue;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 1. Subtle Ambient Cursor Parallax (Micro-displacement: 3px to 6px)
      const baseX = normX * (item.depth * 40);
      const baseY = normY * (item.depth * 35);

      // 2. Cursor Proximity Repulsion & Soft Curiosity Physics
      const dx = cursorScreenX - centerX;
      const dy = cursorScreenY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let repelX = 0;
      let repelY = 0;
      let tiltX = 0;
      let tiltY = 0;
      let tiltZ = 0;
      let scaleBoost = 0;

      if (dist < radius) {
        const force = Math.pow(1 - dist / radius, 1.4);
        const safeDist = dist || 1;

        // Gentle buoyant micro-drift away from cursor
        repelX = -(dx / safeDist) * force * 6;
        repelY = -(dy / safeDist) * force * 6;

        // Micro 3D Tilt facing towards cursor
        tiltX = (dy / radius) * 3 * force;
        tiltY = -(dx / radius) * 3 * force;
        tiltZ = (dx / radius) * 2 * force;
        scaleBoost = force * 0.03;

        if (!el.classList.contains('is-cursor-near')) {
          el.classList.add('is-cursor-near');
        }
      } else {
        if (el.classList.contains('is-cursor-near')) {
          el.classList.remove('is-cursor-near');
        }
      }

      // 3. Subtle Scroll-linked Parallax
      const scrollDrift = (centerY - winH / 2) * item.scrollSpeed * -0.015;

      // 4. Set Targets
      item.targetX = baseX + repelX;
      item.targetY = baseY + repelY + scrollDrift;
      item.targetRx = tiltX + (normY * -3 * item.depth);
      item.targetRy = tiltY + (normX * 3 * item.depth);
      item.targetRz = tiltZ + (normX * -2 * item.depth);
      item.targetScale = 1 + scaleBoost;

      // 5. Smooth Spring Lerp Interpolation
      const lerp = 0.10;
      item.x += (item.targetX - item.x) * lerp;
      item.y += (item.targetY - item.y) * lerp;
      item.rx += (item.targetRx - item.rx) * lerp;
      item.ry += (item.targetRy - item.ry) * lerp;
      item.rz += (item.targetRz - item.rz) * lerp;
      item.scale += (item.targetScale - item.scale) * lerp;

      // Apply 3D Transform
      el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0) perspective(800px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg) rotateZ(${item.rz.toFixed(2)}deg) scale(${item.scale.toFixed(3)})`;

      // Check if motion is still active
      const diff = Math.abs(item.targetX - item.x) + Math.abs(item.targetY - item.y) + Math.abs(item.targetScale - item.scale);
      if (diff > 0.05) {
        needsNextFrame = true;
      }
    }

    if (needsNextFrame) {
      requestAnimationFrame(updateFloatPositions);
    } else {
      isTicking = false;
    }
  }

  // Cheerful Sparkle Particle Spawner
  function spawnSparkleBurst(x, y) {
    if (!x || !y) return;
    const colors = ['#C82333', '#F87171', '#FF6B6B', '#FFD166', '#FFFFFF'];
    const chars = ['✦', '★', '✧', '•'];
    for (let i = 0; i < 7; i++) {
      const p = document.createElement('span');
      p.className = 'dental-cursor-sparkle';
      p.textContent = chars[Math.floor(Math.random() * chars.length)];
      p.style.color = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      const angle = (Math.PI * 2 / 7) * i + (Math.random() - 0.5) * 0.4;
      const dist = 38 + Math.random() * 45;
      p.style.setProperty('--dx', (Math.cos(angle) * dist).toFixed(1) + 'px');
      p.style.setProperty('--dy', (Math.sin(angle) * dist).toFixed(1) + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }

  // Trigger initial frame calculation
  requestUpdate();
}

/**
 * 11. Dynamic Timeline Scroll Progress Fill
 */
function initTimelineProgress() {
  const timeline = document.querySelector('.legacy-timeline');
  const fill = document.getElementById('timelineProgressFill');
  if (!timeline || !fill) return;

  function updateFill() {
    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.top < windowH && rect.bottom > 0) {
      const visible = Math.max(0, Math.min(rect.height, windowH * 0.7 - rect.top));
      const percentage = Math.min(100, Math.max(0, (visible / rect.height) * 100));
      fill.style.height = `${percentage}%`;
    }
  }

  window.addEventListener('scroll', updateFill, { passive: true });
  updateFill();
}



/**
 * 11. About Section: Flicker-Free Interactive Click Sparkle Feedback
 * Stable in-place click celebration without displacing card or altering layout.
 */
function initAboutCardsSlide() {
  const cards = document.querySelectorAll('.about-pillar-item, .legacy-node-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Create click burst particle at click location
      const rect = card.getBoundingClientRect();
      const spark = document.createElement('span');
      spark.className = 'dental-cursor-sparkle';
      spark.textContent = '✨';
      spark.style.left = (e.clientX || (rect.right - 20)) + 'px';
      spark.style.top = (e.clientY || (rect.top + rect.height / 2)) + 'px';
      spark.style.setProperty('--dx', '20px');
      spark.style.setProperty('--dy', '-18px');
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 800);
    });
  });
}


/**
 * 12. Specialities Section: Interactive Rotating and Sliding Circle Shapes
 * Clicking any speciality card triggers an energetic 360-degree rotation and slide.
 */
function initSpecialityCircleAnimation() {
  const cards = document.querySelectorAll('.speciality-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.remove('is-circle-spinning');
      void card.offsetWidth; // Force reflow
      card.classList.add('is-circle-spinning');

      // Sparkle stars burst from the circle shape
      const iconBox = card.querySelector('.speciality-icon-box');
      if (iconBox) {
        const rect = iconBox.getBoundingClientRect();
        const spark = document.createElement('span');
        spark.className = 'dental-cursor-sparkle';
        spark.textContent = '✨';
        spark.style.left = (rect.left + rect.width / 2) + 'px';
        spark.style.top = (rect.top + rect.height / 2) + 'px';
        spark.style.setProperty('--dx', '20px');
        spark.style.setProperty('--dy', '-22px');
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      }

      setTimeout(() => {
        card.classList.remove('is-circle-spinning');
      }, 1000);
    });
  });
}


/**
 * 12. Specialities Continuous Circular / Spiral Card Orbit Engine
 * - Arranges the 6 complete speciality cards along an elliptical circular path
 * - Cards move one after another clockwise around the center point
 * - Depth scaling: front card is larger and crisp, back cards are slightly smaller
 * - Hover pauses or slows the continuous motion
 * - Clicking any card rotates that card smoothly to the front center
 * - Previous & Next buttons rotate the carousel clockwise or counter-clockwise
 */
function initSpecialitiesCircularOrbit() {
  const stage = document.getElementById('specialitiesOrbitStage');
  const track = document.getElementById('specialitiesOrbitTrack');
  if (!stage || !track) return;

  const cards = track.querySelectorAll('.speciality-card');
  if (!cards.length) return;

  const totalCards = cards.length; // 6 cards
  const angleStep = (2 * Math.PI) / totalCards; // 60 degrees

  let baseAngle = 0; // Current base angle in radians
  let targetAngle = 0; // Target angle for smooth interpolation
  const normalSpeed = 0.0028; // Slow, premium, elegant speed
  let currentSpeed = normalSpeed;
  let isHovered = false;
  let hoveredCard = null;
  let lastTime = performance.now();

  // Hover detection on individual cards
  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      isHovered = true;
      hoveredCard = card;
    });
    card.addEventListener('mouseleave', () => {
      isHovered = false;
      hoveredCard = null;
    });

    // Clicking a card smoothly rotates it to the front center (90 degrees = Math.PI / 2)
    card.addEventListener('click', (e) => {
      // Calculate card's current angle relative to circular path
      const cardCurrentAngle = (baseAngle + idx * angleStep) % (2 * Math.PI);
      let diff = (Math.PI / 2) - cardCurrentAngle;
      // Normalize diff to [-PI, PI] for shortest rotation
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      targetAngle = baseAngle + diff;
    });
  });

  // Stage hover to slow or pause
  stage.addEventListener('mouseenter', () => { isHovered = true; });
  stage.addEventListener('mouseleave', () => { isHovered = false; hoveredCard = null; });

  // Navigation Buttons
  const btnPrev = document.getElementById('btnOrbitPrev');
  const btnNext = document.getElementById('btnOrbitNext');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      targetAngle -= angleStep; // counter-clockwise
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      targetAngle += angleStep; // clockwise
    });
  }

  // Calculate dynamic X and Y radii based on stage dimensions
  function getRadii() {
    const stageWidth = stage.offsetWidth;
    const stageHeight = stage.offsetHeight;
    if (stageWidth > 1024) {
      return { rx: Math.min(390, stageWidth * 0.38), ry: 200 };
    } else if (stageWidth > 768) {
      return { rx: Math.min(290, stageWidth * 0.36), ry: 165 };
    } else if (stageWidth > 480) {
      return { rx: Math.min(190, stageWidth * 0.34), ry: 145 };
    } else {
      // Mobile screens: compact ellipse keeping cards fully within view
      return { rx: Math.min(130, stageWidth * 0.32), ry: 175 };
    }
  }

  function render(time) {
    const dt = Math.min(32, time - lastTime);
    lastTime = time;

    // Smoothly decelerate when hovered or accelerate when free
    if (isHovered) {
      currentSpeed = currentSpeed * 0.88; // gently pause
    } else {
      currentSpeed += (normalSpeed - currentSpeed) * 0.08;
    }

    targetAngle += currentSpeed * (dt / 16.67);
    // Smooth interpolation to targetAngle (prevents jumps, provides silky spring)
    baseAngle += (targetAngle - baseAngle) * 0.08;

    const { rx, ry } = getRadii();
    const isMobile = window.innerWidth <= 600;

    cards.forEach((card, i) => {
      // Clockwise angle: baseAngle + i * angleStep
      const theta = baseAngle + i * angleStep;
      const x = Math.cos(theta) * rx;
      const y = Math.sin(theta) * ry;

      // Depth factor from y: -ry (back) to +ry (front)
      const depth = (y + ry) / (2 * ry); // 0 (back) to 1 (front)

      let scale = isMobile ? (0.80 + depth * 0.24) : (0.82 + depth * 0.25);
      let opacity = isMobile ? (0.70 + depth * 0.30) : (0.75 + depth * 0.25);
      let zIndex = Math.round(10 + depth * 40);

      // If this specific card is hovered, slightly lift it and keep it on top
      if (card === hoveredCard) {
        scale *= 1.05;
        opacity = 1.0;
        zIndex = 70;
      }

      // Subtle bank tilt along the curve
      const bankTilt = Math.sin(theta) * -3;

      card.style.zIndex = zIndex;
      card.style.opacity = opacity.toFixed(2);
      card.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)}) rotate(${bankTilt.toFixed(1)}deg)`;
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}


/**
 * 13. Our Team Section: Interactive Spark Cards Click Sparkle Shower
 * Clicking any team card triggers a sparkling light pop and bursts dancing star particles.
 */
function initTeamCardsSparkle() {
  const cards = document.querySelectorAll('#team .spark-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.remove('is-spark-popping');
      void card.offsetWidth; // Force reflow
      card.classList.add('is-spark-popping');

      // Spawn multi-directional golden & red sparkle stars from click point
      const rect = card.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + 30);

      const sparks = ['✨', '✦', '⭐', '✨'];
      sparks.forEach((symbol, i) => {
        const spark = document.createElement('span');
        spark.className = 'dental-cursor-sparkle';
        spark.textContent = symbol;
        spark.style.left = clickX + 'px';
        spark.style.top = clickY + 'px';
        spark.style.color = (i % 2 === 0) ? '#F59E0B' : '#C82333';
        
        const angle = (i * (Math.PI / 2)) + (Math.random() * 0.4 - 0.2);
        const dist = 35 + Math.random() * 25;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        
        spark.style.setProperty('--dx', dx + 'px');
        spark.style.setProperty('--dy', dy + 'px');
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      });

      setTimeout(() => {
        card.classList.remove('is-spark-popping');
      }, 700);
    });
  });
}


/**
 * 14. Clinic Legacy Timeline: Active Scroll Tracking Highlight Engine
 * As the user scrolls down, each card highlights in its distinct vibrant clinic color,
 * and when you scroll past, it returns to resting state while the next card highlights!
 */
function initLegacyTimelineScrollHighlight() {
  const steps = document.querySelectorAll('#legacy .timeline-step');
  if (!steps.length) return;

  function onScroll() {
    const viewportHeight = window.innerHeight;
    const focusZone = viewportHeight * 0.48; // center reading focus line

    let closestStep = null;
    let closestDistance = Infinity;

    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenter - focusZone);

      if (dist < closestDistance && rect.top < viewportHeight * 0.85 && rect.bottom > viewportHeight * 0.15) {
        closestDistance = dist;
        closestStep = step;
      }
    });

    steps.forEach(step => {
      if (step === closestStep) {
        step.classList.add('is-scroll-active');
      } else {
        step.classList.remove('is-scroll-active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll(); // initial check

  // Click on card also sets it as active
  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('is-scroll-active'));
      step.classList.add('is-scroll-active');
    });
  });
}

/**
 * 15. Contact Cards: Dynamic Cursor Movement & Click-to-Highlight Engine
 * The highlight seamlessly MOVES from card to card as the cursor moves over them.
 * No card is statically stuck. Supports smooth hover tracking and tactile click.
 */
function initContactCardsHighlight() {
  const grid = document.querySelector('#contact .contact-cards-grid');
  const cards = document.querySelectorAll('#contact .contact-card-box');
  if (!cards.length) return;

  function activateCard(targetCard, triggerSparkles = false) {
    cards.forEach(card => {
      if (card === targetCard) {
        card.classList.add('is-card-highlighted');
        card.setAttribute('aria-pressed', 'true');
      } else {
        card.classList.remove('is-card-highlighted');
        card.setAttribute('aria-pressed', 'false');
      }
    });

    if (triggerSparkles) {
      const icon = targetCard.querySelector('.contact-card-icon');
      if (icon) {
        const rect = icon.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        for (let i = 0; i < 6; i++) {
          const star = document.createElement('span');
          star.className = 'dental-cursor-sparkle';
          star.textContent = ['✦', '✨', '⭐'][i % 3];
          const angle = (i / 6) * Math.PI * 2;
          const dist = 32 + Math.random() * 24;
          const tx = Math.cos(angle) * dist;
          const ty = Math.sin(angle) * dist;

          star.style.left = originX + 'px';
          star.style.top = originY + 'px';
          star.style.color = i % 2 === 0 ? '#C82333' : '#F59E0B';
          star.style.fontSize = (12 + Math.random() * 8) + 'px';
          star.style.setProperty('--sparkle-tx', `${tx}px`);
          star.style.setProperty('--sparkle-ty', `${ty}px`);
          document.body.appendChild(star);

          setTimeout(() => {
            if (star.parentNode) star.parentNode.removeChild(star);
          }, 900);
        }
      }
    }
  }

  // Dynamic Cursor Move: Moving cursor over any card immediately moves the highlight to it!
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      activateCard(card, false);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.contact-card-icon')) {
        activateCard(card, true);
        return;
      }
      activateCard(card, true);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard(card, true);
      }
    });
  });

  // When cursor leaves the contact cards area, smoothly de-highlight so no card stays statically stuck
  if (grid) {
    grid.addEventListener('mouseleave', () => {
      cards.forEach(card => {
        card.classList.remove('is-card-highlighted');
        card.setAttribute('aria-pressed', 'false');
      });
    });
  }
}


/**
 * 16. Treatments Sequential Moving Cards Carousel & 3D Flip Engine
 * Seamless 1-8 infinite slider + interactive 3D flip card with clinical details,
 * dynamic cursor hover highlight, and flicker-free direct appointment booking.
 */
function initTreatmentsCarousel() {
  const track = document.getElementById('treatmentsTrack');
  const viewport = document.getElementById('treatmentsViewport');
  const prevBtns = document.querySelectorAll('.js-treat-prev');
  const nextBtns = document.querySelectorAll('.js-treat-next');
  const pagination = document.getElementById('treatmentsPagination');
  const counterEl = document.getElementById('treatmentsCounter');
  if (!track || !viewport) return;

  // Query only ORIGINAL cards (not clones)
  const originalCards = Array.from(track.querySelectorAll('.treatment-card-item:not(.is-clone)'));
  const totalCards = originalCards.length; // 8 cards
  if (!totalCards) return;

  // Append clone cards at the end to make all 8 slides visible and loop seamlessly
  track.querySelectorAll('.is-clone').forEach(el => el.remove());
  const cloneCount = 4;
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalCards[i].cloneNode(true);
    clone.classList.add('is-clone');
    clone.classList.remove('is-active-spotlight');
    clone.classList.remove('is-flipped');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  let currentIndex = 0; // 0 to 7
  let autoTimer = null;
  const autoInterval = 3500; // 3.5s auto advance
  let isHovered = false;
  let isAnyCardFlipped = false;
  let isTransitioning = false;
  let hoveredCard = null;

  // Build pagination dots for all 8 cards
  if (pagination) {
    pagination.innerHTML = '';
    originalCards.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `treatment-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to treatment card ${idx + 1}`);
      dot.addEventListener('click', () => {
        unflipAllCards();
        goToCard(idx);
        restartAutoPlay();
      });
      pagination.appendChild(dot);
    });
  }

  function getCardStepSize() {
    const firstCard = track.querySelector('.treatment-card-item');
    if (!firstCard) return 380;
    const rect = firstCard.getBoundingClientRect();
    const gap = 28; // CSS flex gap
    return rect.width + gap;
  }

  function updateCarousel(instant = false) {
    const stepSize = getCardStepSize();
    const offset = currentIndex * stepSize;

    if (instant) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    track.style.transform = `translateX(-${offset}px)`;

    // Calculate normalized active index (0 to 7)
    const normalizedIdx = currentIndex % totalCards;

    // Update active spotlight: if cursor is hovering a card, let the hovered card take spotlight
    const allCards = track.querySelectorAll('.treatment-card-item');
    allCards.forEach((card, idx) => {
      const cardNorm = idx % totalCards;
      if (hoveredCard) {
        card.classList.toggle('is-active-spotlight', card === hoveredCard);
      } else {
        if (cardNorm === normalizedIdx && !card.classList.contains('is-clone')) {
          card.classList.add('is-active-spotlight');
        } else {
          card.classList.remove('is-active-spotlight');
        }
      }
    });

    // Update pagination dots (all 8 dots)
    if (pagination) {
      const dots = pagination.querySelectorAll('.treatment-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === normalizedIdx);
      });
    }

    // Update live step counter (1 / 8 all the way to 8 / 8!)
    if (counterEl) {
      counterEl.textContent = `${normalizedIdx + 1} / ${totalCards}`;
    }
  }

  function goToCard(idx) {
    currentIndex = idx;
    updateCarousel();
  }

  function nextCard() {
    if (isTransitioning) return;
    currentIndex++;
    isTransitioning = true;
    updateCarousel(false);

    // If we advanced to index 8 (the clone matching card 1)
    if (currentIndex === totalCards) {
      // Counter immediately displays 1 / 8 and first dot active
      if (counterEl) counterEl.textContent = `1 / ${totalCards}`;
      if (pagination) {
        const dots = pagination.querySelectorAll('.treatment-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === 0));
      }
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(true); // Snap back to 0 with transition: none
        void track.offsetWidth; // Force reflow
        track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        isTransitioning = false;
      }, 650);
    } else {
      setTimeout(() => { isTransitioning = false; }, 650);
    }
  }

  function prevCard() {
    if (isTransitioning) return;
    if (currentIndex <= 0) {
      currentIndex = totalCards;
      updateCarousel(true);
      void track.offsetWidth;
      currentIndex = totalCards - 1;
      isTransitioning = true;
      updateCarousel(false);
      setTimeout(() => { isTransitioning = false; }, 650);
    } else {
      currentIndex--;
      isTransitioning = true;
      updateCarousel(false);
      setTimeout(() => { isTransitioning = false; }, 650);
    }
  }

  // Attach listeners to all Prev buttons (both side floating & bottom controls)
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unflipAllCards();
      prevCard();
      restartAutoPlay();
    });
  });

  // Attach listeners to all Next buttons (both side floating & bottom controls)
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unflipAllCards();
      nextCard();
      restartAutoPlay();
    });
  });

  // Dynamic Cursor Move Highlight + Hover Flip:
  // When cursor moves into ANY card, THAT card highlights AND flips immediately!
  track.querySelectorAll('.treatment-card-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      hoveredCard = card;
      isHovered = true;
      // Spotlight
      track.querySelectorAll('.treatment-card-item').forEach(c => {
        c.classList.toggle('is-active-spotlight', c === card);
      });
      // Flip this card; unflip all others
      track.querySelectorAll('.treatment-card-item').forEach(c => {
        if (c !== card) c.classList.remove('is-flipped');
      });
      card.classList.add('is-flipped');
      isAnyCardFlipped = true;
    });

    card.addEventListener('mouseleave', () => {
      // Unflip this card when cursor leaves it
      card.classList.remove('is-flipped');
      isAnyCardFlipped = !!track.querySelector('.treatment-card-item.is-flipped');
    });
  });

  viewport.addEventListener('mouseleave', () => {
    hoveredCard = null;
    isHovered = false;
    // Unflip all cards and re-sync spotlight with current index
    unflipAllCards();
    const normalizedIdx = currentIndex % totalCards;
    track.querySelectorAll('.treatment-card-item').forEach((c, i) => {
      c.classList.toggle('is-active-spotlight', (i % totalCards) === normalizedIdx && !c.classList.contains('is-clone'));
    });
  });

  // Flip Card Logic
  function unflipAllCards() {
    track.querySelectorAll('.treatment-card-item.is-flipped').forEach(card => {
      card.classList.remove('is-flipped');
    });
    isAnyCardFlipped = false;
  }

  // Delegated click handling on track for flip buttons & book appointment buttons
  track.addEventListener('click', (e) => {
    // 1. Flip to back ("Learn more")
    const flipBtn = e.target.closest('.js-flip-card');
    if (flipBtn) {
      e.preventDefault();
      e.stopPropagation();
      const card = flipBtn.closest('.treatment-card-item');
      if (card) {
        // Unflip other cards first
        track.querySelectorAll('.treatment-card-item.is-flipped').forEach(c => {
          if (c !== card) c.classList.remove('is-flipped');
        });
        card.classList.toggle('is-flipped');
        isAnyCardFlipped = card.classList.contains('is-flipped');
      }
      return;
    }

    // 2. Unflip to front ("Back")
    const unflipBtn = e.target.closest('.js-unflip-card');
    if (unflipBtn) {
      e.preventDefault();
      e.stopPropagation();
      const card = unflipBtn.closest('.treatment-card-item');
      if (card) {
        card.classList.remove('is-flipped');
        isAnyCardFlipped = !!track.querySelector('.treatment-card-item.is-flipped');
      }
      return;
    }

    // 3. Book Appointment Button from back face
    const bookBtn = e.target.closest('.js-book-treatment');
    if (bookBtn) {
      e.preventDefault();
      const treatmentName = bookBtn.getAttribute('data-treatment') || '';
      const reasonSelect = document.getElementById('reasonForVisit');
      if (reasonSelect && treatmentName) {
        for (let opt of reasonSelect.options) {
          if (opt.text.toLowerCase().includes(treatmentName.toLowerCase()) || 
              treatmentName.toLowerCase().includes(opt.text.toLowerCase())) {
            reasonSelect.value = opt.value;
            break;
          }
        }
      }

      // Smooth scroll to appointment form
      const appSection = document.getElementById('appointment');
      if (appSection) {
        appSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (reasonSelect) {
            reasonSelect.focus();
            reasonSelect.style.borderColor = 'var(--primary)';
            reasonSelect.style.boxShadow = '0 0 0 4px rgba(200, 35, 51, 0.25)';
            setTimeout(() => {
              reasonSelect.style.borderColor = '';
              reasonSelect.style.boxShadow = '';
            }, 1800);
          }
        }, 600);
      }

      // Flip card back after slight delay
      setTimeout(() => { unflipAllCards(); }, 800);
      return;
    }
  });

  // Auto-play timer
  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      // Only auto-advance if not hovered, and no card is flipped
      if (!isHovered && !isAnyCardFlipped) {
        nextCard();
      }
    }, autoInterval);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  viewport.addEventListener('mouseenter', () => { isHovered = true; });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    isHovered = true;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      unflipAllCards();
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
      restartAutoPlay();
    }
    setTimeout(() => { isHovered = false; }, 1000);
  }, { passive: true });

  window.addEventListener('resize', () => { updateCarousel(true); }, { passive: true });

  // Initial render
  updateCarousel(true);
  startAutoPlay();
}

/**
 * FAQ Accordion Interactive Toggle
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    const content = item.querySelector('.faq-accordion-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-accordion-trigger');
          const otherContent = otherItem.querySelector('.faq-accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isExpanded) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/**
 * FAQ Accordion Interactive Toggle
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    const content = item.querySelector('.faq-accordion-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-accordion-trigger');
          const otherContent = otherItem.querySelector('.faq-accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isExpanded) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}
