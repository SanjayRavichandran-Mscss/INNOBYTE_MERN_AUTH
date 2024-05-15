// import React from 'react'

// export default function Home() {
//   return (
//     <div className='mt-10'>
//      <h1 className='text-blue-900 font-serif text-6xl flex justify-left'>Hello learners...!</h1>
//      <h2 className='text-3xl '>Welcome to our Book-Store App</h2>
//      <p className='pt-2 pl-2  text-sm mt-6 bg-yellow-600 flex justify-left w-96 font-semibold'>Are you a New User ? please Register. </p>
//      <p className='pb-2 pl-2 text-sm bg-yellow-600 flex justify-left w-96 font-semibold'>Have an Account , please Login. </p>

//     </div>
//   )
// }

import React from "react";

export default function Home() {
  return (
    <div
      className="mt-10 h-96 w-full rounded-3xl"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/972/48/HD-wallpaper-stack-of-books-blue-background-education-concepts-books-library-school-learning-concepts.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-blue-900  text-6xl flex justify-left">
        Hello learners...!
      </h1>
      <h2 className="text-3xl text-white">Welcome to our Book-Store App</h2>
      <p className="text-4xl text-yellow-500 flex justify-left mt-10 pl-3 font-extrabold text-center">
        There is no friend as loyal as a book
      </p>
      <h3 className="text-2xl text-left mt-16 ml-4">login to Explore...</h3>
      <h3 className="text-2xl text-left ml-4">
        Don't have an account?{" "}
        <span className="text-orange-600 text-3xl font-extrabold">
          Register now
        </span>{" "}
      </h3>
    </div>
  );
}
