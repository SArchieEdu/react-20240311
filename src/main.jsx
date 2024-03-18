/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import ReactDOM from "react-dom/client";
import { Headphone } from "./components/headphone/component";
import { headphones } from "./constants/mock";
import { Layout } from "./components/layout/component";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Layout>
    <div>
      {headphones.map((headphone) => (
        <Headphone headphone={headphone} />
      ))}
    </div>
  </Layout>
);

// root.render(
//   React.createElement("div", {
//     children: headphones.map((headphone) => (
//       <Headphone headphone={headphone} />
//     )),
//   })
// );
