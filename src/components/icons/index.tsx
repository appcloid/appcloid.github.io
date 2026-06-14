import React from 'react';

// Shared SVG props for glowing thin-line icons
const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-8 h-8 text-cyan drop-shadow-[0_0_8px_rgba(102,252,241,0.5)]"
};

// --- Industry Icons (9) ---
export const IconHealthcare = () => (
  <svg {...iconProps}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
export const IconFinance = () => (
  <svg {...iconProps}><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01M17 12h.01M7 12h.01" /></svg>
);
export const IconRetail = () => (
  <svg {...iconProps}><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
);
export const IconManufacturing = () => (
  <svg {...iconProps}><path d="M2 20V8.5l5-3.5v15M7 15l5-3.5v8.5M12 11l5-3.5v12.5M17 7l5-3.5V20H2z" /></svg>
);
export const IconLogistics = () => (
  <svg {...iconProps}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M6 8h12M6 12h12" /></svg>
);
export const IconRealEstate = () => (
  <svg {...iconProps}><path d="M3 21h18M5 21V5l7-3 7 3v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" /></svg>
);
export const IconEducation = () => (
  <svg {...iconProps}><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" /></svg>
);
export const IconLegal = () => (
  <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
export const IconHospitality = () => (
  <svg {...iconProps}><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" /></svg>
);

// --- AI Services Icons (6) ---
export const IconAIAgents = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
);
export const IconAIVision = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
);
export const IconNlp = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></svg>
);
export const IconPredictive = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><path d="M3 3v18h18M18 9l-5 5-4-4-5 5" /><circle cx="18" cy="9" r="2" /></svg>
);
export const IconAutomation = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
export const IconGenerative = () => (
  <svg {...iconProps} className="w-8 h-8 text-purple drop-shadow-[0_0_8px_rgba(187,134,252,0.5)]"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" /></svg>
);

// --- Traditional Services Icons (5) ---
export const IconWebDev = () => (
  <svg {...iconProps}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 2l-2 20" /></svg>
);
export const IconAppDev = () => (
  <svg {...iconProps}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
);
export const IconCloud = () => (
  <svg {...iconProps}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
);
export const IconData = () => (
  <svg {...iconProps}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
);
export const IconCyber = () => (
  <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
);
