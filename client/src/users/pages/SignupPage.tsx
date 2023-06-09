import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const SignupPage = () => {
  const user = false;
  // const user = true;

  if (user) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <Container>
      <PageHeader
        title="Signup Page"
        subtitle="In order to register, fill out the form and click the submit button"
      />
    </Container>
  );
};

export default SignupPage;
