import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Comment from './comment';

export default function GistDocumentSkeleton() {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px'
  };

  return (
    <div style={style}>
      <svg
        role="img"
        width="722"
        height="722"
        aria-labelledby="loading-aria"
        viewBox="0 0 722 722"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          style={{ fill: '#f7f7f7' }}
        ></rect>
        <defs>
          <clipPath id="clip-path">
              <rect x="180" y="0" rx="16" ry="16" width="361" height="40" /> 
              <rect x="288" y="227" rx="0" ry="0" width="0" height="1" /> 
              <rect x="0" y="100" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="130" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="160" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="190" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="220" rx="3" ry="3" width="361" height="10" /> 
              <rect x="290" y="396" rx="0" ry="0" width="0" height="1" /> 
              <rect x="0" y="269" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="299" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="329" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="359" rx="3" ry="3" width="722" height="10" /> 
              <rect x="0" y="389" rx="3" ry="3" width="361" height="10" />
          </clipPath>
          <linearGradient id="fill">
            <stop
              offset="0.599964"
              stopColor={'#f3f3f3'}
              stopOpacity={1}
            >
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop
              offset="1.59996"
              stopColor={'#ecebeb'}
              stopOpacity={1}
            >
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop
              offset="2.59996"
              stopColor={'#f3f3f3'}
              stopOpacity={1}
            >
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}