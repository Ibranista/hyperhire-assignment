import HeroJumbotron from "./components/jumbotron";
import { getDictionary } from "./dictionaries";
import HomeTopContent from "./components/hom.topcontent";
import ShowCase from "./components/showcase";
import Services from "./components/services";

export default async function Home({ params }: {
  // @ts-expect-error params to extract lang
  params
}) {
  const { lang } = await params;
  const contentData = await getDictionary(lang);
  const { content, services } = contentData ?? {};
  return (
    <main className="w-full pb-36">
      <HeroJumbotron />
      {/* main-content */}
      <HomeTopContent content={content} />
      {/* show-case */}
      <ShowCase />
      {/* making-progress */}
      <Services services={services} />


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


