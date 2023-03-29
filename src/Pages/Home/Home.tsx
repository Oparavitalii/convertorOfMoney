import React, { FC, useEffect } from "react";
import ConvertorForm from "../../Components/ConvertorForm.tsx/ConvertorForm";
import CourseTable from "../../Components/CourseTable/CourseTable";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { AppWr } from "./Home.elements";

import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import { fetchCourse } from "../../store/courseSlice";
import Loader from "../../Components/Loader/Loader";
import Error from "../../Components/Error/Error";

export const Home: FC<{}> = () => {
  const { loading, error } = useAppSelector((store) => store.store);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loader />;
  }

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
