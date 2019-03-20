export const testFN = (req, res, next) => {
  const result = {
    data: "test"
  };
  res.json(result);
};
