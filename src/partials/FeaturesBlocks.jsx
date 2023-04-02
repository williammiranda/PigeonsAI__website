import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Unlock the Full<br/> Potential of Your Sales Team.</h2>
            {/* <p className="text-xl text-gray-400">lorem ipsum</p> */}
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M600 896q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-.235-60Q708 836 784 760.235q76-75.764 76-184Q860 468 784.235 392q-75.764-76-184-76Q492 316 416 391.765q-76 75.764-76 184Q340 684 415.765 760q75.764 76 184 76ZM631 563l-1-117q0-12-8.625-21T600 416q-12.75 0-21.375 8.5T570 446v130q0 5.565 2 10.783Q574 592 579 597l102 101q8.8 9 20.9 9 12.1 0 21.1-8.842 9-8.842 9-21T723 656l-92-93ZM110 446q-12.75 0-21.375-8.675Q80 428.649 80 415.825 80 403 88.625 394.5T110 386h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T210 446H110ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h140q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T210 606H70Zm40 160q-12.75 0-21.375-8.675Q80 748.649 80 735.825 80 723 88.625 714.5T110 706h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T210 766H110Zm490-190Z"/></svg>
              <h4 className="h4 mb-2">Increased Efficiency</h4>
              <p className="text-lg text-gray-400 text-center">Empower your sales reps with instant access to technical knowledge, improving response times and customer satisfaction.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M470 936q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T470 876h310V572q0-58-25-111.5T688 366q-42-41-96-65.5T480 276q-58 0-112 24.5T272 366q-42 41-67 94.5T180 572v224q0 8.5-5.75 14.25T160 816q-33 0-56.5-23.5T80 736v-80q0-23 11-40.5t29-28.5l3-53q9-73 41.5-132t81-100q48.5-41 109-63.5T480 216q66 0 126.5 22.5t108.5 64q48 41.5 80.5 100T837 533l3 52q18 9 29 26.5t11 38.5v92q0 22-11 39t-29 26v69q0 24.75-17.625 42.375T780 936H470ZM360 646q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T390 616q0 12-8.625 21T360 646Zm240 0q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T630 616q0 12-8.625 21T600 646Zm-359-52q-4-59 16.5-107t55-81.5Q347 372 392 354t90-18q91 0 153 57.5T711 537q-94-1-165.5-50.5T435 358q-16 81-67.5 143.5T241 594Z"/></svg>
              <h4 className="h4 mb-2">Expert-Level Support</h4>
              <p className="text-lg text-gray-400 text-center">Ensure your team delivers expert-level information without the need for constant training or updates.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M143 893.033q-10-9.966-10-23Q133 857 143 847l256-256q5-5 10.133-7 5.134-2 11-2Q426 582 431 584q5 2 10 7l139 140 278-311q8-9 20.5-10t21.37 7.87q8.13 8.13 8.63 20.025.5 11.896-7.5 21.105L601 797q-5 5-10.217 7.5Q585.565 807 580 807q-6.261 0-12.13-1.5Q562 804 557 799L420 662 189 893q-9.957 10-22.979 10Q153 903 143 893.033ZM136.913 589q-3.913 0-7.759-2.045-3.846-2.046-6.154-6.955l-17.143-36.857L69 526q-4.91-2.348-6.955-6.261Q60 515.826 60 511.913t2.045-7.759Q64.091 500.308 69 498l36.857-17.143L123 444q2.348-4.909 6.261-6.955 3.913-2.045 7.826-2.045t7.759 2.045q3.846 2.046 6.154 6.955l17.143 36.857L205 498q8 3.871 8 13.935Q213 522 205 526l-36.857 17.143L151 580q-2.348 4.909-6.261 6.955-3.913 2.045-7.826 2.045Zm463-80q-3.913 0-7.759-2.045-3.846-2.046-6.154-6.955l-17.143-36.857L532 446q-4.909-2.348-6.955-6.261-2.045-3.913-2.045-7.826t2.045-7.759q2.046-3.846 6.955-6.154l36.857-17.143L586 364q2.348-4.909 6.261-6.955 3.913-2.045 7.826-2.045t7.759 2.045q3.846 2.046 6.154 6.955l17.143 36.857L668 418q4.909 2.348 6.955 6.261 2.045 3.913 2.045 7.826t-2.045 7.759Q672.909 443.692 668 446l-36.857 17.143L614 500q-2.348 4.909-6.261 6.955-3.913 2.045-7.826 2.045ZM330 388q-4 0-8-2t-6-7l-23.146-49.854L243 306q-5-2-7-6t-2-8q0-4 2-8t7-6l49.854-23.146L316 205q2-5 6-7t8-2q4 0 8 2t6 7l23.146 49.854L417 278q5 2 7 6t2 8q0 4-2 8t-7 6l-49.854 23.146L344 379q-2 5-6 7t-8 2Z"/></svg>
              <h4 className="h4 mb-2">Streamlined Sales Process</h4>
              <p className="text-lg text-gray-400 text-center">Reduce bottlenecks in the sales process by providing your team with quick and accurate answers to technical questions.</p>
            </div>

            {/* 4th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
