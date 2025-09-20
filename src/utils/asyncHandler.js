const asyncHandler = (requestHnadler) => {
    return (req, res, next) =>{
        Promise.resolve(requestHnadler(req, res, next)).catch((err) => next(err))
    }
}
















export { asyncHandler };

// const asyncHandler = (fn) => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
