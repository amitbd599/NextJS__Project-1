import Home from "../Components/Home/Home";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const SuspenseComponent = dynamic(() => import("../Components/Home/Home"), {
  suspense: true,
});
const index = () => {
  return (
    <>
      <Suspense fallback={SuspenseComponent}>
        <Home />
      </Suspense>
    </>
  );
};

export default index;
