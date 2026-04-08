import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Mail, ChevronRight } from "lucide-react";

// ── Data extracted from Position_holders.xlsx ─────────────────────────────
const previousMembersData = {
  2022: [
    { name: "Tridibesh Chattoraj",   position: "Founder",                   email: "tridibeshchattoraj@gmail.com", image: "https://lh3.googlesercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Soutrik Nag",           position: "Founder",                   email: "soutriknag16@gmail.com",       image: "https://lh3.googlusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Arnab Adhikary",        position: "Founder",                   email: "arnabadk16@gmail.com",         image: "https://lh3.googeusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
  ],
  2023: [
    { name: "Bratish Sarkar",        position: "President",        email: "bejume24@gmail.com",            image: "https://lh3.googleuserconent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Aranya Subhra Naskar",  position: "Secretary",        email: "aranyasubhra118@gmail.com",     image: "https://lh3.googleusercotent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Himopravo Chowdhury",   position: "Technical Lead",   email: "himopravo9@gmail.com",          image: "https://lh3.googleusercntent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Swapnil Mahapatra",     position: "Management Lead",  email: "mhpneel2002@gmail.com",         image: "https://lh3.googleuserontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Koustav Das",           position: "WC Member",        email: "das.koustav5432@gmail.com",     image: "https://lh3.googleusecontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Dvij Dewan",            position: "WC Member",        email: "dvij.dewan@tegaindustries.com", image: "https://lh3.googleusrcontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Mrinmay Tarafdar",      position: "WC Member",        email: "",                              image: "https://lh3.googleercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Navoneel Karmakar",     position: "WC Member",        email: "navoneelk@gmail.com",           image: "https://lh3.googlusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Srija Mondal",          position: "WC Member",        email: "Srija.mondal282@gmail.com",                              image: "https://lh3.googeusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Aditya Mandal",         position: "WC Member",        email: "adimandal005@gmail.com",        image: "https://lh3.gooleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
  ],
  2024: [
    
    { name: "Himopravo Chowdhury",   position: "President",                 email: "himopravo9@gmail.com",         image: "https://lh3.googleusercontent.com/d/1Q1xCFjW6QLfOmOZAE5veEmSG8-eBu8bD" },
    { name: "Amrita Dasgupta",       position: "Vice President",            email: "amritadasgupta04@gmail.com",   image: "https://lh3.googleusercntent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Srija Mondal",          position: "Convenor",                  email: "Srija.mondal282@gmail.com",                             image: "https://lh3.googleusercntent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Navoneel Karmakar",     position: "Technical Lead",            email: "navoneelk@gmail.com",          image: "https://lh3.googleuserontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Koustav Das",           position: "Management Lead",           email: "das.koustav5432@gmail.com",    image: "https://lh3.googleusecontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Aditya Mandal",         position: "Tools & Equipment Manager", email: "adimandal005@gmail.com",       image: "https://lh3.googleusrcontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Soumyadeep Mandal",     position: "Technical Advisor",         email: "",                             image: "https://lh3.googleercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Suman Sowmondal",       position: "OC Member",                 email: "sumansowmondal26@gmail.com",   image: "https://lh3.googlusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Debadrita Hazra",       position: "OC Member",                 email: "debadritahazra007@gmail.com",  image: "https://lh3.googeusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Soumyojit Biswas",      position: "OC Member",                 email: "",                             image: "https://lh3.gooleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Samriddha Chakraborty", position: "OC Member",                 email: "",                             image: "https://lh3.gogleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Arijit Bose",           position: "OC Member",                 email: "arijitbose205@gmail.com",      image: "https://lh3.gogleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
  ],
  2025: [
    { name: "Navoneel Karmakar",     position: "President",                        email: "navoneelk@gmail.com",         image: "" },
    { name: "Koustav Das",           position: "Vice President",                   email: "das.koustav5432@gmail.com",   image: "" },
    { name: "Aditya Mandal",         position: "Convenor",                         email: "adimandal005@gmail.com",      image: "" },
    { name: "Sayan Laha",            position: "Technical Lead (Circuital)",       email: "sayanlaha47@gmail.com",       image: "" },
    { name: "Prothoma Dutta",        position: "Technical Lead (Structural)",      email: "",                            image: "" },
    { name: "Debadrita Hazra",       position: "Management Lead",                  email: "debadritahazra007@gmail.com", image: "https://lh3.googleusercontent.com/d/1hiXz0ayopCtKPtpe6KH0QCzKV6ah2tnh" },
    { name: "Naman Ray",             position: "Sponsorship Lead",                 email: "",                            image: "" },
    { name: "Soumyojit Biswas",      position: "OC Member (Tools Management)",     email: "",                            image: "" },
    { name: "Soham Sharma Sarkar",   position: "OC Member (Tools Management)",     email: "",                            image: "" },
    { name: "Samriddha Chakraborty", position: "OC Member (Event Management)",     email: "",                            image: "" },
    { name: "Avipso Sinha",          position: "OC Member (Event Management)",     email: "",                            image: "https://lh3.googleusercontent.com/d/1GQB6y79CTy4XlgHusoWkBWHN9-HHOewp" },
    { name: "Kaulik Das",            position: "OC Member (Social Media Handle)",  email: "kaulikdas2017@gmail.com",     image: "https://lh3.googleusercontent.com/d/19yWbDgPIVC_wTGK0VR7zTN04OSX1oBcA" },
    { name: "Shayan Charan",         position: "OC Member (Social Media Handle)",  email: "",                            image: "https://lh3.googleusercontent.com/d/10jL0tldi5A9sgVpN6IrzTmvaTz5XJa-8" },
  ],
};

const YEARS = [2022,2023, 2024, 2025];

// ── Row animation ──────────────────────────────────────────────────────────
const rowVariants = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" } }),
};

// ── Main Dialog Component ──────────────────────────────────────────────────
export default function PreviousMembers() {
  const [open, setOpen]         = useState(false);
  const [activeYear, setYear]   = useState(2025);
  const members                 = previousMembersData[activeYear] ?? [];

  return (
    <>
      {/* ── Trigger Button ── */}
      <motion.button
        onClick={() => setOpen(true)}
        className="pm-trigger"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Users size={20} />
        <span>Our Previous OC Members</span>
        <ChevronRight size={16} className="pm-chevron" />
      </motion.button>

      {/* ── Backdrop + Dialog ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="pm-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Centering wrapper */}
            <div className="pm-dialog-wrapper">
              <motion.div
                className="pm-dialog"
                initial={{ opacity: 0, scale: 0.92, y: 32 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                exit={{   opacity: 0, scale: 0.92, y: 32  }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                {/* Header */}
                <div className="pm-header">
                  <div className="pm-header-left">
                    <span className="pm-header-icon"><Users size={18} /></span>
                    <h2 className="pm-title">Previous Members</h2>
                  </div>
                  <motion.button
                    className="pm-close"
                    onClick={() => setOpen(false)}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                {/* Year Tabs */}
                <div className="pm-tabs">
                  {YEARS.map((yr) => (
                    <button
                      key={yr}
                      className={`pm-tab ${activeYear === yr ? "pm-tab--active" : ""}`}
                      onClick={() => setYear(yr)}
                    >
                      {yr}
                      {activeYear === yr && (
                        <motion.div className="pm-tab-underline" layoutId="tab-underline" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Table */}
                <div className="pm-table-wrap">
                  <table className="pm-table">
                    <thead>
                      <tr>
                        <th className="pm-th pm-th--num">#</th>
                        <th className="pm-th pm-th--pic">Photo</th>
                        <th className="pm-th">Name</th>
                        <th className="pm-th">Position</th>
                        <th className="pm-th">Email</th>
                      </tr>
                    </thead>
                    <AnimatePresence mode="wait">
                      <motion.tbody
                        key={activeYear}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{   opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {members.map((m, i) => (
                          <motion.tr
                            key={m.name + i}
                            className="pm-row"
                            custom={i}
                            variants={rowVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <td className="pm-td pm-td--num">{i + 1}</td>
                            <td className="pm-td pm-td--pic">
                              <img src={m.image} alt={m.name} className="pm-avatar" />
                            </td>
                            <td className="pm-td pm-td--name">{m.name}</td>
                            <td className="pm-td pm-td--position">{m.position}</td>
                            <td className="pm-td pm-td--email">
                              {m.email ? (
                                <a href={`mailto:${m.email}`} className="pm-email-link">
                                  <Mail size={13} className="pm-email-icon" />
                                  {m.email}
                                </a>
                              ) : (
                                <span className="pm-no-email">—</span>
                              )}
                            </td>
                          </motion.tr>
                        ))}

                        {members.length === 0 && (
                          <tr>
                            <td colSpan={5} className="pm-empty">No records for {activeYear}.</td>
                          </tr>
                        )}
                      </motion.tbody>
                    </AnimatePresence>
                  </table>
                </div>

                {/* Footer */}
                <div className="pm-footer">
                  {members.length} member{members.length !== 1 ? "s" : ""} in {activeYear}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── Scoped styles ── */}
      <style>{`
        /* ---------- trigger ---------- */
        .pm-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 48px auto 0;
          padding: 16px 36px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(249,115,22,0.45);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
        }
        .pm-trigger::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          pointer-events: none;
        }
        .pm-chevron { transition: transform 0.2s; }
        .pm-trigger:hover .pm-chevron { transform: translateX(4px); }

        /* ---------- backdrop ---------- */
        .pm-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 50;
        }

        /* ---------- centering wrapper ---------- */
        .pm-dialog-wrapper {
          position: fixed;
          inset: 0;
          z-index: 51;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        /* ---------- dialog ---------- */
        .pm-dialog {
          pointer-events: all;
          width: min(90vw, 900px);
          max-height: 88vh;
          background: #0f172a;
          border: 1px solid rgba(249,115,22,0.25);
          border-radius: 18px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: system-ui, sans-serif;
          color: #e2e8f0;
        }

        /* ---------- header ---------- */
        .pm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(180deg, rgba(249,115,22,0.08) 0%, transparent 100%);
        }
        .pm-header-left { display: flex; align-items: center; gap: 10px; }
        .pm-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          background: rgba(249,115,22,0.18);
          border-radius: 8px;
          color: #f97316;
        }
        .pm-title {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          background: linear-gradient(90deg, #fff 40%, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pm-close {
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .pm-close:hover { background: rgba(239,68,68,0.18); color: #ef4444; }

        /* ---------- tabs ---------- */
        .pm-tabs {
          display: flex;
          gap: 4px;
          padding: 12px 24px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pm-tab {
          position: relative;
          padding: 8px 22px 12px;
          background: none;
          border: none;
          border-radius: 8px 8px 0 0;
          color: #64748b;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
          letter-spacing: 0.03em;
        }
        .pm-tab:hover { color: #f97316; }
        .pm-tab--active { color: #f97316; }
        .pm-tab-underline {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2.5px;
          background: #f97316;
          border-radius: 2px 2px 0 0;
        }

        /* ---------- table ---------- */
        .pm-table-wrap {
          overflow-y: auto;
          flex: 1;
          padding: 0 24px;
          scrollbar-width: thin;
          scrollbar-color: rgba(249,115,22,0.4) transparent;
        }
        .pm-table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }
        .pm-th {
          text-align: left;
          padding: 10px 14px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .pm-th--num { width: 40px; text-align: center; }
        .pm-th--pic { width: 68px; }

        .pm-row {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s;
        }
        .pm-row:hover { background: rgba(249,115,22,0.06); }
        .pm-row:last-child { border-bottom: none; }

        .pm-td {
          padding: 12px 14px;
          font-size: 0.9rem;
          vertical-align: middle;
        }
        .pm-td--num { text-align: center; color: #475569; font-size: 0.8rem; }
        .pm-td--pic { padding: 8px 14px; }
        .pm-td--name { font-weight: 600; color: #f1f5f9; }
        .pm-td--position {
          color: #f97316;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .pm-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(249,115,22,0.3);
        }
        .pm-email-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .pm-email-link:hover { color: #f97316; }
        .pm-email-icon { flex-shrink: 0; opacity: 0.7; }
        .pm-no-email { color: #334155; font-size: 0.85rem; }

        .pm-empty {
          text-align: center;
          padding: 40px;
          color: #475569;
          font-style: italic;
        }

        /* ---------- footer ---------- */
        .pm-footer {
          padding: 12px 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
          font-size: 0.78rem;
          color: #475569;
          text-align: right;
          background: rgba(0,0,0,0.2);
        }

        /* ---------- scrollbar ---------- */
        .pm-table-wrap::-webkit-scrollbar { width: 5px; }
        .pm-table-wrap::-webkit-scrollbar-track { background: transparent; }
        .pm-table-wrap::-webkit-scrollbar-thumb { background: rgba(249,115,22,0.35); border-radius: 4px; }
      `}</style>
    </>
  );
}
