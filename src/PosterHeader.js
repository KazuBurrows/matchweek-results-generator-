import { images } from "./Base64Images";

function PosterHeader({ competition, week }) {
  return (
    <div className="absolute h-[1200px] w-[1000px] pt-2">
  <img src={images.fc_twenty_11} className="w-[120px] ml-auto" />
  
  <h1 className="uppercase text-white inter-font text-[30px] font-black leading-none tracking-tighter ml-8 transform -translate-y-[100px]">
    {competition}
  </h1>

  <h1 className="uppercase text-white inter-font text-[80px] font-black leading-none tracking-tighter ml-7 transform -translate-y-[100px]">
    Final Results
  </h1>

  <h1 className="uppercase text-red-800 inter-font text-[30px] font-bold leading-none tracking-tighter ml-8 transform -translate-y-[100px]">
    {week}
  </h1>
</div>

  );
}

export default PosterHeader;
