function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  const students = [];

  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }

  return students;
}

// Crear el cierre classRoom con 10 estudiantes
const classRoom = createClassRoom(10);