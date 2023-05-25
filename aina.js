const timeToNumber = (time) => Number(time.replace(":", "."));

const isOpen = (openingTime, closingTime) => {
  const date = new Date().toLocaleTimeString("en", { hour12: false });
  const currentTime = timeToNumber(date.substring(0, 5));
  const time1 = timeToNumber(openingTime);
  const time2 = timeToNumber(closingTime);
  if (currentTime >= time1 && currentTime <= time2) {
    console.log("store is open");
  } else {
    console.log("store is closed");
  }
};

isOpen("08:00", "18:01");
