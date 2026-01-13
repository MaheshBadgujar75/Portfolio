import React from 'react';

export const IconProps = {
    size: 24,
    className: '',
    strokeWidth: 1.5,
};

type Props = {
    size?: number;
    className?: string;
    strokeWidth?: number;
};

// --- NAVIGATION & UI ---

export const Menu: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M3 8H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M9 16H21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const X: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const ArrowRight: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 12H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const ArrowUpRight: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const ArrowUp: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 20V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M5 11L12 4L19 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const ExternalLink: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M14 5H19V10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M10 14L19 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Check: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const CheckCircle: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M16 9L10.5 14.5L8 12" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Download: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M12 15V3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Copy: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Clock: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Sun: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M12 2V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M12 20V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M2 12H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M20 12H22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
);

export const Moon: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 3C10.824 3 9.64778 3.23413 8.56135 3.68417C7.47492 4.13421 6.49963 4.79124 5.66802 5.62285C4.83641 6.45446 4.17938 7.42975 3.72934 8.51618C3.2793 9.60261 3.04516 10.7788 3.04516 11.9548C3.04516 13.1308 3.2793 14.307 3.72934 15.3935C4.17938 16.4799 4.83641 17.4552 5.66802 18.2868C6.49963 19.1184 7.47492 19.7754 8.56135 20.2255C9.64778 20.6755 10.824 20.9097 12 20.9097C13.176 20.9097 14.3522 20.6755 15.4387 20.2255C16.5251 19.7754 17.5004 19.1184 18.332 18.2868C19.1636 17.4552 19.8206 16.4799 20.2707 15.3935C20.7207 14.307 20.9548 13.1308 20.9548 11.9548C20.9548 11.751 20.9478 11.5478 20.934 11.3458C20.12 11.7686 19.18 12.0001 18.1818 12.0001C15.6559 12.0001 13.3168 10.5986 12.1818 8.45465C12.1818 8.45465 12.1818 8.45465 12.1818 8.45465C12.0645 8.2323 11.9555 8.00554 11.8549 7.77458C11.3149 6.53676 11.1818 5.14327 11.5458 3.81805C11.6918 3.28453 11.8795 2.77123 12.1009 2.28581C12.0673 2.28859 12.0337 2.29139 12.0001 2.29421C12 2.52926 12 2.76451 12 3Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

// --- SOCIALS ---

export const Github: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9 19C9 19 9.034 16 12 16C14.966 16 15 19 15 19" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <rect x="2" y="3" width="20" height="18" rx="5" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M8 3V7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M16 3V7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M8 11H16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Linkedin: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <rect x="2" y="3" width="4" height="4" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
);

export const Mail: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Phone: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5902 20.9046 21.7336 20.6411 21.8228C20.3775 21.912 20.0987 21.9452 19.823 21.92C16.7663 21.5857 13.812 20.5362 11.19 18.84C8.71761 17.218 6.5709 15.0713 4.94999 12.5999C3.25145 9.97573 2.20126 7.01901 1.87001 3.96001C1.84478 3.68417 1.87807 3.40523 1.96767 3.14164C2.05727 2.87806 2.20115 2.63584 2.38977 2.43085C2.57839 2.22587 2.80749 2.06283 3.06213 1.95234C3.31677 1.84185 3.59118 1.78643 3.86999 1.78999H6.86999C7.35513 1.78513 7.82479 1.96058 8.19236 2.28387C8.55993 2.60715 8.80058 3.05608 8.86999 3.54999C9.00166 4.5492 9.24581 5.53127 9.59999 6.47999C9.74011 6.85244 9.77073 7.25688 9.68817 7.64478C9.6056 8.03268 9.41339 8.38722 9.13499 8.66499L7.86999 9.92999C9.28475 12.4187 11.3313 14.4652 13.82 15.88L15.08 14.615C15.3578 14.3366 15.7123 14.1444 16.1002 14.0618C16.4881 13.9793 16.8925 14.0099 17.265 14.15C18.2137 14.5042 19.1958 14.7483 20.195 14.88C20.6934 14.9506 21.1462 15.1951 21.4704 15.5684C21.7946 15.9416 21.9682 16.4187 21.96 16.91L22 16.92Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

// --- SERVICES & TECH ---

export const Code: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Terminal: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 17L10 11L4 5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M12 19H20" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Cpu: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
        <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M9 1V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M15 1V4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M9 20V23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M15 20V23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M20 9H23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M20 15H23" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M1 9H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M1 15H4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Globe: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M2 12H22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Smartphone: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M12 18H12.01" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
);

export const Zap: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    </svg>
);

export const Server: React.FC<Props> = ({ size = 24, className = '', strokeWidth = 1.5 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
        <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
        <path d="M6 6H6.01" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M6 18H6.01" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
);