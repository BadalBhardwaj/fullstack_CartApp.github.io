import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,MenuContainer,Login,Footer} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-18 px-4 md:px-16 py-4 w-full h-auto">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menu" element={<MenuContainer />} />
            <Route path="/login" />
            <Route path="/about" />
          </Routes>
        </main>
        <main className="w-full h-full flex flex-col items-center justify-center ">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<Footer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;

