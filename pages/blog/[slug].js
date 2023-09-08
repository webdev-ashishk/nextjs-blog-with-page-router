import { useRouter } from "next/router";
import React from "react";

const DynamicRoutes = () => {
  const router = useRouter();
  return (
    <div>
      <h2>dynamic routes: {router.query.slug} </h2>
    </div>
  );
};

export default DynamicRoutes;
