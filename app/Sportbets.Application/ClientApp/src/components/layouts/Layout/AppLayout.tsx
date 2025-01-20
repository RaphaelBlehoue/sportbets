import { PropsWithChildren } from "react";

const AppLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <section>
        <h1>header + nav</h1>
      </section>
      <main>
        {children}
      </main>
      <footer>
        <h1>footer  + nav</h1>
        </footer>
    </>
  );
};
export {AppLayout}