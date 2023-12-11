import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Video1 from '../assets/VideoBanner.mp4'


const ClubTimetables = () => {
  // Sample data for multiple clubs with their timetables and locations
  const clubsData = [
    {
      clubName: 'Cityville',
      location: '123 Main Street, Cityville',
      timetable: [
        { time: '7:00 AM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
        { time: '8:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
        { time: '9:00 AM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
        { time: '10:00 AM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
        { time: '1:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
        { time: '2:00 PM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
        { time: '4:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
        { time: '5:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
        { time: '6:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
        // Add more rows for different times
      ],
    },
    {
      clubName: 'Townsville',
      location: '456 Oak Avenue, Townsville',
      timetable: [
        { time: '7:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
        { time: '8:00 AM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
        { time: '9:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
        { time: '10:00 AM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
        { time: '12:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Yoga', friday: 'HIIT' },
        { time: '1:00 PM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
        // Add more rows for different times
      ],
    },
    // Add more clubs as needed
    {
        clubName: 'Brisbane',
        location: '456 Oak Avenue, Brisbane',
        timetable: [
          { time: '7:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
          { time: '8:00 AM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
            { time: '9:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
            { time: '10:00 AM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
          { time: '12:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '1:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
          { time: '2:00 PM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
          { time: '4:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '5:00 PM', monday: 'Pilates', tuesday: 'Yoga', wednesday: 'Cycle', thursday: 'HIIT', Friday: 'Boxing' },
          { time: '6:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '7:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
            
          // Add more rows for different times
        ],
      },
      {
        clubName: 'Gold Coast',
        location: '432 Winter Road, Gold Coast',
        timetable: [
          { time: '7:00 AM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
          { time: '8:00 AM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '10:00 AM', monday: 'Pilates', tuesday: 'Yoga', wednesday: 'Cycle', thursday: 'HIIT', Friday: 'Boxing' },
          { time: '12:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Cardio', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '2:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Weightlifting', friday: 'Yoga' },
          { time: '4:00 PM', monday: 'Zumba', tuesday: 'Boxing', wednesday: 'Cardio', thursday: 'Pilates', friday: 'Yoga' },
          { time: '5:00 PM', monday: 'Yoga', tuesday: 'Pilates', wednesday: 'Weightlifting', thursday: 'Weightlifting', friday: 'HIIT' },
          { time: '6:00 PM', monday: 'Boxing', tuesday: 'Cycle', wednesday: 'HIIT', thursday: 'Cardio', friday: 'Yoga' },
            
          // Add more rows for different times
        ],
      },
  ];

  return (
    <div>
    <video className=' blur-lg object-cover h-full w-full absolute z-[-1]' src={Video1} autoPlay loop muted />
    <Tabs id="controlled-tabs" selectedTabClassName="text-white">
      <TabList>
        {clubsData.map((club) => (
          <Tab key={club.clubName}>{club.clubName}</Tab>
        ))}
      </TabList>

      {clubsData.map((club) => (
        <TabPanel key={club.clubName}>
          <div className="mb-8 p-4 rounded shadow">
            <h2 className="text-4xl  text-[#ae3a3a] font-semibold mb-2">{club.clubName}</h2>
            <p className="text-[#b33737]  text-2xl mb-4">Location: {club.location}</p>
            <table className="table-fixed w-full text-white">
              <thead className="bg-gray border-b-2 border-gray-200">
                <tr>
                  <th className="p-3  font-semibold text-xl tracking-wide text-left">Time</th>
                  <th className="p-3 font-semibold text-xl tracking-wide text-left">Monday</th>
                  <th className="p-3 font-semibold text-xl tracking-wide text-left">Tuesday</th>
                  <th className="p-3 font-semibold text-xl tracking-wide text-left">Wednesday</th>
                  <th className="p-3 font-semibold text-xl tracking-wide text-left">Thursday</th>
                  <th className="p-3 font-semibold text-xl tracking-wide text-left">Friday</th>
                </tr>
              </thead>
              <tbody>
                {club.timetable.map((row) => (
                  <tr key={row.time}>
                    <td className="p-3 text-sm font-semibold tracking-wide text-left">{row.time}</td>
                    <td className="p-3">{row.monday}</td>
                    <td className="p-3">{row.tuesday}</td>
                    <td className="p-3">{row.wednesday}</td>
                    <td className="p-3">{row.thursday}</td>
                    <td className="p-3">{row.friday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      ))}
    </Tabs>
    </div>
  );
};

export default ClubTimetables;
