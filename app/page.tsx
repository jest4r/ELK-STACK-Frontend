import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <header className="absolute top-2 left-2 m-4 font-bold text-2xl text-black">
        LIBRA CHATBOT
      </header>
      <div className="absolute top-0 right-0 z-0">
      <Image
            src="/chatbot.png"
            alt="Chatbot Image"
            width={499}
            height={605}
          />
      </div>
      <div className="flex justify-between w-full items-center font-mono text-sm lg:flex">
        <div className="text-left pl-6 font-sans">
          <br /> <br /> <br /> <br /> <br /> <br />
          <h1 className="w-full font-bold text-4xl text-black">Chào mừng bạn!</h1>
          <p className="mt-6 text-black text-justify text-base">
            Hành trình tìm kiếm công việc mơ ước và <br /> khám phá bản thân đã bắt đầu! <br />
            Để hiểu hơn về bạn và đưa ra lời khuyên <br /> chính xác,  bạn hãy cho Libra biết một vài <br /> thông tin sau nhé!
          </p> 
          <Link legacyBehavior href="/sign-up">
            <a className="mt-8 inline-block bg-blue-500 text-white px-32 py-3 rounded">Tiếp tục</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
