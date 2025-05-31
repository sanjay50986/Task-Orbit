import React from 'react';

const data = [
  {
    name: 'Aerotect Web Design',
    tasks: 12,
    color: '#B4DD3F',
  },
  {
    name: 'Climtown App Redesign',
    tasks: 8,
    color: '#2DD4BF',
  },
  {
    name: 'Uwo App Redesign',
    tasks: 4,
    color: '#A78BFA',
  },

 
  
];

const ProjectTasksChart = () => {
  const maxTasks = Math.max(...data.map(item => item.tasks));

  return (
    <div className="p-4 space-y-5 bg-white rounded-xl">
      {data.map((item, index) => (
        <div key={index}>
          {/* Progress Bar */}
          <div className="w-full h-3 rounded-full mb-2 overflow-hidden bg-[#f3f4f6]">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(item.tasks / maxTasks) * 100}%`,
                backgroundColor: item.color,
              }}
            />
          </div>

          {/* Label + Tasks Count */}
          <div className="flex items-center justify-between text-sm font-medium text-[#7f7f89]">
            <div className="flex items-center space-x-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </div>
            <span className="text-[#7f7f89]">{item.tasks} Tasks</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTasksChart;
