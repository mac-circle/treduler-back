export const testFN = (req, res, next) => {
  const result = {
    data: "test"
  };
  res.json(result);
};

export const PostTest = (req, res, next) => {
  res.json(req.body);
};
