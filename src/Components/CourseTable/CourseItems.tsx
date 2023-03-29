import React from "react";
import { useAppSelector } from "../../Hooks/store";

import { Tr, Td ,TdNumbers} from "./CourseTable.elements";

export default function CourseItems() {
  const course = useAppSelector((state) => state.store.courseData);

  return (
    <tbody>
      {course &&
        course.map((course: any) => {
          return (
            <Tr key={course.cc}>
              <Td>{course.cc}</Td>
              <TdNumbers>{course.rate.toFixed(2)}</TdNumbers>
            </Tr>
          );
        })}
    </tbody>
  );
}
