import arrow from "../../assets/images/accordion-arrow.png";

function AccordionItem({ index, isOpenArray, setIsOpen, question, answer }) {
  function handleClick(index) {
    if (isOpenArray.includes(index)) {
      setIsOpen((opens) => opens.filter((num) => num !== index));
    } else {
      setIsOpen((opened) => [...opened, index]);
    }
  }
  return (
    <div className="pb-7 border-b-[0.5px] border-[#555973]">
      <div
        className="flex cursor-pointer justify-between items-center"
        onClick={() => handleClick(index)}
      >
        <h2 className="text-[#040A33] w-[80%] font-bold text-base tablet:text-lg tablet:leading-[26px] laptop:text-xl ">
          {question}
        </h2>
        <img
          src={arrow}
          alt="open or close"
          className={` transition-transform ease-in-out duration-300 size-6 transform ${
            isOpenArray.includes(index) ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>
      <div
        className={`transition-all grid  ease-in-out duration-500 ${
          isOpenArray.includes(index)
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* <hr className="w-full h-[0.5px] border-none m-0 p-0 outline-none bg-[#555973] my-7" /> */}
          <p className="text-[#555973] text-base tablet:text-lg mt-7 tablet:leading-[26px] laptop:text-xl laptop:leading-[30px]  ">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
