import { credential } from "./credential";

export const Webauthn = () => {
  const handleFunc = () => {
    const f = async () => {
      await credential();
    };
    f();
  };

  return <button onClick={handleFunc}>create credential</button>;
};
