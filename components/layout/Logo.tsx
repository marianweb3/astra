interface LogoProps {
  logoBetaText: boolean;
  className?: string;
}

const Logo = ({ logoBetaText, className = "" }: LogoProps) => {
  return logoBetaText ? (
    <div className="flex items-start gap-3">
      <img src="/logo-title.svg" alt="Logo" className="max-w-[100px] sm:max-w-[147px] w-full" />

        <div className="h-[23px] w-[50px] grid place-content-center rounded-full border border-white">
          <span className="font-inter-tight font-semibold text-[14px] leading-[16.94px] text-white">
            BETA
          </span>
        </div>
    </div>
  ) : (
    <div className={"flex items-start"}>
      <img
        src="/logo-title.svg"
        alt="Logo"
        className={`${className} max-w-[147px] w-full`}
      />
    </div>
  );
};

export default Logo;
