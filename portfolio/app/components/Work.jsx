export default function Work(){
  return (
      <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h3 className="text-indigo-600 font-semibold">
                          Trabajos Realizados
                      </h3>
                      <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                          Titulo del proyecto</p>
                      <p className="mt-3 text-gray-600">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                      </p>

                      {/* BOTONES */}
                      <div className="grid grid-rows-1 grid-flow-col" >
                        <a href="javascript:void(0)" className="inline-flex gap-x-1 bg-slate-500 items-center text-white hover:text-indigo-500 duration-150 font-medium">
                            Disvover
                        </a>
                        <a href="javascript:void(0)" className="inline-flex bg-slate-900 gap-x-1 items-center text-white hover:text-indigo-500 duration-150 font-medium">
                            View Code     
                        </a>

                      </div>
                  </div>
                  <div className="flex-1 sm:hidden lg:block">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                  </div>
              </div>
          </div>
      </section>
  )
}
