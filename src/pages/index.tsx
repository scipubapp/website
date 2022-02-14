import React from "react"

import Link from "next/link"

export default function Home() {
  // const [currentUrl, setCurrentUrl] = useState("")

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     let urlStringToParse = ""
  //     urlStringToParse = window.location.href

  //     // remove http:// and https:// from the urlStringToParse variable
  //     urlStringToParse = urlStringToParse.replace(/^https?\:\/\//i, "")

  //     setCurrentUrl(urlStringToParse)
  //   }
  // }, [currentUrl])

  return (
    <div className="flex flex-col items-center justify-center px-2 mx-auto space-y-3 max-w-7xl md:px-5">
      <div className="flex flex-row w-full py-1 mx-2 mt-8 bg-transparent border-2 border-black rounded-full shadow-xs lg:mx-1 xl:mx-0">
        <div className="my-auto ml-3"></div>
        <div className="mx-auto my-auto">
          <Link href="/" passHref>
            <a className="self-center px-1 text-sm font-black text-gray-800 align-middle rounded md:text-lg hover:text-gray-800 hover:bg-blue-100">
              <span className="text-green-700">
                <svg
                  id="bold"
                  enableBackground="new 0 0 24 24"
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline w-4 h-4 pb-1 mr-2 align-middle md:w-5 md:h-5"
                  fill="currentColor"
                >
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8z"></path>
                </svg>
                https://
              </span>
              scipub.foundation
            </a>
          </Link>
        </div>
        <div className="my-auto mr-3"></div>
      </div>

      <div className="flex flex-col items-center justify-center block px-2 py-3 space-y-5 sm:py-8 md:px-0">
        <h1 className="text-4xl font-extrabold text-center sm:text-5xl leading-[3rem] md:leading-normal">
          The{" "}
          <span className="bg-gradient-to-r from-teal-100 to-green-100 rounded-md px-[0.15rem] mr-[0.1rem]">
            Sci
          </span>
          entific{" "}
          <span className="bg-gradient-to-l from-cyan-100 to-sky-100 rounded-md px-[0.15rem] mr-[0.1rem]">
            Pub
          </span>
          <span className="z-20">lishing </span>
          <span className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-md px-[0.15rem] mr-[0.1rem]">
            Foundation
          </span>
        </h1>
        <h2 className="text-xl font-bold tracking-wide text-center uppercase sm:text-2xl">
          We build open technology for research distribution
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-3 text-xl md:gap-0 md:space-x-3">
        <Link href="/scipub" passHref>
          <a className="px-4 py-2 transition-all duration-300 border-2 border-black shadow-md rounded-xl bg-warmgray-50 hover:bg-warmgray-200 hover:bg-opacity-80">
            <strong>Articles</strong>
          </a>
        </Link>
        <button className="px-4 py-2 transition-all duration-300 border-2 border-black shadow-md rounded-xl bg-warmgray-50 hover:bg-warmgray-200 hover:bg-opacity-80">
          <strong>Code</strong>
        </button>
        <button className="px-4 py-2 transition-all duration-300 border-2 border-black shadow-md rounded-xl bg-warmgray-50 hover:bg-warmgray-200 hover:bg-opacity-80">
          <strong>DAO</strong>
        </button>
        <button className="px-4 py-2 transition-all duration-300 border-2 border-black shadow-md rounded-xl bg-warmgray-50 hover:bg-warmgray-200 hover:bg-opacity-80">
          <strong>Grants</strong>
        </button>
        <button className="px-4 py-2 transition-all duration-300 border-2 border-black shadow-md rounded-xl bg-warmgray-50 hover:bg-warmgray-200 hover:bg-opacity-80">
          <strong>People</strong>
        </button>
      </div>
      {/* <img src="logo_optimized.svg" alt="SciPub" className="w-1/3 mx-auto" /> */}
      <Divider />
      <div className="grid pb-6 md:grid-cols-3 gap-y-3 md:gap-y-0 md:gap-x-5">
        <DescriptorBox
          gradient="bg-gradient-to-br from-orange-50 to-lime-50"
          innerDivGradient="bg-gradient-to-r from-orange-100 via-yellow-100 to-lime-100"
          headerMaintext="What Is SciPub?"
          descriptorMainText="The SciPub Foundation is building the scipub:// protocol to make decentralized research publication a reality. Together, the different modules of the protocol constitute a complete peer-to-peer publishing system."
          // modules — identity management, storage, licensing, etc. —
          readMoreHref="./scipub"
        />
        <DescriptorBox
          gradient="bg-gradient-to-tr from-lime-50 to-cyan-50"
          innerDivGradient="bg-gradient-to-r from-lime-100 via-emerald-100 to-teal-100"
          headerMaintext="Our Mission"
          descriptorMainText="SciPub's mission is to make scientific publishing accessible to all, and scientific knowledge free to access. We strongly believe that everyone should be able to distribute and consume scientific information."
          readMoreHref=""
        />
        <DescriptorBox
          gradient="bg-gradient-to-br from-cyan-50 to-sky-50"
          innerDivGradient="bg-gradient-to-r from-teal-100 via-sky-200 to-[#a6e7ff]"
          headerMaintext="Our Vision"
          readMoreHref=""
          descriptorHTML={
            <>
              <p>We envision a future where:</p>
              <ol className="list-decimal list-inside">
                <li>Every individual can freely access scientific knowledge</li>
                <li>Research is transparent from hypothesis to publication</li>
                <li>Journals are curators and not gatekeepers</li>
              </ol>
            </>
          }
          readMoreHoverBackgroundColor="bg-"
        />
      </div>
      {/* <Divider />
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Do you offer technical support?</span>
              <ChevronUpIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No.
            </Disclosure.Panel>
          </        )}
      </Disclosure> */}
      <Divider />
      {/* @ts-ignore */}
      <img
        src="./images/scipub_liras_venn_diagram.svg"
        alt="SciPub"
        className="w-full"
      />
      <Divider />
      <HeaderText />
      <div className="grid w-full grid-cols-1 gap-3 pt-6 md:gap-5 md:grid-cols-2">
        <ArticleList
          articleHref="https://www.theguardian.com/science/2017/jun/27/profitable-business-scientific-publishing-bad-for-science"
          articleTitle="Is the staggeringly profitable business of scientific publishing bad for science?"
          articleAuthor="Stephen Buranyi"
          articlePublication="The Guardian"
          articleDescription="Buranyi tells of how scientific publishing went from knowledge-sharing to profit-making."
        />
        <ArticleList
          articleHref="https://theconversation.com/research-transparency-5-questions-about-open-science-answered-76851"
          articleTitle="The Scientific Paper Is Obsolete. Here’s What’s Next."
          articleAuthor="James Somers"
          articlePublication="The Atlantic"
          articleDescription="Somers explores the emergence of the computational essay — an evolution (or revolution) of the scientific paper."
        />
        <ArticleList
          articleHref="https://theconversation.com/research-transparency-5-questions-about-open-science-answered-76851"
          articleTitle="Research transparency: 5 questions about open science answered"
          articleAuthor="Elizabeth Gilbert &amp; Katie Corker"
          articlePublication="The Conversation"
          articleDescription="Gilbert and Corker give an easy-to-digest explanation of why everyone should care about open science."
        />
        <ArticleList
          articleHref="https://www.americanscientist.org/article/open-science-isnt-always-open-to-all-scientists"
          articleTitle="Open Science Isn't Always Open to All Scientists"
          articleAuthor="Christie Bahlai, et al."
          articlePublication="American Scientist"
          articleDescription="Bahlai, et al. discuss the implications of open science."
        />
        <ArticleList
          articleHref="https://science.thewire.in/the-sciences/scientific-publishing-peer-review-open-access/"
          articleTitle="The Problems With Science Journals Trying to Be Gatekeepers – and Some Solutions"
          articleAuthor="Peter Ellis"
          articlePublication="The Wire Science"
          articleDescription="Ellis discusses the implications of open science."
        />
        <ArticleList
          articleHref="https://science.thewire.in/the-sciences/scientific-publishing-peer-review-open-access/"
          articleTitle="Distrust and expertise: Can scientific journals continue as gatekeepers?"
          articleAuthor="Vanessa Heggie"
          articlePublication="The Royal Society Journal of the History of Science"
          articleDescription="Heggie discusses the implications of open science."
        />
        <ArticleList
          articleHref="https://doi.org/10.1002/jbmr.4319"
          articleTitle="Editorial Peer Reviewers as Shepherds, Rather Than Gatekeepers"
          articleAuthor="Joel Boerckel, Lilian Plotkin, &amp; Natalie Sims"
          articlePublication="the Journal of Bone and Mineral Research"
          articleDescription="Boerckel, Plotkin, and Sims discuss the implications of open science."
        />
      </div>
      <Divider />
      <footer className="w-full pt-4 pb-16 mx-auto text-center space-mono">
        <div className="mx-auto text-center max-w-max">
          <small className="p-2 leading-7 text-black md:p-3 text-md md:leading-10">
            Copyright © 2022{" "}
            <a className="underline" href="https://scipub.foundation">
              SciPub Foundation
            </a>
            . Developed by{" "}
            <a className="underline" href="https://dar.i.ng">
              The Daring LLC
            </a>
            . All Rights Reserved · Made with ❤ on Earth ·{" "}
            <a
              href="https://github.com/interplanetarypub/website"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on Github
            </a>
          </small>
        </div>
      </footer>
    </div>
  )
}

const DescriptorBox = (props) => {
  return (
    <div
      className={`p-4 pb-6 flex flex-col justify-between rounded-md  ${props.gradient}`}
    >
      <div>
        <div className={`font-bold text-2xl`}>
          <h3 className="p-1 px-2 border-b-2 border-black">
            {props.headerMaintext}
          </h3>
        </div>
        <div className="px-3 py-2">
          <p
            className="tracking-tight tracking-normal text-[1.1rem] leading-[1.6rem]"
            key={props.descriptorMainText}
          >
            {props.descriptorMainText}
            {props.descriptorHTML}
          </p>
        </div>
      </div>
      <a
        className="block px-3 py-2 text-lg font-semibold justify-self-end"
        href={props.readMoreHref}
      >
        <span className="pt-2 pb-2 pr-2 transition-all duration-300 border-b-2 border-gray-800 hover:bg-opacity-20 hover:pl-2 hover:bg-warmgray-400">
          Read more&nbsp;&nbsp;{"->"}
        </span>
      </a>
    </div>
  )
}

function ArticleList(props) {
  const gradientColor = selectRandomGradientColor()

  const fromColor = gradientColor[0]
  const toColor = gradientColor[1]

  function selectRandomGradientColor() {
    const randomNumber = Math.random() * 100

    if (randomNumber > 80) {
      return ["blue", "green"]
    } else if (randomNumber > 60 && randomNumber < 80) {
      return ["sky", "yellow"]
    } else if (randomNumber > 40 && randomNumber < 60) {
      return ["blue", "orange"]
    } else if (randomNumber > 20 && randomNumber < 40) {
      return ["blue", "orange"]
    } else {
      return "p-6 rounded-md shadow-sm bg-gradient-to-tr from-blue-100 to-blue-100"
    }
  }

  let divClass = `${selectRandomGradientColor()}`

  return (
    <div className="p-6 rounded-md shadow-sm bg-gradient-to-tr from-emerald-50 to-blue-50">
      <div className="pb-2 border-b-2 border-black border-dotted ">
        <a
          className="underline"
          href={`${props.articleHref}`}
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="py-2 mb-2 -mt-2 text-xl font-medium transition-all duration-300 hover:bg-opacity-20 hover:bg-warmgray-400 hover:pl-2">
            {props.articleTitle}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-6 h-6 pb-1 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </h3>
        </a>
        <p className="italic">
          {props.articleAuthor} <span className="not-italic">for</span>{" "}
          {props.articlePublication}
        </p>
      </div>
      <div className="pt-2 custom-sans">
        <p>{props.articleDescription}</p>
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex flex-row -rotate-90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block my-8 rotate-45 w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block my-8 w-7 h-7 rotate-[25deg]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block my-8 -rotate-0 w-7 h-7 rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H4"
        />
      </svg>
    </div>
  )
}

function HeaderText() {
  return (
    <h2 className="text-3xl font-bold uppercase place-self-start">
      More Reading
    </h2>
  )
}
