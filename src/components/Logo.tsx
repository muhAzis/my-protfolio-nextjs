'use client';
import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Logo: React.FC<Props> = ({ style, className, id, children }) => {
  return (
    <svg
      id={id}
      className={className}
      style={{
        width: '224px',
        height: '187px',
        fill: 'var(--clr-dark)',
        ...style,
      }}
      viewBox="0 0 224 187"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M55.4834 137.839C56.6796 135.758 59.3448 135.04 61.4167 136.242L71.7197 142.219C73.101 143.02 74.682 143.02 76.0633 142.219L92.4499 132.713C93.8312 131.911 94.6219 130.535 94.6217 128.933C94.6215 127.33 93.8308 125.954 92.4493 125.153L52.231 101.832C50.1592 100.631 47.4943 101.348 46.2984 103.43L0.149535 183.742C-0.0531369 184.094 -0.0495743 184.5 0.158904 184.849C0.367118 185.197 0.721134 185.392 1.12595 185.378C18.687 184.795 33.7005 175.745 42.5673 160.317L55.4834 137.839ZM80.416 154.812L76.1197 157.304C74.7384 158.105 73.1574 158.105 71.7761 157.304L66.2146 154.078C64.1426 152.876 61.4774 153.593 60.2813 155.675L52.086 169.937C50.8898 172.019 51.6041 174.697 53.676 175.899L71.7765 186.399C73.1577 187.2 74.7388 187.2 76.1201 186.399L162.583 136.242C164.655 135.04 167.32 135.758 168.517 137.84L181.431 160.314C190.297 175.744 205.312 184.795 222.874 185.378C223.279 185.392 223.633 185.198 223.841 184.849C224.05 184.5 224.053 184.095 223.851 183.742L177.702 103.431C176.506 101.349 173.841 100.631 171.769 101.833L114.184 135.238C102.933 141.77 91.6696 148.283 80.416 154.812ZM131.536 176.918L147.88 186.399C149.261 187.2 150.842 187.2 152.224 186.399L170.324 175.899C172.396 174.697 173.11 172.019 171.914 169.937L163.722 155.68C163.123 154.638 162.238 153.957 161.081 153.646C159.925 153.336 158.819 153.483 157.783 154.086L131.531 169.361C130.152 170.164 129.363 171.54 129.365 173.141C129.365 174.743 130.156 176.117 131.536 176.918ZM110.914 91.712L91.1009 80.2186C90.065 79.6176 89.7079 78.2786 90.3059 77.2378L108.238 46.0305C109.036 44.6427 110.405 43.8484 112 43.8484C113.595 43.8484 114.964 44.6427 115.762 46.0305L133.694 77.238C134.292 78.2789 133.935 79.6178 132.899 80.2187L113.086 91.712C112.395 92.1127 111.605 92.1127 110.914 91.712ZM166.858 84.5597L121.404 5.45536C119.41 1.98599 115.987 0 112 0C108.013 0 104.59 1.98585 102.596 5.45536L57.1348 84.5711C55.9389 86.6528 56.653 89.3308 58.7247 90.5326L109.815 120.17C111.197 120.971 112.778 120.971 114.159 120.17L165.269 90.5215C167.34 89.3195 168.055 86.6414 166.858 84.5597Z"
      />
      {children}
    </svg>
  );
};

export default Logo;