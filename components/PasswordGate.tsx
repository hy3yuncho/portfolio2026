"use client";

import { useState, useEffect, useRef } from "react";
import { Lock } from "lucide-react";

interface PasswordGateProps {
  /** The case slug — used as the localStorage key and sent to the API */
  project: string;
  children: React.ReactNode;
}

const STORAGE_KEY_PREFIX = "nda_unlock_";
// 7 days in ms — auto-expire the localStorage entry
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

function isStoredUnlocked(project: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${project}`);
    if (!raw) return false;
    const { expires } = JSON.parse(raw) as { expires: number };
    if (Date.now() > expires) {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}${project}`);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function storeUnlocked(project: string) {
  localStorage.setItem(
    `${STORAGE_KEY_PREFIX}${project}`,
    JSON.stringify({ expires: Date.now() + EXPIRY_MS })
  );
}

export default function PasswordGate({ project, children }: PasswordGateProps) {
  // Start as null (unknown) to avoid hydration flash; resolved after mount
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUnlocked(isStoredUnlocked(project));
  }, [project]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, project }),
      });

      if (res.ok) {
        storeUnlocked(project);
        setUnlocked(true);
      } else {
        setError("Wrong password. Reach out and I'll send it over.");
        setPassword("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Before hydration or when unlocked, render content directly
  if (unlocked === null || unlocked === true) {
    return <>{children}</>;
  }

  // Locked state: blur content + show inline gate overlay
  return (
    <div style={{ position: "relative" }}>
      {/* Blurred content underneath */}
      <div
        aria-hidden="true"
        style={{
          filter: "blur(10px) brightness(0.97)",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {children}
      </div>

      {/* Gradient fade at the top — softens the transition from visible to blurred */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, #FEFEFC 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Password gate card — sticky so it stays visible when scrolling */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            maxWidth: 420,
            background: "#FEFEFC",
            border: "1px solid #E5E5E5",
            borderRadius: 12,
            padding: "36px 40px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background: "#F1F2F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Lock size={18} color="#666666" />
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 500,
                fontStyle: "italic",
                fontFamily: "var(--font-ibm-plex-serif)",
                color: "#141412",
                lineHeight: 1.35,
              }}
            >
              The rest is under NDA.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 300,
                fontFamily: "var(--font-dm-sans)",
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              Enter the password to read the full process, or{" "}
              <a
                href="mailto:hy3yun.cho@gmail.com"
                style={{ color: "#57423F", textDecoration: "underline" }}
              >
                email me
              </a>{" "}
              and I&apos;ll send it over.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setValue(e, setPassword, setError)}
              placeholder="Password"
              autoComplete="current-password"
              disabled={loading}
              style={{
                width: "100%",
                height: 44,
                padding: "0 14px",
                fontSize: 14,
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                color: "#141412",
                background: "#FEFEFC",
                border: `1px solid ${error ? "#E53935" : "#D9D9D9"}`,
                borderRadius: 4,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => {
                if (!error) e.target.style.borderColor = "#6558FE";
              }}
              onBlur={(e) => {
                if (!error) e.target.style.borderColor = error ? "#E53935" : "#D9D9D9";
              }}
            />

            {error && (
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  color: "#E53935",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password.trim()}
              style={{
                height: 44,
                padding: "0 20px",
                fontSize: 14,
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                color: loading || !password.trim() ? "#969696" : "#141412",
                background: loading || !password.trim() ? "#F1F2F3" : "#E5E5E5",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                width: "100%",
              }}
            >
              {loading ? "Checking…" : "Unlock"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper to clear error on typing
function setValue(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: (v: string) => void,
  clearError: (v: string) => void
) {
  setter(e.target.value);
  clearError("");
}
