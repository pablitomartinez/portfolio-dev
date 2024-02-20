// import React from 'react'

// export default function About() {
//   return (
//     <div>
//       SOY ABOUT
//     </div>
//   )
// }
export default function About() {
  return (
      <section className="bg-black relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
          <div className="relative z-10 gap-5 items-center lg:flex">
            
              <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                      build your websites with <span className="text-indigo-600">Experiencie</span>
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3">
                      Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                  </p>
                  <a
                      className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                      href="javascript:void()">
                      Try it out
                  </a>
              </div>

              <div className="flex-1 max-w-lg py-5 bg-slate-900 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                  <h3 className="text-3xl text-indigo-600 font-semibold md:text-4xl">
                   Experience
                  </h3>
                  <p className="text-gray-500 leading-relaxed mt-3">
                      Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-3">
                      Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-3">
                      Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                  </p>
                  
              </div>
              
          </div>
      </section>
  )
}
