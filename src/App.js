import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  SecondaryButton,
  TertiaryButton,
  PrimaryButton,
  SignUpModal,
} from "./components";
import { darkTheme, defaultTheme } from "./utils";
import { GlobalStyle } from "./utils/Global";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        onClick={() => setUseDarkTheme((prev) => !prev)}
        style={{
          padding: 8,
          background: "none",
          margin: "0 16px 26px",
          minWidth: 80,
        }}
      >
        {useDarkTheme ? "Light Theme" : "Dark Theme"}
      </button>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        style={{
          padding: 8,
          background: "none",
          margin: "0 16px 26px",
          minWidth: 80,
        }}
      >
        Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? darkTheme.primaryColor
            : defaultTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />

        {/* <PrimaryButton modifiers={["primaryButtonError"]}>Hi there</PrimaryButton>
        <SecondaryButton
          modifiers={["large", "warning", "secondaryButtonWarning"]}
        >
          Hi there
        </SecondaryButton>
        <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
          Hi there
        </TertiaryButton> */}
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
