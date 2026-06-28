"use client";

import { Layout } from "antd";

const { Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer
      style={{
        background: "#0B1437",
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Animated gradient top bar */}
      <div className="footer-top-bar" />

      <style>{`
        .footer-top-bar {
          height: 4px;
          background: linear-gradient(90deg, #4A90D9 0%, #F5A623 50%, #4A90D9 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #8892A4;
          text-decoration: none;
          font-size: 14px;
          padding: 6px 0;
          transition: color 0.18s ease, gap 0.18s ease;
        }
        .footer-link:hover {
          color: #4A90D9;
          gap: 12px;
        }
        .footer-link .arrow {
          font-size: 13px;
          transition: transform 0.18s ease;
          display: inline-block;
        }
        .footer-link:hover .arrow {
          transform: translateX(3px);
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
          text-decoration: none;
          color: #8892A4;
        }
        .footer-social-btn:hover {
          background: rgba(74, 144, 217, 0.15);
          border-color: #4A90D9;
          transform: translateY(-2px);
          color: #4A90D9;
        }

        .footer-contact-icon {
          width: 32px;
          height: 32px;
          background: rgba(74, 144, 217, 0.1);
          border: 1px solid rgba(74, 144, 217, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .footer-status-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid rgba(245, 166, 35, 0.25);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12px;
          color: #F5A623;
          font-weight: 500;
        }
        .footer-pulse-dot {
          width: 7px;
          height: 7px;
          background: #F5A623;
          border-radius: 50%;
          animation: footerPulse 2s ease-in-out infinite;
        }
        @keyframes footerPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.75); }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "48px 32px 32px",
        }}
      >
        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#4A90D9",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              flexShrink: 0,
              boxShadow: "0 0 24px rgba(74,144,217,0.4)",
            }}
          >
            ✦
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.3px" }}>
              Spark Tour &amp; Travels
            </div>
            <div style={{ fontSize: 13, color: "#8892A4", marginTop: 3 }}>
              Crafting journeys, creating memories
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 36 }} />

        {/* Three-column grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 32,
          }}
        >
          {/* ── Column 1: Quick Links ── */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "#F5A623",
                marginBottom: 16,
              }}
            >
              Quick Links
            </div>
            {[
              { label: "Privacy Policy",    href: "/privacy" },
              { label: "User Agreement",    href: "/userAgreement" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Refund Policy",     href: "/refundPolicy" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                <span className="arrow">→</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Column 2: Contact ── */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "#F5A623",
                marginBottom: 16,
              }}
            >
              Contact Us
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
              <div className="footer-contact-icon">📞</div>
              <div style={{ fontSize: 13, color: "#8892A4", lineHeight: 1.7 }}>
                8529299647
                <br />
                8875949835
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
              <div className="footer-contact-icon">✉</div>
              <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                <a
                  href="mailto:gowithspark@gmail.com"
                  style={{ color: "#4A90D9", textDecoration: "none" }}
                >
                  gowithspark@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div className="footer-contact-icon">📍</div>
              <div style={{ fontSize: 13, color: "#8892A4", lineHeight: 1.7 }}>
                Subhash Nagar, near Vitthal Service
                <br />
                Banswara, Rajasthan
              </div>
            </div>
          </div>

         
          <div>
           
      

            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "#F5A623",
                marginBottom: 12,
              }}
            >
              Business Hours
            </div>
            <div style={{ fontSize: 13, color: "#8892A4", lineHeight: 1.9 }}>
              Mon – Sat: 9 AM – 7 PM
              <br />
              Sunday: 10 AM – 4 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom-row"
          style={{
            marginTop: 36,
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#8892A4" }}>
            © 2025 Spark Tour and Travels · All rights reserved
          </div>
          <div className="footer-status-badge">
            <div className="footer-pulse-dot" />
            We&apos;re open now
          </div>
        </div>
      </div>
    </Footer>
  );
}