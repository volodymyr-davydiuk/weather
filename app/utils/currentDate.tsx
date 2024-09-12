export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString(
    'en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );
  return currentDate;
};