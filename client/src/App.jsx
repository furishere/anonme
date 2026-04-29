import { useState } from "react";

/* ─── Google Fonts ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

    *, *::before, *::after { box-sizing: border-box; }

    body { margin: 0; background: #f0efeb; }

    .font-serif { font-family: 'Instrument Serif', serif; }
    .font-sans  { font-family: 'Geist', sans-serif; }
    .font-mono  { font-family: 'JetBrains Mono', 'Courier New', monospace; }

    .italic { font-style: italic; }

    /* hero grid */
    .hero-grid-bg {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px);
      background-size: 20px 20px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, #000 50%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, #000 50%, transparent 100%);
      opacity: 0.6;
      pointer-events: none;
    }

    /* input styling */
    input, textarea {
      font-family: 'Geist', sans-serif;
      outline: none;
    }
    input:focus, textarea:focus {
      border-color: #000 !important;
    }
    textarea { resize: none; }

    /* transitions */
    .btn-black, .btn-outline, .send-btn, .how-cta, .btn-submit {
      cursor: pointer;
      transition: opacity 0.15s ease, transform 0.12s ease;
    }
    .btn-black:hover, .how-cta:hover, .btn-submit:hover, .send-btn:hover { opacity: 0.85; transform: translateY(-1px); }
    .btn-outline:hover { background: #f5f5f5; }

    .msg-card { transition: box-shadow 0.15s ease; }
    .msg-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.07); }

    .nav-link { transition: color 0.12s; }
    .nav-link:hover { color: #000 !important; }

    .copy-btn { cursor: pointer; transition: background 0.12s; }
    .copy-btn:hover { background: #f0f0f0 !important; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.45s ease both; }
    .fade-up-d1 { animation-delay: 0.08s; }
    .fade-up-d2 { animation-delay: 0.16s; }
    .fade-up-d3 { animation-delay: 0.24s; }
    .fade-up-d4 { animation-delay: 0.32s; }

    @keyframes scalePop {
      from { opacity: 0; transform: scale(0.92); }
      to   { opacity: 1; transform: scale(1); }
    }
    .scale-pop { animation: scalePop 0.4s cubic-bezier(.22,.68,0,1.2) both; }
  `}</style>
);

/* ─── Shared Topbar ─── */
function Topbar({ page, navigate }) {
  const isAuth = page === "signup" || page === "login";
  const isDash = page === "dashboard" || page === "dashboard-empty";
  const isSend = page === "send" || page === "sent";

  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #f0f0f0",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: isSend ? "center" : "space-between",
    }}>
      <span
        className="font-serif italic"
        style={{ fontSize: 18, color: "#000", cursor: "pointer" }}
        onClick={() => navigate("landing")}
      >
        Anon Me.
      </span>

      {page === "landing" && (
        <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span className="nav-link font-sans" style={{ fontSize: 13, color: "#777", cursor: "pointer" }} onClick={() => navigate("landing")}>Home</span>
          <span className="nav-link font-sans" style={{ fontSize: 13, color: "#777", cursor: "pointer" }} onClick={() => navigate("signup")}>Register</span>
          <span className="nav-link font-sans" style={{ fontSize: 13, color: "#777", cursor: "pointer" }} onClick={() => navigate("login")}>Login</span>
        </nav>
      )}

      {isAuth && (
        <span className="font-sans" style={{ fontSize: 13, color: "#aaa" }}>
          {page === "signup"
            ? <>Already have one? <span style={{ color: "#000", textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("login")}>Sign in</span></>
            : <>No account? <span style={{ color: "#000", textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("signup")}>Sign up</span></>
          }
        </span>
      )}

      {isDash && (
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span className="font-sans" style={{ fontSize: 13, color: "#aaa" }}>@harnam</span>
          <span className="font-sans nav-link" style={{ fontSize: 13, color: "#bbb", cursor: "pointer" }} onClick={() => navigate("landing")}>Sign out</span>
        </div>
      )}
    </header>
  );
}

/* ─── LANDING PAGE ─── */
function Landing({ navigate }) {
  return (
    <div className="font-sans" style={{ background: "#fff", minHeight: "100vh" }}>
      <Topbar page="landing" navigate={navigate} />

      {/* Hero */}
      <section style={{ position: "relative", padding: "80px 32px 64px", textAlign: "center", overflow: "hidden", background: "#fff" }}>
        <div className="hero-grid-bg" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#f5f5f5", border: "1px solid #e5e5e5",
            borderRadius: 20, padding: "5px 14px",
            fontSize: 12, color: "#777", marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            Anonymous feedback, done right
          </div>
          <div className="font-serif italic fade-up fade-up-d1" style={{ fontSize: 88, lineHeight: 0.92, color: "#000", marginBottom: 20 }}>
            Anon Me.
          </div>
          <p className="fade-up fade-up-d2" style={{ fontSize: 14, color: "#888", maxWidth: 340, margin: "0 auto 32px", lineHeight: 1.75 }}>
            Collect honest, anonymous feedback from anyone — quick, private, and beautifully simple.
          </p>
          <div className="fade-up fade-up-d3" style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button className="btn-black font-sans" style={{ background: "#000", color: "#fff", padding: "11px 28px", borderRadius: 2, fontSize: 13, border: "none" }} onClick={() => navigate("signup")}>
              Get started free
            </button>
            <button className="btn-outline font-sans" style={{ border: "1px solid #ccc", color: "#000", padding: "11px 28px", borderRadius: 2, fontSize: 13, background: "#fff" }} onClick={() => navigate("login")}>
              Sign in
            </button>
          </div>
        </div>
      </section>

      {/* Dark features section */}
      <section style={{ background: "#000", padding: "56px 32px" }}>
        <h2 className="font-sans" style={{ color: "#fff", fontSize: 24, fontWeight: 300, textAlign: "center", marginBottom: 4 }}>
          Why choose <em className="font-serif italic" style={{ fontWeight: 400 }}>Anon Me.</em>
        </h2>
        <p className="font-sans" style={{ color: "#555", fontSize: 13, textAlign: "center", marginBottom: 36 }}>Simple by design. Honest by nature.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1a1a1a", maxWidth: 720, margin: "0 auto" }}>
          {[
            { icon: "👤", name: "Fully Anonymous", desc: "No names, no identities ever revealed to the recipient." },
            { icon: "🔗", name: "Just One Link",    desc: "Share anywhere. Anyone can send you a message instantly." },
            { icon: "📬", name: "Your Inbox, Private", desc: "Only you can read what you've received. Always." },
          ].map((f) => (
            <div key={f.name} style={{ background: "#000", padding: "28px 20px" }}>
              <div style={{ fontSize: 20, marginBottom: 12 }}>{f.icon}</div>
              <div className="font-sans" style={{ color: "#fff", fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{f.name}</div>
              <div style={{ width: 28, height: 1, background: "#222", marginBottom: 10 }} />
              <div className="font-sans" style={{ color: "#555", fontSize: 12, lineHeight: 1.65 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#fff", padding: "56px 56px" }}>
        <h2 className="font-sans" style={{ fontSize: 20, fontWeight: 300, color: "#000", marginBottom: 36 }}>How it works</h2>
        {[
          { n: "01", title: "Create your account", desc: "Sign up in seconds — just a username and password." },
          { n: "02", title: "Share your link",     desc: "Get your unique link like anonme.app/u/yourname and share it anywhere." },
          { n: "03", title: "Receive messages",    desc: "Anyone can send you an anonymous message. Only you can read them." },
        ].map((s) => (
          <div key={s.n} style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28 }}>
            <span className="font-serif italic" style={{ fontSize: 52, color: "#e5e5e5", lineHeight: 1, flexShrink: 0, width: 56 }}>{s.n}</span>
            <div>
              <div className="font-sans" style={{ fontSize: 14, fontWeight: 500, color: "#000", marginBottom: 4 }}>{s.title}</div>
              <div className="font-sans" style={{ fontSize: 13, color: "#888", lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          </div>
        ))}
        <button className="how-cta font-sans" style={{ marginTop: 16, background: "#000", color: "#fff", padding: "11px 28px", borderRadius: 2, fontSize: 13, border: "none" }} onClick={() => navigate("signup")}>
          Create your profile →
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: "#000", padding: "28px 32px", textAlign: "center" }}>
        <div className="font-serif italic" style={{ color: "#fff", fontSize: 20 }}>Anon Me.</div>
        <div className="font-sans" style={{ color: "#555", fontSize: 12, marginTop: 6 }}>Anonymous feedback, honestly.</div>
      </footer>
    </div>
  );
}

/* ─── AUTH FORM SHELL ─── */
function AuthShell({ page, navigate, children, title, sub }) {
  return (
    <div className="font-sans" style={{ background: "#fff", minHeight: "100vh" }}>
      <Topbar page={page} navigate={navigate} />
      <div style={{ padding: "56px 56px", maxWidth: 480, margin: "0 auto" }}>
        <div className="font-serif italic fade-up" style={{ fontSize: 36, color: "#000", marginBottom: 6 }}>{title}</div>
        <div className="font-sans fade-up fade-up-d1" style={{ fontSize: 13, color: "#aaa", marginBottom: 32 }}>{sub}</div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, hint, type = "text", placeholder, defaultValue, autoFocus }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="font-sans" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, color: "#aaa", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 7 }}>
        <span>{label}</span>
        {hint && <span style={{ textTransform: "none", letterSpacing: 0, fontSize: 10, color: "#ccc" }}>{hint}</span>}
      </div>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoFocus={autoFocus}
        style={{ width: "100%", border: "1px solid #e5e5e5", borderRadius: 2, padding: "11px 14px", fontSize: 13, color: "#333", background: "#fff" }}
      />
    </div>
  );
}

/* ─── SIGNUP ─── */
function Signup({ navigate }) {
  return (
    <AuthShell page="signup" navigate={navigate} title="Create your profile." sub="Get your anonymous inbox in seconds.">
      <Field label="Display name" defaultValue="Harnam Mandal" />
      <Field label="Username" hint="Your link: /u/harnam" defaultValue="harnam" autoFocus />
      <Field label="Email" type="email" placeholder="you@example.com" />
      <Field label="Password" type="password" placeholder="Min. 8 characters" />
      <button
        className="btn-submit font-sans"
        style={{ width: "100%", background: "#000", color: "#fff", padding: 13, borderRadius: 2, fontSize: 13, border: "none", marginTop: 8 }}
        onClick={() => navigate("dashboard")}
      >
        Create account →
      </button>
      <div className="font-sans" style={{ fontSize: 11, color: "#ccc", textAlign: "center", marginTop: 24, paddingTop: 20, borderTop: "1px solid #f5f5f5" }}>
        By signing up you agree to our terms. No spam, ever.
      </div>
    </AuthShell>
  );
}

/* ─── LOGIN ─── */
function Login({ navigate }) {
  return (
    <AuthShell page="login" navigate={navigate} title="Welcome back." sub="Sign in to your inbox.">
      <Field label="Username" defaultValue="harnam" autoFocus />
      <Field label="Password" type="password" defaultValue="••••••••" />
      <button
        className="btn-submit font-sans"
        style={{ width: "100%", background: "#000", color: "#fff", padding: 13, borderRadius: 2, fontSize: 13, border: "none", marginTop: 8 }}
        onClick={() => navigate("dashboard")}
      >
        Sign in →
      </button>
      <div className="font-sans" style={{ fontSize: 11, color: "#ccc", textAlign: "center", marginTop: 24, paddingTop: 20, borderTop: "1px solid #f5f5f5" }}>
        Your messages are end-to-end private. We never read them.
      </div>
    </AuthShell>
  );
}

/* ─── DASHBOARD ─── */
function Dashboard({ hasMessages, navigate }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const messages = [
    { text: "Your UI work is genuinely impressive. The attention to detail in spacing and typography really shows — keep it up.", time: "2h ago" },
    { text: "Honestly your code is clean but you need to write more comments. It's hard to follow sometimes when jumping into a file cold.", time: "5h ago" },
    { text: "Love the portfolio project! The dark editorial aesthetic is very you.", time: "1d ago" },
  ];

  return (
    <div className="font-sans" style={{ background: "#f7f7f5", minHeight: "100vh" }}>
      <Topbar page="dashboard" navigate={navigate} />
      <div className="font-sans" style={{ borderBottom: "1px solid #f0f0f0", padding: "8px 24px", fontSize: 11, color: "#bbb", background: "#fff", fontFamily: "monospace" }}>
        anonme.app / <span style={{ color: "#666" }}>dashboard</span>
      </div>

      <div style={{ padding: "28px 24px", maxWidth: 680, margin: "0 auto" }}>
        {/* Link card */}
        <div className="fade-up" style={{ background: "#000", borderRadius: 4, padding: "28px 24px", marginBottom: 24 }}>
          <div className="font-serif italic" style={{ color: "#fff", fontSize: 20, marginBottom: 5 }}>Your anonymous link</div>
          <div className="font-sans" style={{ color: "#555", fontSize: 12, marginBottom: 18 }}>Share this anywhere — anyone can send you a message anonymously.</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <div className="font-mono" style={{ flex: 1, background: "#111", border: "1px solid #222", borderRadius: 2, padding: "10px 14px", fontSize: 12, color: "#777", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              anonme.app/u/harnam
            </div>
            <button className="copy-btn font-sans" style={{ background: "#fff", color: "#000", borderRadius: 2, padding: "10px 18px", fontSize: 12, border: "none", whiteSpace: "nowrap" }} onClick={handleCopy}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="font-sans" style={{ border: "1px solid #1a1a1a", color: "#666", borderRadius: 2, padding: "7px 14px", fontSize: 11, background: "transparent", cursor: "pointer" }}>Share on Twitter / X</button>
            <button className="font-sans" style={{ border: "1px solid #1a1a1a", color: "#666", borderRadius: 2, padding: "7px 14px", fontSize: 11, background: "transparent", cursor: "pointer" }}>Share on WhatsApp</button>
          </div>
        </div>

        {/* Inbox */}
        <div className="fade-up fade-up-d1" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div className="font-sans" style={{ fontSize: 13, fontWeight: 500, color: "#000" }}>
            Inbox {hasMessages && <span style={{ color: "#bbb", fontWeight: 400 }}>3</span>}
          </div>
          <button className="font-sans" style={{ fontSize: 11, color: "#bbb", background: "none", border: "none", cursor: "pointer" }}>Refresh</button>
        </div>

        {hasMessages ? (
          messages.map((m, i) => (
            <div key={i} className={`msg-card fade-up fade-up-d${i + 1}`} style={{ background: "#fff", border: "1px solid #ebebeb", borderRadius: 2, padding: 18, marginBottom: 8 }}>
              <div className="font-sans" style={{ fontSize: 13, color: "#222", lineHeight: 1.65, marginBottom: 10 }}>{m.text}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="font-sans" style={{ fontSize: 11, color: "#bbb" }}>{m.time}</span>
                <span className="font-sans" style={{ fontSize: 11, color: "#ddd", cursor: "pointer" }}>Delete</span>
              </div>
            </div>
          ))
        ) : (
          <div className="fade-up fade-up-d2" style={{ border: "1px dashed #e0e0e0", borderRadius: 4, padding: "56px 32px", textAlign: "center", background: "#fff" }}>
            <div className="font-serif italic" style={{ fontSize: 28, color: "#ddd", marginBottom: 8 }}>No messages yet.</div>
            <div className="font-sans" style={{ fontSize: 12, color: "#bbb" }}>Share your link and messages will appear here.</div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── SEND PAGE ─── */
function Send({ navigate }) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="font-sans" style={{ background: "#f7f7f5", minHeight: "100vh" }}>
        <Topbar page="sent" navigate={navigate} />
        <div style={{ padding: "48px 24px", display: "flex", justifyContent: "center" }}>
          <div className="scale-pop" style={{ background: "#fff", border: "1px solid #ebebeb", borderRadius: 4, padding: "56px 32px", width: "100%", maxWidth: 360, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>✉️</div>
            <div className="font-serif italic" style={{ fontSize: 26, color: "#000", marginBottom: 8 }}>Sent!</div>
            <div className="font-sans" style={{ fontSize: 13, color: "#888", marginBottom: 24, lineHeight: 1.65 }}>
              Your message was delivered anonymously.<br />They'll never know it was you.
            </div>
            <button className="font-sans" style={{ fontSize: 13, color: "#000", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }} onClick={() => setSent(false)}>
              Send another
            </button>
          </div>
        </div>
        <div className="font-sans" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: 16, textAlign: "center", fontSize: 12, color: "#bbb", cursor: "pointer" }} onClick={() => navigate("signup")}>
          Get your own anonymous inbox →
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans" style={{ background: "#f7f7f5", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Topbar page="send" navigate={navigate} />
      <div style={{ flex: 1, padding: "48px 24px", display: "flex", justifyContent: "center" }}>
        <div className="fade-up" style={{ background: "#fff", border: "1px solid #ebebeb", borderRadius: 4, padding: "32px 28px", width: "100%", maxWidth: 360, textAlign: "center" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#000", color: "#fff", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>H</div>
          <div className="font-serif italic" style={{ fontSize: 26, color: "#000", marginBottom: 3 }}>Harnam Mandal</div>
          <div className="font-sans" style={{ fontSize: 12, color: "#bbb", marginBottom: 22 }}>@harnam</div>
          <div className="font-sans" style={{ fontSize: 13, color: "#666", marginBottom: 14 }}>
            Send <strong style={{ color: "#000" }}>@harnam</strong> an anonymous message
          </div>
          <textarea
            rows={4}
            placeholder="Write something honest…"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
            style={{ width: "100%", border: "1px solid #e5e5e5", borderRadius: 2, padding: "12px 14px", fontSize: 13, color: "#333", lineHeight: 1.6 }}
          />
          <div className="font-sans" style={{ textAlign: "right", fontSize: 11, color: "#ddd", marginTop: 5, marginBottom: 14 }}>{text.length} / 500</div>
          <button
            className="send-btn font-sans"
            style={{ width: "100%", background: "#000", color: "#fff", padding: 13, borderRadius: 2, fontSize: 13, border: "none" }}
            onClick={() => text.trim() && setSent(true)}
          >
            Send anonymously →
          </button>
          <div className="font-sans" style={{ fontSize: 11, color: "#bbb", marginTop: 12 }}>100% anonymous. Your identity is never shared.</div>
        </div>
      </div>
      <div className="font-sans" style={{ background: "#fff", borderTop: "1px solid #f0f0f0", padding: 16, textAlign: "center", fontSize: 12, color: "#bbb", cursor: "pointer" }} onClick={() => navigate("signup")}>
        Get your own anonymous inbox →
      </div>
    </div>
  );
}

/* ─── BOTTOM NAV (page switcher) ─── */
function PageNav({ page, navigate }) {
  const pages = [
    { id: "landing",          label: "Landing" },
    { id: "signup",           label: "Sign Up" },
    { id: "login",            label: "Log In" },
    { id: "dashboard",        label: "Inbox" },
    { id: "dashboard-empty",  label: "Empty Inbox" },
    { id: "send",             label: "Send Msg" },
  ];

  return (
    <div style={{
      position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)",
      borderRadius: 40, padding: "8px 12px",
      display: "flex", gap: 4, zIndex: 999,
      boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
    }}>
      {pages.map((p) => (
        <button
          key={p.id}
          onClick={() => navigate(p.id)}
          className="font-sans"
          style={{
            background: page === p.id ? "#fff" : "transparent",
            color: page === p.id ? "#000" : "#777",
            border: "none",
            borderRadius: 32,
            padding: "6px 14px",
            fontSize: 11,
            cursor: "pointer",
            transition: "all 0.15s ease",
            whiteSpace: "nowrap",
          }}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}

/* ─── ROOT APP ─── */
export default function App() {
  const [page, setPage] = useState("landing");

  function navigate(p) { setPage(p); window.scrollTo(0, 0); }

  return (
    <>
      <FontLink />
      {page === "landing"         && <Landing navigate={navigate} />}
      {page === "signup"          && <Signup navigate={navigate} />}
      {page === "login"           && <Login navigate={navigate} />}
      {page === "dashboard"       && <Dashboard hasMessages={true} navigate={navigate} />}
      {page === "dashboard-empty" && <Dashboard hasMessages={false} navigate={navigate} />}
      {(page === "send" || page === "sent") && <Send navigate={navigate} />}
      <PageNav page={page} navigate={navigate} />
    </>
  );
}
