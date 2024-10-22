import Image from "next/image";
import HeroJumbotron from "./components/jumbotron";
import Box from "./ui/Box";
import BoxIcon from "./ui/tinybox";
import Typography from "./ui/typography";

export default function Home({ params }: IFuncLangParams) {

  return (
    <main className="w-full pb-36">
      <HeroJumbotron />
      {/* main-content */}
      <section className="main_content_wrapper flex flex-col items-center">
        <Box variant={"container"} className="flex flex-col items-center gap-y-[15px]">
          <Typography variant={"gradient"} className="text-base">영상 제작소</Typography>
          <Typography variant={"light_white"} className="text-[44px] max-md:text-base">당장 내일<span className="text-white">‘고품질 맞춤 영상’</span>을 받아보세요.</Typography>
          <section className="main_content_cards_wrapper">
            <article className="main_content_rounded_box bg-outer">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">FAST</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">X2</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box bg-outer">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">QUALITY</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">A++</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box bg-outer">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">LOW PRICE</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">1/2</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box bg-outer">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">HIGH TECH</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">Gen AI</Typography>
              </div>
            </article>
          </section>
          <Typography className="text-2xl max-md:text-[18px]">AI VIDEO ON YOUR DEMAND</Typography>
          <article className="main_content_desc_wrapper">
            <Typography className="main_content_description">가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에
              영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
            </Typography>
            <Typography className="main_content_description">
              가격은 절반으로, 속도는 두배로, 품질은 A++!
              기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등
              당신이 필요한 &apos;그 영상&apos;을 플루닛 영상제작소에 맡겨주세요.
            </Typography>
          </article>
          <div className="horizontal_line"></div>
          <div className="relative main_prev_wrapper">
            <Typography className="main_content_prev_works static">
              PREVIOUS WORKS
            </Typography>
            <BoxIcon className="absolute top-0 left-0" />
          </div>
        </Box>
      </section>
      {/* show-case */}
      <section className="show_case w-full pb-[245px] max-md:pb-[107px] bg-primary_background">
        <Box className="max-w-full grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2" variant={"default"}>
          {Array(12).fill(12).map((_, index) =>
            <div className="relative h-[270px] max-sm:h-[146px] w-full bg-orange-200" key={index}>
              <Image
                src="/01.png"
                layout="fill"
                alt="portfolio-project"
                objectFit="fill"  // Ensures the aspect ratio is maintained
              />
            </div>)}
        </Box>
      </section>
      {/* making-progress */}
      <Box className="flex justify-center flex-col items-center bg-slate-300" variant={"default"}>
        <div className="relative mb-[60px]">
          <Typography className="main_content_prev_works static">
            MAKING PROCESS
          </Typography>
          <BoxIcon className="absolute top-0 left-0" />
        </div>
        <section className="cards_wrapper bg-slate-400 w-full flex justify-between max-md:flex-wrap items-center gap-x-3 max-md:justify-center max-md:gap-y-10 box-border px-16 max-md:px-5">
          {/* left box */}
          <Box size={"md"} variant={"default"} className=" flex flex-col items-center pt-[64px] pb-[62px] h-[816px]">
            <Typography className="font-bold text-[44px] leading-[140%] max-md:text-[22px] max-md:leading-[32px] text-[#d9d9d9]"> 일반 제작 </Typography>

            <Typography className="text-[24px] max-md:text-base max-md:leading-[24px] max-md:font-bold"> 제작 시작 후 5영업일 이내</Typography>

            <section className="rounded_wrapper w-full flex justify-center relative z-10">
              <article className="rounded_details flex flex-wrap bg-light_black justify-between rounded-full max-w-[594px] w-full py-[23px] px-[53px] bg-light mt-[18px]">
                {/* stepleft */}
                <div className="left">
                  <Typography variant={"gradient"} size={"xsm"}>STEP1</Typography>
                  <Typography size={"xmd"}>사전 논의</Typography>
                </div>

                <div className="right">
                  <Typography className="max-w-[316px] w-full" variant={"light_white"}> 영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의</Typography>
                </div>
              </article>
              <Image src="/down.png" width={29} height={13} alt="drop down" className="absolute -bottom-2" />
            </section>

          </Box>
          {/* right side */}
          <Box size={"md"} variant={"default"} className=" flex flex-col items-center pt-[64px] pb-[62px] h-[816px]">
            <Typography className="font-bold text-[44px] leading-[140%] max-md:text-[22px] max-md:leading-[32px] " variant={"gradient"}> Ploonet Quickserve™
            </Typography>

            <Typography className="text-[24px] max-md:text-base max-md:leading-[24px] max-md:font-bold"> 제작 시작 후 5영업일 이내</Typography>

            <section className="rounded_wrapper w-full flex flex-col items-center justify-center relative">
              <article className="rounded_details flex flex-wrap items-center max-w-[594px] w-full bg-light mt-[18px] gap-x-[40px]">
                {/* stepleft */}
                <Box size={"xsm"} variant={"default"} className="left bg-primary-gradient">
                  <Typography size={"xsm"} className="text-[24px] max-md:text-[18px]">STEP1</Typography>
                  <Image src="/note_icon.png" width={40} height={51} alt="note icon" />
                </Box>

                <div className="right">
                  <Typography>제작 안내</Typography>
                  <Typography className="max-w-[316px] w-full" variant={"light_white"}> 영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의</Typography>
                </div>
              </article>
            </section>

          </Box>
        </section>
      </Box >
    </main >
  );
}