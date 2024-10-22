import HeroJumbotron from "./components/jumbotron";
import Box from "./ui/Box";
import BoxIcon from "./ui/tinybox";
import Typography from "./ui/typography";

export default function Home({ params }: IFuncLangParams) {

  return (
    <main className="w-full">
      <HeroJumbotron />
      <section className="main_content_wrapper">
        <Box variant={"container"} className="flex flex-col items-center gap-y-[15px]">
          <Typography variant={"gradient"} className="text-base">영상 제작소</Typography>
          <Typography variant={"light_white"} className="text-[44px] max-md:text-base">당장 내일<span className="text-white">‘고품질 맞춤 영상’</span>을 받아보세요.</Typography>
          <section className="main_content_cards_wrapper">
            <article className="main_content_rounded_box">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">FAST</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">X2</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">QUALITY</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">A++</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box">
              <div className="main_content_rounded_box scale-[.97] bg-inner">
                <Typography variant={"gradient"} className="rounded_item_header">LOW PRICE</Typography>
                <Typography variant={"lightgrad"} className="rounded_item_desc">1/2</Typography>
              </div>
            </article>
            <article className="main_content_rounded_box">
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
    </main>
  );
}