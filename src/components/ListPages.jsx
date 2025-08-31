import { Link, useLocation,  } from "react-router-dom";
import React from 'react'

function ListPages() {
const location = useLocation()

  return (

<aside className="w-[200px] border-r bg-white fixed top-[64px] h-[calc(100vh-64px)] p-4">
    <div className="flex flex-col gap-2">
      <Link to="/water"  className={`btn btn-sm ${
          location.pathname === "/water" ? "bg-purple-600" : "bg-purple-400"
        } text-white rounded-lg`}>
        Water
      </Link>
      <Link to="/energetic" className={`btn btn-sm ${location.pathname === "/energetic" ? "bg-purple-600" : "bg-purple-400"} text-white rounded-lg`}>
        Energetic
      </Link>
      <Link to="/fizzy-drink" className={`btn btn-sm ${location.pathname === "/fizzy-drink" ? " bg-purple-600" : " bg-purple-400"} text-white rounded-lg`}>
        Fizzy-drink
      </Link>
      <Link to="/chips" className={`btn btn-sm ${
          location.pathname === "/chips" ? "bg-purple-600" : "bg-purple-400"
        } text-white rounded-lg`}>
        Chips
      </Link>
      <Link to="/chocolate"  className={`btn btn-sm ${
          location.pathname === "/chocolate" ? "bg-purple-600" : "bg-purple-400"
        } text-white rounded-lg`}>
        Chocolate
      </Link>
    </div>
  </aside>


  )
}

export default ListPages
