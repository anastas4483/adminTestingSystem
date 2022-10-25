export const getTimeFromSec = (sec: number) => {
  const num = (val: number) => {
    val = Math.floor(val);
    return val < 10 ? "0" + val : val;
  };

  var hours = (sec / 3600) % 24,
    minutes = (sec / 60) % 60,
    seconds = sec % 60;
  return num(hours) + ":" + num(minutes) + ":" + num(seconds);
};
