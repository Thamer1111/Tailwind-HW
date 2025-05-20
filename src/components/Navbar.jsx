import React from 'react'

function Navbar() {
  return (
    <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" alt="United Logo" className="w-6 h-6" />
            <nav className="flex gap-6 text-sm">
              <a href="#" className="p-2 rounded-xl hover:bg-blue-500">Book</a>
              <a href="#" className="p-2 rounded-xl hover:bg-blue-500">My trips</a>
              <a href="#" className="p-2 rounded-xl hover:bg-blue-500">Travel info</a>
              <a href="#" className="p-2 rounded-xl hover:bg-blue-500">MileagePlus®</a>
              <a href="#" className="p-2 rounded-xl hover:bg-blue-500">Deals</a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="p-2 rounded-xl hover:bg-blue-500">English - US</a>
            <a href="#" className="p-2 rounded-xl hover:bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></a>
            <a href="#" className="p-2 rounded-xl hover:bg-blue-500"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></a>
          </div>
        </div>
      </div>
  )
}

export default Navbar