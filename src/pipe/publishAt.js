const publishAt = (value) => {
  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  const ONE_MONTH = 30 * ONE_DAY;
  const ONE_YEAR = 12 * ONE_MONTH;

  if (!value) {
    return '';
  }
  const publishTime = new Date(value).getTime();
  const now = new Date().getTime();

  const diff = now - publishTime;

  if (diff < ONE_MINUTE) {
    return `${Math.floor(diff / 1000)} seconds ago`;
  } else if (diff < ONE_HOUR) {
    return `${Math.floor(diff / ONE_MINUTE)}minutes ago`;
  } else if (diff < ONE_DAY) {
    return `${Math.floor(diff / ONE_HOUR)} hours ago`;
  } else if (diff < ONE_MONTH) {
    return `${Math.floor(diff / ONE_DAY)} days ago`;
  } else if (diff < ONE_YEAR) {
    return `${Math.floor(diff / ONE_MONTH)} months ago`;
  }
  return `${Math.floor(diff / ONE_YEAR)} years ago`;
  
}
export default publishAt;