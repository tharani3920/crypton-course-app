import React, { useEffect, useState } from "react";
import axios from "axios";

type Course = {
  id: number;
  courseName: string;
  startDate: string;
  lessonsCompleted: number;
  duration: string;
};

const CourseApp: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app">
      <h1>Course List</h1>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lessons Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.courseName}</td>
              <td>{course.startDate}</td>
              <td>{course.lessonsCompleted}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseApp;
