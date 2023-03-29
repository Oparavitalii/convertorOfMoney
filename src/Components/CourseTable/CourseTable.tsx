import React from "react";


import CourseItems from "./CourseItems";

import { CourseWr, Table, Tr, Th } from "./CourseTable.elements";


export default function CourseTable() {

  return (
    <CourseWr>
      <Table>
        <thead>
          <Tr>
            <Th>Currency</Th>
            <Th>Course</Th>
          </Tr>
        </thead>
        <CourseItems />
      </Table>
      
    </CourseWr>
  );
}
