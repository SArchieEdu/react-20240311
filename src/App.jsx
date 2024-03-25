import { useState } from "react";
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { headphones } from "./constants/mock";
import { HeadphoneTabs } from "./components/headphone-tabs/component";
import { useEffect } from "react";

export const App = () => {
  const [currentHeadphoneIndex, setCurrentHeadphoneIndex] = useState(0);
  const currentHeadphone = headphones[currentHeadphoneIndex];

  useEffect(() => {
    const callback = () => {};

    document.addEventListener("scroll", callback);

    return () => {
      document.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <Layout>
      <HeadphoneTabs
        headphones={headphones}
        currentIndex={setCurrentHeadphoneIndex}
        onTabClick={setCurrentHeadphoneIndex}
      />
      {currentHeadphone && <Headphone headphone={currentHeadphone} />}
    </Layout>
  );
};
