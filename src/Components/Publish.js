import React, { useState } from 'react';


const Publish = () => {
  

  return (
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
              <form onSubmit>
                  <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
                      <div className="sm:col-span-12">
                      <h6 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white">
                        Publish Your Recipe
                        </h6>
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="name" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Full name
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="name"
                              name="name"
                              type="text"
                            
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="email" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Email
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="email"
                              name="email"
                              type="email"
                              
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="phone" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Phone
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              id="phone"
                              name="phone"
                              type="text"
                              
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="adImage" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Attach Recipe Photo
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <input
                              type="file"
                              name="adImage"
                              id="adImage"
                              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                              required
                          />
                      </div>

                      <div className="sm:col-span-3">
                          <label htmlFor="description" className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                              Description
                          </label>
                      </div>
                      <div className="sm:col-span-9">
                          <textarea
                              id="description"
                              name="description"
                              className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              rows="6"
                              placeholder="Add anything else you want to share."
                              required
                          ></textarea>
                      </div>
                  </div>
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none">
                      Submit Advertisement
                  </button>
              </form>
          </div>
      </div>
  );
};

export default Publish;
