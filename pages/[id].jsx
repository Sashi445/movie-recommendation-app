import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Roboto, Poppins } from "next/font/google";
import { medianCut, buildRGB } from "@/helpers/paletteGen";
import { rgbToHex } from "@/helpers/colors";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  style: ['normal']
});
const poppins = Poppins({
  weight: '700',
  subsets: ['latin']
});

const DetailPage = () => {

  const canvasRef = useRef(null);

  const [palette, setPalette] = useState({
    r: 0,
    g: 0,
    b: 0
  });

  const detailState = {
    link: "https://www.primevideo.com/detail/0FIVK55HUFIIADBSNC585CZFDP/ref=atv_hm_hom_c_cjm7wb_2_1",
    contentAdvisory: [
      "Alcohol use",
      "sexual content",
      "violence",
      "foul language"
    ],
    audioLanguages: [
      "हिन्दी",
      "हिन्दी [ऑडियो विवरण]",
      "తెలుగు",
      "தமிழ்"
    ],
    directors: "Siddharth Anand",
    producers: "Aditya Chopra",
    starring: [
      "Shah Rukh Khan",
      "Deepika Padukone",
      "John Abraham"
    ],
    actionItems: [
      "8.1",
      "Action",
      "3.6K",
      "86K"
    ],
    rating: "IMDb 6.1",
    runtime: "2 h 28 min",
    title: "Prime Video: Pathaan",
    desc: "Indian RAW agent “Pathaan” (Shah Rukh Khan) gets to know of a major impending attack against India, mounted by a mercenary group led by the ruthless enigma Jim (John Abraham), who has a history of his own. With the doomsday clock ticking away and an agent Rubai (Deepika Padukone) his only possible ally, Pathaan must fight countless betrayals and deal with destruction as he takes on Jim.",
    img: "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/777d4f050d5c1927927b017af8e3c2a413bba424efd3090f5540d79063d854ce._RI_V_TTW_SX720_FMjpg_.jpg"
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    const img = new Image();
    img.src = detailState.img;
    img.setAttribute("crossOrigin", "");

    img.onload = () => {

      canvas.height = img.height;
      canvas.width = img.width;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.height, canvas.width);
      const rgbData = buildRGB(imageData.data);
      // const palette = medianCut(rgbData, 0);
      const imgPalette = medianCut(rgbData, 0)
      console.log(imgPalette)
      setPalette({ ...imgPalette[3] });
    }

  }, []);


  return (
    <>
      <Head>
        <meta name="description" content="Movie Detail Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{detailState.title}</title>
      </Head>
      <main className={roboto.className}>
        <div className="hidden lg:block" >
          <img className="w-full aspect-video" src={detailState.img} alt="" />
        </div>
        <div className={`
        w-full min-h-[100vh] px-[18px] py-[22px] md:absolute top-0 z-10
        bg-gradient-to-b from-[${rgbToHex(palette.r, palette.g, palette.b)}] to-dark-primary
        lg:bg-gradient-to-r lg:from-dark-primary lg:to-transparent
        `}
        >
          {/* for image  */}
          <div className="lg:hidden w-full mb-[34px]" style={{ filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))` }}>
            <img className="max-w-full" src={detailState.img} alt="" />
            <canvas className="hidden" ref={canvasRef}></canvas>
          </div>
          <div className="mb-[32px] md:max-w-[50%]">
            {/* title  */}
            <div className={`p-3 mb-5 border bg-[#100E0B]`}></div>
            <div className={`mb-[6px]  font-bold text-[24px] leading-[136%] ${poppins.className}`}>
              {detailState.title}
            </div>
            {/* info badges  */}
            <div className="mb-[16px] flex">
              {
                detailState.actionItems.map((e, i) => (<div key={i} className="leading-[136%] text-[12px] font-light border-[1px] border-solid border-[#333] rounded-[3px] p-1 me-1 bg-[#1E1E1E]">{e}</div>))
              }
            </div>
            {/* description  */}
            <div className="font-light text-[14px] leading-[136%]">
              {detailState.desc}
            </div>
          </div>
          {/* action items  */}
          <div className="min-[432px]:mb-6 w-full flex justify-center mb-3">
            <div className="rounded-full border-[3px] border-[#333] h-[48px] w-[48px] me-4">
            </div>
            <div className="rounded-full border-[3px] border-[#333] h-[48px] w-[48px] me-4">
            </div>
            <div className="rounded-full border-[3px] border-[#333] h-[48px] w-[48px]">
            </div>
          </div>
          {/* <div className="flex">
            {palette.map(color => (<div key={color.g} className="h-3 w-3" style={{ background: `rgba(${color.r}, ${color.g}, ${color.b},1)` }}></div>))}
          </div> */}
          {/* watch movie button  */}
          <div className="fixed min-[432px]:static  bottom-0 left-0 px-[18px] pb-[22px] w-full" >
            {/* button  */}
            <div className="w-full py-[9px] text-center text-[16px] leading-[136%] font-normal  bg-[#146eb4] rounded-[3px]">
              Watch on prime
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailPage;


