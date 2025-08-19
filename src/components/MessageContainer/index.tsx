import { Bounce, ToastContainer } from "react-toastify";

type MessageContainerProps = {
  children: React.ReactNode;
};
const MessageContainer = ({ children }: MessageContainerProps) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {children}
    </>
  );
};

export default MessageContainer;
