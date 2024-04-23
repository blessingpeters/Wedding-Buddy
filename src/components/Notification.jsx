/* eslint-disable react/prop-types */
import { useState } from "react";

const NotificationItem = ({ title, message, timestamp, time }) => {
  return (
    <div className="flex justify-between items-center bg-[#EDE7EA] shadow rounded-lg p-4 mb-2">
      <div>
        <h4 className="font-semibold text-burgundy-100">{title}</h4>
        <p className="text-[#AFABAB] text-sm">{message}</p>
      </div>
      <div className="text-[#AFABAB] text-xs">
        <p className="">{timestamp}</p>
        <p className="text-right">{time}</p>
      </div>
    </div>
  );
};

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  return (
    <section className="lg:px-16 sm:px-8 px-3 py-10 font-raleway">
      <div className="flex justify-between items-center pb-4 text-graywhite-600 font-semibold">
        <h1 className="text-2xl">Notification</h1>
        <button className="text-burgundy-100 bg-[#EDE7EA] p-2 rounded-xl">
          Mark all as read
        </button>
      </div>
      <div>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            title={notification.title}
            message={notification.message}
            timestamp={notification.timestamp}
            time={notification.time}
          />
        ))}
      </div>
    </section>
  );
};
const notificationsData = [
  {
    id: 1,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 2,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 3,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 4,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 5,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 6,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 7,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },
  {
    id: 8,
    title: "A Client has rated your services",
    message: "A client gave you four-star rating",
    timestamp: "Tuesday, June 14, 2022",
    time: "8:16 PM",
  },

];

export default Notification;
