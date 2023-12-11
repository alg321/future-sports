import React from "react";
import { useState } from "react";

const Carousel = () => {
  const classesData = [
    {
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Weighlifting',
      description: 'Intermediate-level weightlifting class emphasizing strength training, muscle development, and proper lifting techniques.',
    },
    {
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Yoga',
        description: 'A gentle and beginner-friendly yoga session focusing on flexibility, relaxation, and breath control.',
      },
      {
        img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Pilates',
        description: 'An intermediate-level Pilates class designed to improve core strength, posture, and overall body toning.',
      },
      {
        img: 'https://images.unsplash.com/photo-1608138278545-366680accc66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cardio',
        description: 'High-intensity cardiovascular workout targeting endurance and stamina for those with advanced fitness levels.',
      },
      {
        img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'HIIT',
        description: 'High-Intensity Interval Training (HIIT) for advanced participants, combining short bursts of intense exercise with brief rest periods.',
      },
      {
        img: 'https://images.unsplash.com/photo-1527933053326-89d1746b76b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Zumba',
        description: 'An energetic and dance-based fitness class suitable for beginners, featuring Latin-inspired music and choreography.',
      },
      {
        img: 'https://images.unsplash.com/photo-1606335543042-57c525922933?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Boxing',
        description: 'Intermediate-level boxing class incorporating boxing techniques, cardio drills, and strength training.',
      },
    // Add other class data items
  ];

  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="text-white flex h-full w-full items-center justify-center">
      <div className="w-full max-w-full">
        <ul className="flex h-[700px] gap-2">
          {classesData.map((classTitle, index) => (
            <li
              key={classTitle.title}
              className={`transition-all duration-300 ${
                activeItem === index
                  ? 'flex-grow hover:scale-x-120'
                  : 'flex-shrink hover:scale-x-50'
              } w-[160px]`}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover transform scale-x-100"
                  src={classTitle.img}
                  alt={classTitle.title}
                />
                {activeItem === index && (
                  <div className="absolute inset-0 flex flex-col justify-items-center justify-center">
                    <h3 className="text-4xl font-bold items-start pt-40">
                      {classTitle.title}
                    </h3>
                    <p className="flex text-lg py-4">{classTitle.description}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
