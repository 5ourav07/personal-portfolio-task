export default function CommonButton({ text = "Download CV" }) {
  return (
    <div className="w-[188px] h-[52px] bg-[#FD6F00] hover:bg-[#FD6F0099] rounded-[5px] text-[21px] font-normal text-white flex items-center justify-center cursor-pointer">
      {text}
    </div>
  );
}
