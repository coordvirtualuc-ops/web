"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function WelcomeMascot() {
  const [isVisible, setIsVisible]   = useState(false)
  const [isMounted, setIsMounted]   = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const mainButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("uc-welcome-seen")
    if (!hasSeen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
      const t = setTimeout(() => setIsMounted(true), 50)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (isVisible && isMounted) {
      const t = setTimeout(() => mainButtonRef.current?.focus(), 100)
      return () => clearTimeout(t)
    }
  }, [isVisible, isMounted])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)
    const h = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener("change", h)
    return () => mq.removeEventListener("change", h)
  }, [])

  const handleClose = () => {
    setIsMounted(false)
    document.body.style.overflow = ""
    sessionStorage.setItem("uc-welcome-seen", "true")
    setTimeout(() => setIsVisible(false), 500)
  }

  useEffect(() => {
    if (!isVisible || !isMounted) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isVisible, isMounted])

  if (!isVisible) return null

  const anim = prefersReducedMotion ? "none" : undefined

  return (
    <>
      <style>{`
        /* ── Reset base ── */
        .ucw *, .ucw *::before, .ucw *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Wrapper fullscreen ── */
        .ucw {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 9999;
          overflow: hidden;
          background: #8c002a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        /* ── Diagonal oscura — fondo decorativo ── */
        .ucw-diagonal {
          position: absolute;
          inset: 0;
          background: #1a0509;
          clip-path: polygon(62% 0, 100% 0, 100% 100%, 82% 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* ── Título GIGANTE de fondo — detrás de la mascota ── */
        .ucw-bg-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -56%);
          /* Full screen width — se corta en los bordes intencionalmente */
          font-size: clamp(120px, 22vw, 320px);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 0.88;
          color: rgba(255,255,255,0.06);
          white-space: nowrap;
          z-index: 2;
          pointer-events: none;
          user-select: none;
          text-align: center;
          /* Asegura que desborde sin crear scroll */
          width: max-content;
          animation: ${anim ?? "ucBgTitleIn 1200ms cubic-bezier(0.16,1,0.3,1) 100ms both"};
        }

        /* ── Logo top-center ── */
        .ucw-logo-wrap {
          position: relative;
          z-index: 30;
          margin-top: clamp(20px, 4vh, 36px);
          width: clamp(80px, 9vw, 120px);
          aspect-ratio: 3.6 / 1;
          flex-shrink: 0;
          animation: ${anim ?? "ucFadeIn 600ms ease 200ms both"};
        }

        /* ── Saltar — top right absolute ── */
        .ucw-skip {
          position: absolute;
          top: clamp(18px, 3.5vh, 32px);
          right: clamp(20px, 3.5vw, 44px);
          z-index: 30;
          font-size: clamp(10px, 0.9vw, 12px);
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
          animation: ${anim ?? "ucFadeIn 600ms ease 200ms both"};
        }
        .ucw-skip:hover { color: white; }

        /* ── Mascota ── */
        .ucw-mascot {
          position: relative;
          z-index: 10;
          width: clamp(300px, 52vw, 640px);
          height: clamp(340px, 62vh, 680px);
          flex-shrink: 0;
          margin-top: clamp(-12px, -1.5vh, 0px);
          animation: ${anim ?? "ucMascotIn 1000ms cubic-bezier(0.16,1,0.3,1) 300ms both"};
          filter: drop-shadow(0 30px 50px rgba(0,0,0,0.4));
        }

        /* ── Bloque de texto hero — centrado debajo ── */
        .ucw-hero {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 clamp(20px, 5vw, 60px);
          /* Espacio entre mascota y texto */
          margin-top: clamp(4px, 1vh, 12px);
          flex-shrink: 0;
          animation: ${anim ?? "ucFadeUp 700ms cubic-bezier(0.16,1,0.3,1) 550ms both"};
        }

        .ucw-eyebrow {
          font-size: clamp(9px, 0.75vw, 11px);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: clamp(8px, 1vh, 12px);
        }

        .ucw-h1 {
          font-size: clamp(1.6rem, 3vw, 3rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: white;
          text-transform: uppercase;
          margin-bottom: clamp(6px, 1vh, 10px);
        }

        .ucw-subtitle {
          font-size: clamp(11px, 1vw, 14px);
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          margin-bottom: clamp(18px, 2.5vh, 28px);
        }

        .ucw-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: clamp(12px, 1.6vh, 16px) clamp(28px, 2.5vw, 40px);
          font-size: clamp(11px, 0.9vw, 13px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8c002a;
          background: white;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0,0,0,0.28);
          transition: transform 0.22s, box-shadow 0.22s;
          white-space: nowrap;
        }
        .ucw-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.36);
        }
        .ucw-cta-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: #8c002a;
          color: white;
          font-size: 13px;
          flex-shrink: 0;
        }

        /* ── Keyframes ── */
        @keyframes ucFadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes ucFadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ucMascotIn {
          from { opacity:0; transform:translateY(40px) scale(0.92); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes ucBgTitleIn {
          from { opacity:0; }
          to   { opacity:1; }
        }

        /* ════════════════════════════════════════
           DESKTOP (≥768px)
           — búho domina la pantalla, layout centrado
        ════════════════════════════════════════ */
        @media (min-width: 768px) {
          .ucw {
            justify-content: center !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .ucw-logo-wrap {
            position: absolute !important;
            top: clamp(20px, 3.5vh, 36px) !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin-top: 0 !important;
          }
          .ucw-mascot {
            /* aspect-ratio 1:1 con altura dominante — Image fill necesita w+h explícitos */
            width: 55vh;
            height: 55vh;
            max-width: clamp(360px, 45vw, 620px);
            max-height: clamp(360px, 45vw, 620px);
            margin-top: 0;
            flex-shrink: 0;
          }
          .ucw-hero {
            margin-top: clamp(6px, 1vh, 14px);
          }
          .ucw-bg-title {
            top: 46% !important;
            transform: translate(-50%, -50%) !important;
          }
        }

        /* ════════════════════════════════════════
           PANTALLA GRANDE (≥1440px)
        ════════════════════════════════════════ */
        @media (min-width: 1440px) {
          .ucw-mascot {
            width: 58vh !important;
            height: 58vh !important;
            max-width: 680px !important;
            max-height: 680px !important;
          }
          .ucw-bg-title {
            font-size: 300px !important;
          }
          .ucw-h1 {
            font-size: 2.8rem !important;
          }
        }

        /* ════════════════════════════════════════
           MÓVIL (< 768px)
        ════════════════════════════════════════ */
        @media (max-width: 767px) {
          .ucw-diagonal {
            clip-path: polygon(45% 0, 100% 0, 100% 100%, 72% 100%) !important;
          }
          .ucw-bg-title {
            font-size: clamp(80px, 24vw, 140px) !important;
            transform: translate(-50%, -52%) !important;
          }
          .ucw-mascot {
            width: clamp(240px, 80vw, 360px) !important;
            height: clamp(260px, 50vh, 420px) !important;
            margin-top: clamp(-4px, 0px, 4px) !important;
          }
          .ucw-h1 {
            font-size: clamp(1.35rem, 5.5vw, 1.7rem) !important;
          }
          .ucw-hero {
            margin-top: clamp(2px, 0.8vh, 8px) !important;
            padding: 0 clamp(16px, 6vw, 32px) !important;
          }
        }

        /* ════════════════════════════════════════
           MÓVIL PEQUEÑO (altura < 700px)
        ════════════════════════════════════════ */
        @media (max-width: 767px) and (max-height: 700px) {
          .ucw-mascot {
            height: 36vh !important;
          }
          .ucw-eyebrow { display: none !important; }
          .ucw-subtitle { display: none !important; }
          .ucw-h1 { font-size: 1.2rem !important; margin-bottom: 8px !important; }
          .ucw-hero { margin-top: 0 !important; }
        }
      `}</style>

      <div
        className="ucw"
        role="dialog"
        aria-modal="true"
        aria-label="Bienvenida a UC Universidad Continental"
        style={{ opacity: isMounted ? 1 : 0, transition: "opacity 500ms ease" }}
      >
        {/* Fondo diagonal oscuro */}
        <div className="ucw-diagonal" aria-hidden="true" />

        {/* Título gigante de fondo */}
        <div className="ucw-bg-title" aria-hidden="true">
          CONTINENTAL
        </div>

        {/* Logo centrado top */}
        <div className="ucw-logo-wrap">
          <Image
            src="/images/logo.png"
            alt="UC Universidad Continental"
            fill
            priority
            sizes="120px"
            style={{ objectFit:"contain", objectPosition:"center", filter:"brightness(0) invert(1)" }}
          />
        </div>

        {/* Saltar top-right */}
        <button onClick={handleClose} type="button" className="ucw-skip">
          Saltar
        </button>

        {/* Mascota protagonista */}
        <div className="ucw-mascot">
          <Image
            src="/images/brand/mascota-uc.webp"
            alt="Mascota UC Universidad Continental"
            fill
            priority
            sizes="(max-width: 767px) 72vw, 38vw"
            style={{ objectFit:"contain", objectPosition:"bottom center" }}
          />
        </div>

        {/* Texto hero + CTA */}
        <div className="ucw-hero">
          <p className="ucw-eyebrow">#1 Universidad en Nayarit</p>
          <h1 className="ucw-h1">
            Bienvenido a UC<br />Universidad Continental
          </h1>
          <p className="ucw-subtitle">Educación para la humanidad</p>
          <button
            ref={mainButtonRef}
            onClick={handleClose}
            type="button"
            className="ucw-cta"
          >
            Entrar al sitio
            <span className="ucw-cta-arrow" aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </>
  )
}