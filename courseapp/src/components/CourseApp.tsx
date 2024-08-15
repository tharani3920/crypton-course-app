import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../App.module.scss";

type Course = {
  id: number;
  courseName: string;
  courseLesson: string;
  startDate: string;
  lessonsCompleted: string;
  duration: string;
  icon: string;
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
    <div className={styles.coursediv}>
      <div className={styles.headerstyles}>
        <h1>Course List</h1>
        <h3>View all</h3>
      </div>
      <table className={styles.coursetable}>
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
              <td>
                <div className={styles.courseIconText}>
                  <img src={course.icon} alt="icon" />{" "}
                  <div className={styles.courseDetails}>
                    <span className={styles.courseName}>
                      {course.courseName}
                    </span>
                    <span className={styles.courseLesson}>
                      {course.courseLesson}
                    </span>
                  </div>
                </div>
              </td>
              <td className={styles.startDate}>{course.startDate}</td>
              <td className={styles.startDate}>{course.lessonsCompleted}</td>
              <td className={styles.startDate}>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseApp;
