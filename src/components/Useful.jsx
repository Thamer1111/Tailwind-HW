import React from 'react'

function Useful() {
    let UsefulLst =[
            { title: 'Plan your trip', desc: 'Find a destination and any entry requirements.' },
            { title: 'Visit the Help Center', desc: 'Find info on refunds, bags, seats and more.' },
            { title: 'Stay connected', desc: 'Get Wi-Fi for your next flight.' },
            { title: 'Time to start packing', desc: 'Learn more about bringing bags on your trip.' },
            { title: 'What to know before you go', desc: 'The world of travel has changed, find out how.' },
            { title: "See what's on your flight", desc: 'View your seating, food and entertainment options.' }
          ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">Useful links for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UsefulLst.map((link, i) => (
            <div key={i} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.desc}</p>
              </div>
              <span className="text-blue-600 text-xl">→</span>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Useful