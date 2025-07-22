import React from 'react';
import { useParams } from 'react-router-dom';

const studentData = {
  '1': { name: 'abbu', age: 26, course: 'B.Tech' },
  '2': { name: 'asim', age: 25, course: 'B.E' },
  '3': { name: 'ashwith', age: 24, course: 'B.Arch' },
  '4': { name: '', age: 28, course: 'B.Tech' }
};

function StudentDetail() {
  const { id } = useParams();
  const student = studentData[id];

  if (!student) {
    return <h2>Student Data Not Found</h2>;
  }

  return (
    <div>
      {/* Rest of the component to display student details */}
    </div>
  );
}

export default StudentDetail;