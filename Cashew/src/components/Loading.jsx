import React from "react";

const Loading = () => {
  return(
    <div className="flex items-center justify-center h-screen bg-[#f3eee9]">
      <div className="spinner border-4 border-brown-700 border-t-transparent border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>
  )
}

export default Loading;