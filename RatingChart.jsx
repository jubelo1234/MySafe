// .r-svg path {
//     stroke-width: 10px;
//     /* stroke: green; */
//   }
//   .r-svg2 path {
//     stroke-width: 10px;
//     stroke: #f6f8fa;
//   }

useEffect(() => {
  if (rating || rating === 0) {
    const inputValue = parseFloat(rating);
    const clampedValue = Math.min(5.0, Math.max(0, inputValue)); // Clamp the value between 0 and 5.0

    const arc = document.getElementById("ratingpath");
    const arc2 = document.getElementById("ratingpath2");
    if (arc) {
      const arcLength = arc.getTotalLength();
      const step = arcLength / 5.0; // Divide the arc length into 5 segments
      const dashLength = clampedValue * step; // Map value to arc length
      const dashLength2 = 5 * step; // Map value to arc length
      arc.style.strokeDasharray = `${dashLength} ${arcLength - dashLength}`;
      arc2.style.strokeDasharray = `${dashLength2} ${arcLength - dashLength}`;
    }

    if (rating < 2.5) {
      setColor("#D76B66");
      setRemarks("Poor");
    } else if (rating < 3.5) {
      setColor("#F6CF7D");
      setRemarks("Average");
    } else if (rating < 4.5) {
      setColor("#EA973D");
      setRemarks("Good");
    } else {
      setColor("#75C57F");
      setRemarks("Excellent");
    }
  }
}, [rating]);

<div className="mt-6 w-full flex justify-center">
  <div
    id="container"
    className="r-cont w-full max-w-[346px] mx-auto flex items-start justify-center aspect-square relative "
  >
    {/* <hr className="h-[1px] bg-blue-600 w-full absolute border-none top-[52.9%] transform  left-0" /> */}
    <svg
      version="1.1"
      baseProfile="full"
      viewBox="0 0 190 190"
      className="w-[90%] overflow-visible z-20 absolute top-0 left-1/2 transform -translate-x-1/2  r-svg aspect-square"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#b96e85" />
        <stop offset="100%" stopColor="#ae69bb" />
      </linearGradient>

      <path
        className="transition-all duration-2000 ease-in-out"
        id="ratingpath"
        d="M5 95 A80 80 0 0 1 185 95"
        stroke={ratingColor}
        fill="none"
        // strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="0 282.78"
      />
    </svg>
    <svg
      version="1.1"
      baseProfile="full"
      viewBox="0 0 190 190"
      className="w-[90%] overflow-visible z-10 absolute top-0 left-1/2 transform -translate-x-1/2  r-svg2 aspect-square"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#b96e85" />
        <stop offset="100%" stopColor="#ae69bb" />
      </linearGradient>

      <path
        id="ratingpath2"
        d="M5 95 A80 80 0 0 1 185 95"
        fill="none"
        // strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="0 282.78"
      />
    </svg>
    <div className="w-[90%] px-[12px] absolute top-[23%] left-1/2 transform -translate-x-1/2">
      <h1 className="text-center  text-[44px] leading-[54px] tablet:text-[48px] tablet:leading-[58px] text-[#0A0D14] font-semibold">
        {rating}
      </h1>
      <p className="text-center text-[15px] tablet:text-[16px] leading-5 text-[#0A0D14] pt-[4px] font-semibold">
        {rated ? `Your rating is ${remarks}` : "You haven't been rated"}
      </p>
    </div>
  </div>
</div>;
