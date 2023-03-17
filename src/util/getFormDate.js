function getFormDate() {
  let time =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate();
  return time;
}
export { getFormDate };
