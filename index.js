<script>
  $('.form-select').select2();
  toastr.options = { "closeButton": true, "progressBar": true };

  // Mock Student Database
  const studentDB = {
    "2201381015": {
      name: "Mahabub Alam",
      dob: "1998-05-06",
      results: [
        // 1st Year
        { code: "CSE101", title: "Introduction to Computer Science", grade: "B", gpa: 3.0 },
        { code: "MTH101", title: "Calculus & Linear Algebra", grade: "C+", gpa: 2.5 },
        { code: "PHY101", title: "Physics I", grade: "B-", gpa: 2.75 },

        { code: "CSE102", title: "Structured Programming", grade: "B+", gpa: 3.25 },
        { code: "MTH102", title: "Differential Equations", grade: "C", gpa: 2.25 },
        { code: "ENG101", title: "English Composition", grade: "B", gpa: 3.0 },

        // 2nd Year
        { code: "CSE201", title: "Data Structures", grade: "B+", gpa: 3.25 },
        { code: "CSE202", title: "Digital Logic Design", grade: "B", gpa: 3.0 },
        { code: "STA201", title: "Probability & Statistics", grade: "C+", gpa: 2.5 },

        { code: "CSE203", title: "Object-Oriented Programming", grade: "B", gpa: 3.0 },
        { code: "CSE204", title: "Computer Architecture", grade: "B-", gpa: 2.75 },
        { code: "ECO201", title: "Economics", grade: "C+", gpa: 2.5 },

        // 3rd Year
        { code: "CSE301", title: "Algorithm Design & Analysis", grade: "B+", gpa: 3.25 },
        { code: "CSE302", title: "Operating Systems", grade: "B", gpa: 3.0 },
        { code: "CSE303", title: "Database Systems", grade: "B-", gpa: 2.75 },

        { code: "CSE304", title: "Software Engineering", grade: "B", gpa: 3.0 },
        { code: "CSE305", title: "Computer Networks", grade: "C+", gpa: 2.5 },
        { code: "CSE306", title: "Artificial Intelligence", grade: "B-", gpa: 2.75 },

        // 4th Year
        { code: "CSE401", title: "Compiler Design", grade: "B", gpa: 3.0 },
        { code: "CSE402", title: "Machine Learning", grade: "B+", gpa: 3.25 },
        { code: "CSE403", title: "Web Technologies", grade: "B-", gpa: 2.75 },

        { code: "CSE404", title: "Final Year Project", grade: "B", gpa: 3.0 },
        { code: "CSE405", title: "Cyber Security", grade: "C+", gpa: 2.5 }
      ],
      cgpa: 2.96
    },
    "UU5678": {
      name: "Abdullah Samir",
      dob: "1999-05-10",
      results: [
        { code: "ENG101", title: "English Composition", grade: "A", gpa: 4.0 },
        { code: "MAT101", title: "Calculus I", grade: "B", gpa: 3.0 }
      ],
      cgpa: 3.5
    }
  };

  // Form Submit
  $("#resultForm").on("submit", function(e){
    e.preventDefault();
    let sid = $("#sid").val().trim().toUpperCase();
    let dob = $("#dob").val();
    let year = $("#acyear option:selected").text(); // fixed
    let semid = $("#semid option:selected").text();

    if(studentDB[sid] && studentDB[sid].dob === dob){
      let student = studentDB[sid];
      $("#studentName").text(student.name);
      $("#studentId").text(sid);
      $("#year").text(year);
      $("#semester").text(semid);

      let rows = "";
      student.results.forEach(r=>{
        rows += `<tr><td>${r.code}</td><td>${r.title}</td><td>${r.grade}</td><td>${r.gpa}</td></tr>`;
      });

      // Add CGPA row
      if(student.cgpa){
        rows += `<tr class="table-info">
                   <td colspan="3" class="text-end"><strong>CGPA</strong></td>
                   <td><strong>${student.cgpa}</strong></td>
                 </tr>`;
      }

      $("#resultTable").html(rows);
      $("#resultCard").slideDown();
      toastr.success("Result found for Student ID: " + sid);
    } else {
      $("#resultCard").hide();
      toastr.error("Student information not found");
    }
  });
</script>
