import PrimaryButton, { SecondaryButton, TertiaryButton } from "./components/Button";
import { GlobalStyle } from "./utils/Global";

const App = () => {
  return (
    <main> 
      <PrimaryButton modifiers={"small"}>Hi there</PrimaryButton>
      <SecondaryButton modifiers={["large","warning","warningSecondary"]}>Hi there</SecondaryButton>
      <TertiaryButton >Hi there</TertiaryButton>
      <GlobalStyle/>
    </main>
  );
};

export default App;
