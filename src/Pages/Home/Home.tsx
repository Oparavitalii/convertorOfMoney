import React, { FC, useEffect } from "react";
import ConvertorForm from "../../Components/ConvertorForm.tsx/ConvertorForm";
import CourseTable from "../../Components/CourseTable/CourseTable";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { AppWr } from "./Home.elements";

import { useAppDispatch } from "../../Hooks/store";
import { fetchCourse } from "../../store/courseSlice";

export const Home: FC<{}> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);

  return (
    <AppWr>
      <Header />
      <CourseTable />
      <ConvertorForm />
      <Footer />
    </AppWr>
  );
};

export default Home;
