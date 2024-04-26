import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export const formatDate = (date) => {
  if (dayjs(date).isValid()) {
    return new Date(date).toLocaleDateString();
  }
  return "-";
};

export const formatDateTime = (date) => {
  // Parse the date string using dayjs
  const parsedDate = dayjs(date);

  // Check if the parsed date is valid
  if (parsedDate.isValid()) {
    // Format the date and time according to your requirements
    return parsedDate.format("YYYY-MM-DD HH:mm:ss");
  }

  // Return a fallback value if the date is invalid
  return "-";
};

export const formatTime = (date) => {
  if (dayjs(date).isValid()) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return "";
};
