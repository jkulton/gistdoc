export default function GistDocumentSkeleton() {
  return (
    <svg
      role="img"
      aria-labelledby="loading-aria"
      viewBox="0 0 600 722"
      preserveAspectRatio="none"
      className="dark:opacity-5"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        fill="url(#fill)"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="8" rx="16" ry="16" width="600" height="63" />
          <rect x="0" y="100" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="130" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="160" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="190" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="220" rx="3" ry="3" width="300" height="10" />
          <rect x="0" y="269" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="299" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="329" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="359" rx="3" ry="3" width="600" height="10" />
          <rect x="0" y="389" rx="3" ry="3" width="300" height="10" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#f3f3f3" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1.59996" stopColor="#ecebeb" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="2.59996" stopColor="#f3f3f3" stopOpacity="1">
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
  );
}
