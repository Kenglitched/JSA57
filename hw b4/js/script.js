const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
  { id: 6, name: "Fiona" },
  { id: 7, name: "George" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Isaac" },
  { id: 10, name: "Julia" }
];

function renderStudents() {
  const listContainer = document.getElementById("student-list");
  listContainer.innerHTML = "";

  const listItemHTML = students.map(function (s) {
    return `<li data-id="${s.id
      }">${JSON.stringify(s)} <button>Edit</button> <button>Del</button></li>`;
  });

  listContainer.innerHTML = listItemHTML.join("");
}

function addStudent(name) {
  const newId = students[students.length - 1].id + 1;
  const newStudent = { id: newId, name: name };
  students.push(newStudent);
  const listContainer = document.getElementById("student-list");
  listContainer.innerHTML += `<li data-id="${newId
    }">${JSON.stringify(newStudent)} <button>Edit</button> <button>Del</button></li>`;
}


document.getElementById("add-student").addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("student-name").value.trim();
  addStudent(nameInput);
  this.reset();
})

const editStudentById = (id) => {
  const newName = prompt("Enter new name:");
  if (newName) {
    const student = students.find((s) => s.id === id);
    if (student) {
      student.name = newName;
      document.querySelector(
        `li[data-id="${id}"]`
      ).innerHTML = `${JSON.stringify(student)} <button>Edit</button> <button>Del</button>`;
    }
  }
}

const deleteStudentById = (id) => {
  const index = students.findIndex((s) => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    const liToDel = document.querySelector(`li[data-id="${id}"]`);
    if (liToDel) {
      liToDel.remove();
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  renderStudents();
});

document.getElementById("student-list").addEventListener("click", function (e) {
  // kiem tra bam vao nut edit
  if (e.target.tagName === "BUTTON") {
    // lay id tu thuoc tinh data-id cua the li cha
    const studentId = e.target.closest("li").dataset.id;
    const id = parseInt(studentId); // chuyen ve so
    if (e.target.textContent === "Edit") {
      // edit
      editStudentById(id);
    } else if (e.target.textContent === "Del") {
      // del
      deleteStudentById(id);
    }
  }
});