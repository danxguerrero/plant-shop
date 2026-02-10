import { RemoveScroll } from "react-remove-scroll";

type MobileWrapperProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseClick: () => void;
};

const MobileWrapper: React.FC<MobileWrapperProps> = ({
  children,
  isOpen,
  onCloseClick,
}: MobileWrapperProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        className="fixed left-0 top-0 flex h-full w-full items-start justify-end bg-black/30 font-lato backdrop-blur-sm z-20"
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            onCloseClick();
          }
        }}
      >
        <button className="absolute right-0 top-0 p-2" onClick={onCloseClick}>
          <i className="fa-solid fa-xmark text-4xl text-emerald-400"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default MobileWrapper;
