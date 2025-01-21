export const SectionContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1400px] px-4 md:px-6 lg:px-8 mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
