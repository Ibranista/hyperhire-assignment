import Image from "next/image";
import HeroJumbotron from "./components/jumbotron";
import Box from "./ui/Box";
import BoxIcon from "./ui/tinybox";
import Typography from "./ui/typography";
import { getDictionary } from "./dictionaries";
import HomeTopContent from "./components/hom.topcontent";
import ShowCase from "./components/showcase";

export default async function Home({ params }: {
  // @ts-expect-error params to extract lang
  params
}) {
  const { lang } = await params;
  const contentData = await getDictionary(lang);
  const { content } = contentData ?? {};

  return (
    <main className="w-full pb-36">
      <HeroJumbotron />
      {/* main-content */}
      <HomeTopContent content={content} />
      {/* show-case */}
      <ShowCase />
      {/* making-progress */}
      <Box className="flex justify-center flex-col items-center bg-primary_background" variant={"default"}>
        <div className="relative mb-[60px]">
          <Typography className="main_content_prev_works static">
            MAKING PROCESS
          </Typography>
          <BoxIcon className="absolute top-0 left-0" />
        </div>
        <section className="cards_wrapper bg-primary_background w-full flex justify-between max-md:flex-wrap items-center gap-x-3 max-md:justify-center max-md:gap-y-10 box-border px-16 max-md:px-5">
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


      <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-full md:max-w-[900px] w-full p-8">
          <div className="text-center mb-6">
            <p className="text-red-500 text-sm">영상 제작 문의</p>
            <h2 className="text-2xl font-bold mb-2">영상 제작이 필요하다면, 지금 문의 주세요.</h2>
            <p className="text-sm text-gray-400">여러분이 필요한 영상을 빠르게 제작하기 위해 플룻 영상제작소가 즉시 연락 드리겠습니다.</p>
            <p className="text-sm text-gray-400 mt-2">henry.lim@saltlux.com</p>
          </div>

          <form action="#" className="space-y-4">
            <div>
              <select className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>영상 유형 선택</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="연락 받으실 담당자 성함" className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <input type="email" placeholder="이메일" className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <input type="text" placeholder="휴대폰 번호" className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <textarea rows={6} placeholder="의뢰하실 영상내용 (여러 예시를 참고해서 이곳에 자세한 내용을 기재해주세요)"
                className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              <p className="text-gray-400 text-sm mt-2">
                고객님의 비즈니스 종류: 공공/산업/IR/행사/교육용 등<br />
                영상 종류: 정보/프로모션/IR/프레젠테이션 등<br />
                내용: 제작하시고자 하는 영상의 내용
              </p>
            </div>

            <div>
              <input type="text" placeholder="참고 영상" className="w-full bg-gray-800 text-white p-4 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div className="text-center">
              <button className="bg-red-500 text-white font-bold py-4 px-10 rounded-md hover:bg-red-600 focus:ring-4 focus:ring-red-300 transition">
                문의 보내기
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              * 필수정보를 입력해주시면 영상 유형과 요청 사항에 맞춰 당일 영업일 기준으로 빠르게 연락을 드리겠습니다.
            </p>

            <p className="text-xs text-gray-400 text-center mt-2">
              <a href="#" className="underline">개인정보처리방침에 동의합니다.</a>
            </p>
          </form>
        </div>
      </div>


    </main >
  );
}


