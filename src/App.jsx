import { useState } from "react";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { HeadphoneTabs } from "./components/headphone-tabs/component";
import { ThemeContext } from "./contexts/theme";
import { Button } from "./components/button/component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHeadphones } from "./redux/entities/headphone/thunks/get-headphones";

export const App = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState(0);
  const [theme, setTheme] = useState("default");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphones());
  }, []);

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
