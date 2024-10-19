import React, { useState } from "react"
import Logo from '../Assets/Logo.png'

export default function SideNavigationBasic() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  return (
    <>
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <a
      aria-label="CookBookie logo"
      className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
      href="javascript:void(0)"
    >
      <img
        src={Logo}
        alt="CookBookie Logo"
        className="h-8 w-8" 
      />
      CookBookie
    </a>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-3 py-4">
              <li className="px-3">
                <a
                  href="/"
                  className="flex items-center gap-8 rounded p-3 text-slate-700 transition-colors hover:bg-yellow-50 hover:text-yellow-500 focus:bg-yellow-50 aria-[current=page]:bg-yellow-50 aria-[current=page]:text-yellow-500 "
                >
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Home
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="#"
                  className="flex items-center gap-8 rounded p-3 text-slate-700 transition-colors hover:bg-yellow-50 hover:text-yellow-500 focus:bg-yellow-50 aria-[current=page]:bg-yellow-50 aria-[current=page]:text-yellow-500 "
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Profile Settings
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/publish"
                  className="flex items-center gap-8 rounded p-3 text-slate-700 transition-colors hover:bg-yellow-50 hover:text-yellow-500 focus:bg-yellow-50 aria-[current=page]:bg-yellow-50 aria-[current=page]:text-yellow-500 "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Publish
                  </div>
                </a>
              </li>
             
              <li className="px-3">
                <a
                  href="/history"
                  className="flex items-center gap-8 rounded p-3 text-slate-700 transition-colors hover:bg-yellow-50 hover:text-yellow-500 focus:bg-yellow-50 aria-[current=page]:bg-yellow-50 aria-[current=page]:text-yellow-500"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    History
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <footer class="p-3 border-t border-slate-200">
    <a href="#" class="flex items-center gap-3 p-3 transition-colors rounded text-slate-900 hover:text-yellow-500 ">
      <div class="flex items-center self-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-label="Dashboard icon" role="graphics-symbol">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm font-medium truncate">
        Logout
      </div>
    </a>
  </footer>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Basic side navigation menu --> */}
    </>
  )
}