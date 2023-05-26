import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();

  return (
    <>
      {location?.state?.map((val) => (
        <Grid>
          <h1>{`Welcome ${val.email}`}</h1>
        </Grid>
      ))}
    </>
  );
};
export default Dashboard;
