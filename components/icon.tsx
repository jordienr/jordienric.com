import { HiDocument } from "react-icons/hi2";
const ICONS = {
  bookmark: (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M18 2H6v2h12v16h-2v-2h-2v-2h-4v2H8v2H6V2H4v20h4v-2h2v-2h4v2h2v2h4V2h-2z"
        fill="currentColor"
      />
    </svg>
  ),
  note: (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
        fill="currentColor"
      />
    </svg>
  ),
  thought: (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M7 3H5v4h2V3zm4 0H9v4h2V3zm2 0h2v4h-2V3zm8 6H3v12h14v-5h4V9zm-2 5h-2v-3h2v3zM5 11h10v8H5v-8z"
        fill="currentColor"
      />
    </svg>
  ),
};

export const Icon = ({
  className,
  icon,
  width = 21,
  height = 21,
}: {
  className: string;
  icon: string;
  width?: number;
  height?: number;
}) => {
  console.log(icon);
  if (!(icon in ICONS) || !icon) {
    return (
      <div className={className} style={{ width, height }}>
        <HiDocument />
      </div>
    );
  }

  const Component = () => ICONS[icon as keyof typeof ICONS];

  return (
    <div className={className} style={{ width, height }}>
      <Component />
    </div>
  );
};
