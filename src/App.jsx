import { useState } from "react";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { HeadphoneTabs } from "./components/headphone-tabs/component";
import { ThemeContext } from "./contexts/theme";
import { Button } from "./components/button/component";

export const App = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState(0);
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
          currentHeadphoneId={setCurrentHeadphoneId}
          onTabClick={setCurrentHeadphoneId}
        />
        {currentHeadphoneId && <Headphone headphoneId={currentHeadphoneId} />}
      </Layout>
    </ThemeContext.Provider>
  );
};
