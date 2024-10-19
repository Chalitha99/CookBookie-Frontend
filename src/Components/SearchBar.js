import React from "react";  

export default function FormElementsSearchRoundedBaseBasic() {  
  return (  
    <>  
      <div className="relative my-6">  
        <input  
          id="id-s03"  
          type="search"  
          name="id-s03"  
          placeholder="Search here"  
          aria-label="Search content"  
          className="search-input peer relative h-10 w-full rounded-full border border-gray-300 px-4 pr-12 text-sm text-gray-700 outline-none transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500"  
        />  
        <svg  
          xmlns="http://www.w3.org/2000/svg"  
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer text-gray-400"  
          fill="none"  
          viewBox="0 0 24 24"  
          stroke="currentColor"  
          strokeWidth="1.5"  
          aria-hidden="true"  
          aria-label="Search icon"  
          role="graphics-symbol"  
        >  
          <path  
            strokeLinecap="round"  
            strokeLinejoin="round"  
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"  
          />  
        </svg>  
      </div>  
    </>  
  );  
}