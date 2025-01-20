import { PropsWithChildren } from "react";

const ContentLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <h3>title</h3>
      {children}
    </>
  );
};
export {ContentLayout}