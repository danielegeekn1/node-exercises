import cors from "cors";
export const corsOptionsMiddleware = () => {
  const corsOptions = {
    origin: "http://localhost3000/resources",
  };
  return cors(corsOptions);
};
