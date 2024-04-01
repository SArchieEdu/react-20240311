import { useState } from "react";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { headphones } from "./constants/mock";
import { HeadphoneTabs } from "./components/headphone-tabs/component";
import { ThemeContext } from "./contexts/theme";
import { Button } from "./components/button/component";

export const App = () => {
  const [currentHeadphoneIndex, setCurrentHeadphoneIndex] = useState(0);
  const currentHeadphone = headphones[currentHeadphoneIndex];
  const [theme, setTheme] = useState("default");

  return (
    <ThemeContext.Provider value={theme}>
      <Button
        onClick={() => setTheme(theme === "default" ? "dark" : "default")}
      >
        {theme}
      </Button>
      <Layout>
        <HeadphoneTabs
          headphones={headphones}
          currentIndex={setCurrentHeadphoneIndex}
          onTabClick={setCurrentHeadphoneIndex}
        />
        {currentHeadphone && <Headphone headphone={currentHeadphone} />}
      </Layout>
    </ThemeContext.Provider>
  );
};
