const getRandomStarsNote = () => {
  const MAX_NOTE = 5;
  return Math.ceil(Math.random() * MAX_NOTE);
};

export default getRandomStarsNote;
