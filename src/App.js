import PrimaryButton, { SecondaryButton, TertiaryButton } from "./components/Button";
import { GlobalStyle } from "./utils/Global";

const App = () => {
  return (
    <main>
      <PrimaryButton>Hi there</PrimaryButton>
      <SecondaryButton>Hi there</SecondaryButton>
      <TertiaryButton>Hi there</TertiaryButton>
      <GlobalStyle/>
    </main>
  );
};

export default App;
