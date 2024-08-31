const CreditCard = () => {
  return (
    <div className="relative w-full h-[212.22px] md:h-[302px] px-5 md:px-0 flex justify-center max-w-[378px] mx-auto lg:mx-0 md:max-w-full">
      <img
        src={"/static/deposit/front-card.svg"}
        alt="Front Card"
        className=" h-full"
      />
      <div className="absolute bottom-[33px] md:bottom-10 left-[40px] md:left-[29px] right-4 text-white font-cor-a text-[25.96px] leading-[28.49px] md:text-[36px] md:leading-[40px]">
        <p>5495 7381 3753 1517</p>
        <p className="text-[19.91px] leading-[21.86px] md:text-[28px] md:leading-[31px] mt-[7px] text-[#646B6D]">
          13/09
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
