const getRandomNumberReviews = () => {
  const MAX_REVIEW = 1000;
  return Math.ceil(Math.random() * MAX_REVIEW);
};

export default getRandomNumberReviews;
