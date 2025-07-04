import { Ellipsis, FunnelX } from 'lucide-react'
import React from 'react'
import {
  LineChart, BarChart, Bar, LabelList, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, ReferenceLine, PieChart, Pie, Cell,
} from 'recharts';

const ProjectDashboard = () => {

  const data = [
    { date: '05', Upcoming: 3, Incomplete: 2, Overdue: 6, Completed: 3 },
    { date: '06', Upcoming: 4, Incomplete: 3, Overdue: 5, Completed: 4 },
    { date: '07', Upcoming: 4, Incomplete: 3, Overdue: 6, Completed: 5 },
    { date: '08', Upcoming: 5, Incomplete: 6, Overdue: 3, Completed: 6 },
    { date: '09', Upcoming: 6, Incomplete: 4, Overdue: 3, Completed: 5 },
    { date: '10', Upcoming: 5, Incomplete: 5, Overdue: 4, Completed: 5 },
    { date: '11', Upcoming: 4, Incomplete: 4, Overdue: 4, Completed: 9 },
    { date: '12', Upcoming: 5, Incomplete: 5, Overdue: 5, Completed: 6 },
    { date: '13', Upcoming: 6, Incomplete: 5, Overdue: 5, Completed: 7 },
    { date: '14', Upcoming: 5, Incomplete: 6, Overdue: 4, Completed: 8 },
    { date: '15', Upcoming: 6, Incomplete: 7, Overdue: 3, Completed: 9 },
    { date: '16', Upcoming: 5, Incomplete: 5, Overdue: 3, Completed: 7 },
    { date: '17', Upcoming: 6, Incomplete: 6, Overdue: 2, Completed: 8 },
    { date: '18', Upcoming: 7, Incomplete: 7, Overdue: 2, Completed: 10 },
  ];


  const barData = [
    { name: "Not Started", value: 36, fill: "#9CA3AF" },   // gray
    { name: "On progress", value: 40, fill: "#FACC15" },   // yellow
    { name: "On review", value: 17, fill: "#818CF8" },     // purple
    { name: "Completed", value: 48, fill: "#22C55E" },     // green
  ];

  const pieData = [
    { name: 'Completed', value: 50, color: '#5C61F2' }, // Blue/Purple
    { name: 'In Progress', value: 41, color: '#A7A8AC' }, // Grey
    { name: 'Pending', value: 50, color: '#EA5455' }, // Red
  ];

  const total = data.reduce((acc, cur) => acc + cur.value, 0);



  return (
    <div className=' p-4 px-4'>
      {/*--Uppwer Four tasks status---*/}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
        {/*--Upcoming tasks---*/}
        <div className='border border-gray-200  rounded-xl '>
          <div className='border-b px-4 py-2.5 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Upcoming tasks</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-4'>
            <h2 className='text-[26px] font-medium text-center'>85%</h2>
            <h3 className='text-[#7f7f89] pt-1.5 text-[13px] text-center'><span className='text-[#0FA15D] font-semibold text-[14px]'>2.55</span> Increased vs last week</h3>
          </div>
        </div>

        {/*--Incomplete tasks---*/}
        <div className='border border-gray-200  rounded-xl '>
          <div className='border-b px-4 py-2.5 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Incomplete tasks</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-4'>
            <h2 className='text-[26px] font-medium text-center'>85%</h2>
            <h3 className='text-[#7f7f89] pt-1.5 text-[13px] text-center'><span className='text-[#0FA15D] font-semibold text-[14px]'>2.55</span> Increased vs last week</h3>
          </div>
        </div>

        {/*--Overdue tasks---*/}
        <div className='border border-gray-200  rounded-xl '>
          <div className='border-b px-4 py-2.5 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Overdue tasks</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-4'>
            <h2 className='text-[26px] font-medium text-center'>85%</h2>
            <h3 className='text-[#7f7f89] pt-1.5 text-[13px] text-center'><span className='text-[#0FA15D] font-semibold text-[14px]'>2.55</span> Increased vs last week</h3>
          </div>
        </div>

        {/*--Completed tasks---*/}
        <div className='border border-gray-200  rounded-xl '>
          <div className='border-b px-4 py-2.5 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Completed tasks</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className='px-4 py-4'>
            <h2 className='text-[26px] font-medium text-center'>85%</h2>
            <h3 className='text-[#7f7f89] pt-1.5 text-[13px] text-center'><span className='text-[#0FA15D] font-semibold text-[14px]'>2.55</span> Increased vs last week</h3>
          </div>
        </div>
      </div>

      {/*--Project chart---*/}
      <div className='border border-gray-200  rounded-xl mt-3'>
        <div className='border-b px-4 py-2.5 border-gray-200 flex justify-between items-center'>
          <h1 className='font-medium text-[14px]'>Task completion over time</h1>
          <button className='flex  text-[14px] font-medium items-center border px-4  p-1.5 rounded-md shadow-xs gap-2 cursor-pointer border-gray-300 '>
            <FunnelX size={18} />
            Filter
          </button>
        </div>
        <div className="w-full h-[400px] font-medium text-[12px] pb-5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <ReferenceLine x="11" stroke="#22c55e" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="Upcoming" stroke="#9ca3af" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Incomplete" stroke="#facc15" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Overdue" stroke="#ef4444" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Completed" stroke="#22c55e" strokeWidth={2} dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 grid-cols-1 gap-3'>
        {/*--Total bar tasks chart---*/}
        <div className='border border-gray-200  rounded-xl mt-3'>
          <div className='border-b px-4 py-3 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Total task by section</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>
          <div className="w-full h-[300px] font-medium text-[12px] pb-5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                barCategoryGap={50}
                margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 50]} />
                <Tooltip />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  <LabelList dataKey="value" position="top" fill="#fff" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/*--Total pie tasks chart---*/}
        <div className='border border-gray-200 rounded-xl mt-3'>
          <div className='border-b px-4 py-3 border-gray-200 flex justify-between items-center'>
            <h1 className='font-medium text-[14px]'>Total task by priority</h1>
            <Ellipsis className='text-[#7f7f89]' size={18} />
          </div>

          <div className="w-full h-[300px] font-medium text-[12px] pb-5 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Text */}
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-lg font-semibold text-black">141 Tasks</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDashboard
