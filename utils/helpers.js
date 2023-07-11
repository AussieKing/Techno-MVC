module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    const day = new Date(date);
    const hrs = day.getHours().toString().padStart(2, '0');
    const mins = day.getMinutes().toString().padStart(2, '0');
    const formDate = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()} ${hrs}:${mins}`;
    const formTime = `${hrs}:${mins}`;
    return `${formDate} (${formTime})`;
  }
};
