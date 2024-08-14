fetch('https://trainingapi2.onrender.com/data')
      .then(response => response.json())
      .then(data => {
        let students=document.getElementById('students');
        data.forEach(element => {
          let student=document.createElement('option');
          student.innerHTML=element;
          students.appendChild(student)
          
        });

      })