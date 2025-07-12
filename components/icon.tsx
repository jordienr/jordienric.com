/*
Pixelart Icon Source: https://icones.js.org/collection/pixelarticons
*/

const ICONS = {
  bookmark: (width: number, height: number) => (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        d="M18 2H6v2h12v16h-2v-2h-2v-2h-4v2H8v2H6V2H4v20h4v-2h2v-2h4v2h2v2h4V2h-2z"
        fill="currentColor"
      />
    </svg>
  ),
  note: (width: number, height: number) => (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
        fill="currentColor"
      />
    </svg>
  ),
  thought: (width: number, height: number) => (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        d="M7 3H5v4h2V3zm4 0H9v4h2V3zm2 0h2v4h-2V3zm8 6H3v12h14v-5h4V9zm-2 5h-2v-3h2v3zM5 11h10v8H5v-8z"
        fill="currentColor"
      />
    </svg>
  ),
  arrowRight: (width: number, height: number) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
      />
    </svg>
  ),
  arrowLeft: (width: number, height: number) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2zM10 7H8v2h2zm0 0h2V5h-2zm0 10H8v-2h2zm0 0h2v2h-2z"
      />
    </svg>
  ),
  arrowTopRight: (width: number, height: number) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="3" width="1" height="1" fill="currentColor" />
      <rect x="11" y="3" width="1" height="1" fill="currentColor" />
      <rect x="12" y="3" width="1" height="1" fill="currentColor" />
      <rect x="13" y="3" width="1" height="1" fill="currentColor" />
      <rect x="14" y="3" width="1" height="1" fill="currentColor" />
      <rect x="15" y="3" width="1" height="1" fill="currentColor" />
      <rect x="16" y="3" width="1" height="1" fill="currentColor" />
      <rect x="17" y="3" width="1" height="1" fill="currentColor" />
      <rect x="18" y="3" width="1" height="1" fill="currentColor" />
      <rect x="19" y="3" width="1" height="1" fill="currentColor" />
      <rect x="20" y="3" width="1" height="1" fill="currentColor" />
      <rect x="19" y="4" width="1" height="1" fill="currentColor" />
      <rect x="20" y="4" width="1" height="1" fill="currentColor" />
      <rect x="18" y="5" width="1" height="1" fill="currentColor" />
      <rect x="20" y="5" width="1" height="1" fill="currentColor" />
      <rect x="17" y="6" width="1" height="1" fill="currentColor" />
      <rect x="20" y="6" width="1" height="1" fill="currentColor" />
      <rect x="16" y="7" width="1" height="1" fill="currentColor" />
      <rect x="20" y="7" width="1" height="1" fill="currentColor" />
      <rect x="15" y="8" width="1" height="1" fill="currentColor" />
      <rect x="20" y="8" width="1" height="1" fill="currentColor" />
      <rect x="14" y="9" width="1" height="1" fill="currentColor" />
      <rect x="20" y="9" width="1" height="1" fill="currentColor" />
      <rect x="13" y="10" width="1" height="1" fill="currentColor" />
      <rect x="20" y="10" width="1" height="1" fill="currentColor" />
      <rect x="12" y="11" width="1" height="1" fill="currentColor" />
      <rect x="20" y="11" width="1" height="1" fill="currentColor" />
      <rect x="11" y="12" width="1" height="1" fill="currentColor" />
      <rect x="20" y="12" width="1" height="1" fill="currentColor" />
      <rect x="10" y="13" width="1" height="1" fill="currentColor" />
      <rect x="20" y="13" width="1" height="1" fill="currentColor" />
      <rect x="9" y="14" width="1" height="1" fill="currentColor" />
      <rect x="8" y="15" width="1" height="1" fill="currentColor" />
      <rect x="7" y="16" width="1" height="1" fill="currentColor" />
      <rect x="6" y="17" width="1" height="1" fill="currentColor" />
      <rect x="5" y="18" width="1" height="1" fill="currentColor" />
      <rect x="4" y="19" width="1" height="1" fill="currentColor" />
      <rect x="3" y="20" width="1" height="1" fill="currentColor" />
    </svg>
  ),
};

export const Icon = ({
  className,
  icon,
  width = 21,
  height = 21,
}: {
  className?: string;
  icon: string;
  width?: number;
  height?: number;
}) => {
  const DefaultIcon = () => ICONS["note"](width, height);

  if (!(icon in ICONS) || !icon) {
    return (
      <div className={className} style={{ width, height }}>
        <DefaultIcon />
      </div>
    );
  }

  const Component = () => ICONS[icon as keyof typeof ICONS](width, height);

  return (
    <div className={className} style={{ width, height }}>
      <Component />
    </div>
  );
};
