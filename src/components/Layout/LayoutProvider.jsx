import MainFooter from "../Shared/MainFooter";
import MainHeader from "../Shared/MainHeader";

export default function LayoutProvider({ children }) {
  return (
    <div className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
}
