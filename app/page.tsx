import Image from "next/image";
import Link from "next/link";
import DemoGif from "@/images/landingPage/demo.gif";

export default async function Home() {
  
  return (
    <main className="">
      <div className="relative isolate pt-14 dark:bg-gray-900">
        <div 
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        > 
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]-translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5%, 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />            
        </div>

        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-3xl">
              Chat with Anyone, Worldwide, Any Time.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Breaking down language barriers, {" "}
              <span className="text-bg-[#a153eb] dark:text-[#ff67e6]">
                powered by Artificial Intelligence (AI).
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-full bg-[#6d30a7] px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo focus-visible:outline focus visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d30a7]"
              >
                    Get Started  
              </Link>
              <Link
                href="/pricing"
                className="rounded-full bg-gradient-to-r from-[#4ce1d0] via-[#a153eb] to-[#dd4c8d] px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo focus-visible:outline focus visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d30a7]"
              >
                View Pricing <span aria-hidden="true"></span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src={DemoGif}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]-translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5%, 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />            
        </div>
      </div>
    </main>
  );
}
