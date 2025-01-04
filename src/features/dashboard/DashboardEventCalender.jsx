import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Heading from "../../components/Heading";

const events = [
  {
    title: "Tree Planting Drive",
    description: "Join us to plant 50 trees in the community park.",
    time: "10:00 AM - 12:00 PM",
    date: 1736838000000, // Jan 14, 2025
  },
  {
    title: "Graffiti Removal",
    description: "Help clean and paint walls in the downtown area.",
    time: "2:00 PM - 4:00 PM",
    date: 1736838000000, // Jan 14, 2025
  },
  {
    title: "Recycling Workshop",
    description: "Learn best practices for recycling in your area.",
    time: "5:00 PM - 6:00 PM",
    date: 1736838000000, // Jan 14, 2025
  },
  {
    title: "Disaster Relief Fundraiser",
    description: "Participate in raising funds for recent disaster victims.",
    time: "6:00 PM - 8:00 PM",
    date: 1736924400000, // Jan 15, 2025
  },
  {
    title: "Community Health Camp",
    description: "Free health checkups and consultations available.",
    time: "9:00 AM - 1:00 PM",
    date: 1736924400000, // Jan 15, 2025
  },
  {
    title: "Street Animal Vaccination",
    description: "Vaccinate stray animals to prevent diseases.",
    time: "3:00 PM - 5:00 PM",
    date: 1736924400000, // Jan 16, 2025
  },
  {
    title: "Park Cleanup Drive",
    description: "Help clean and beautify our local park.",
    time: "10:00 AM - 12:00 PM",
    date: 1736924400000, // Jan 16, 2025
  },
  {
    title: "Food Distribution Drive",
    description: "Distribute meals to the needy in the community.",
    time: "1:00 PM - 3:00 PM",
    date: 1737097200000, // Jan 17, 2025
  },
  {
    title: "Volunteer Orientation",
    description: "New volunteer orientation and training session.",
    time: "4:00 PM - 6:00 PM",
    date: 1737097200000, // Jan 17, 2025
  },
  {
    title: "Wildlife Rescue Training",
    description: "Learn to assist in wildlife rescue efforts.",
    time: "9:00 AM - 11:00 AM",
    date: 1737183600000, // Jan 18, 2025
  },
  {
    title: "Senior Care Support",
    description: "Provide company and care to senior citizens.",
    time: "2:00 PM - 4:00 PM",
    date: 1737183600000, // Jan 18, 2025
  },
  {
    title: "Community Meal Service",
    description: "Help serve meals to the homeless.",
    time: "12:00 PM - 2:00 PM",
    date: 1737270000000, // Jan 19, 2025
  },
  {
    title: "Pet Adoption Drive",
    description: "Find homes for stray animals in need.",
    time: "3:00 PM - 5:00 PM",
    date: 1737270000000, // Jan 19, 2025
  },
  {
    title: "Emergency First Aid Training",
    description: "Learn basic first aid skills for emergencies.",
    time: "9:00 AM - 11:00 AM",
    date: 1737356400000, // Jan 20, 2025
  },
  {
    title: "Community Fundraiser",
    description: "Raise funds for upcoming community projects.",
    time: "2:00 PM - 5:00 PM",
    date: 1737356400000, // Jan 20, 2025
  },
  {
    title: "Eco-Friendly Craft Workshop",
    description: "Create eco-friendly crafts using recycled materials.",
    time: "10:00 AM - 12:00 PM",
    date: 1737442800000, // Jan 21, 2025
  },
  {
    title: "Blood Donation Camp",
    description: "Donate blood and save lives.",
    time: "1:00 PM - 4:00 PM",
    date: 1737442800000, // Jan 21, 2025
  },
];

function DashboardEventCalender() {
  const [value, onChange] = useState(new Date());

  const filteredEvents = events.filter(
    (event) => event.date === new Date(value).getTime()
  );

  return (
    <div className="calender w-[100%]   shadow-xl row-span-2 flex gap-1">
      <div className="p-1 mb-5">
        <Heading type="h3">Track your events</Heading>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
        <ul className="flex flex-col gap-4 p-4">
          {filteredEvents.length === 0 ? (
            <p>No events for this day</p>
          ) : (
            filteredEvents.slice(0, 3)?.map((event, i) => (
              <li key={i} className="px-2 py-3 bg-gray-100">
                <span className="block text-base font-semibold">
                  {event.title}
                </span>
                <span className="block text-sm">{event.description}</span>
                <span>Time: {event.time}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default DashboardEventCalender;
