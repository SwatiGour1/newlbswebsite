const counters=document.querySelectorAll('.counter');
// console.log("hello");
counters.forEach((counter)=>{
counter.innerHTML=0;
const updatecounter=()=>{
const targetcount=+counter.getAttribute('data-target');
const startingCount=Number(counter.innerHTML);
const incr=targetcount/100;
if(startingCount<targetcount){
    counter.innerHTML=`${Math.round(startingCount+incr)}`;
    setTimeout(updatecounter,10)
}
else{
    counter.innerHTML=targetcount;
}
}
updatecounter();
})

function startBlinkAnimation(element) {
element.classList.add("blink-animation");
}
function initMap() {
    // Specify your latitude and longitude coordinates
    var myLatLng = {lat: 37.7749, lng: -122.4194};

    // Create a map centered on the specified coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12
      
    });

    // Add a marker at the specified coordinates
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Our Location'
    });
  }



  window.addEventListener('scroll', checkScroll);

function checkScroll() {
const imageElements = document.querySelectorAll('.image-grid img');

for (let i = 0; i < imageElements.length; i++) {
  const imageElement = imageElements[i];
  const imagePosition = imageElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (imagePosition < windowHeight) {
    imageElement.classList.add('animate');
  }
}
}
// biometric
$(document).ready(function() {
  // Student reports array
  var studentReports = [];

  // Handle form submission
  $('#reportForm').submit(function(event) {
    event.preventDefault();

    // Get form values
    var studentName = $('#studentName').val();
    var department = $('#department').val();
    var shift = $('#shift').val();
    var inTime = $('#inTime').val();
    var outTime = $('#outTime').val();
    var totalTime = $('#totalTime').val();
    var attendance = $('#attendance').val();

    // Add the report to the array
    studentReports.push({
      name: studentName,
      department: department,
      shift: shift,
      inTime: inTime,
      outTime: outTime,
      totalTime: totalTime,
      attendance: attendance
    });

    // Append a new row to the table
    $('#reportTable tbody').append(
      '<tr>' +
      '<td><input type="checkbox" class="report-checkbox" data-name="' + studentName + '"></td>' +
      '<td>' + studentName + '</td>' +
      '<td>' + department + '</td>' +
      '<td>' + shift + '</td>' +
      '<td>' + inTime + '</td>' +
      '<td>' + outTime + '</td>' +
      '<td>' + totalTime + '</td>' +
      '<td>' + attendance + '</td>' +
      '</tr>'
    );

    // Reset form fields
    $('#studentName').val('');
    $('#department').val('');
    $('#shift').val('');
    $('#inTime').val('');
    $('#outTime').val('');
    $('#totalTime').val('');
    $('#attendance').val('');
  });

  // Export as PDF
  $('#exportPdfBtn').click(function() {
    var selectedReports = getSelectedReports();

    if (selectedReports.length === 0) {
      alert('No reports selected.');
      return;
    }

    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Student Daily Reports', 10, 10);
    doc.setFontSize(12);

    var y = 20;
    $.each(selectedReports, function(index, report) {
      doc.text(10, y + 10, 'Student Name: ' + report.name);
      doc.text(10, y + 20, 'Department: ' + report.department);
      doc.text(10, y + 30, 'Shift: ' + report.shift);
      doc.text(10, y + 40, 'In Time: ' + report.inTime);
      doc.text(10, y + 50, 'Out Time: ' + report.outTime);
      doc.text(10, y + 60, 'Total Time: ' + report.totalTime);
      doc.text(10, y + 70, 'Attendance: ' + report.attendance);
      y += 90;
    });

    doc.save('student_reports.pdf');
  });

  // Export as Excel
  $('#exportExcelBtn').click(function() {
    var selectedReports = getSelectedReports();

    if (selectedReports.length === 0) {
      alert('No reports selected.');
      return;
    }

    var worksheet = XLSX.utils.json_to_sheet(selectedReports);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Reports');
    XLSX.writeFile(workbook, 'student_reports.xlsx');
  });

  // Clear Selected Reports
  $('#clearReportsBtn').click(function() {
    var selectedReports = getSelectedReports();

    if (selectedReports.length === 0) {
      alert('No reports selected.');
      return;
    }

    $.each(selectedReports, function(index, report) {
      // Remove the report from the array
      studentReports = studentReports.filter(function(item) {
        return item.name !== report.name;
      });

      // Remove the row from the table
      $('input.report-checkbox[data-name="' + report.name + '"]').closest('tr').remove();
    });
  });

  // Get the selected reports
  function getSelectedReports() {
    var selectedReports = [];

    $('input.report-checkbox:checked').each(function() {
      var name = $(this).data('name');

      var report = studentReports.find(function(item) {
        return item.name === name;
      });

      if (report) {
        selectedReports.push(report);
      }
    });

    return selectedReports;
  }
});
// result
function myfunction() {
  alert("Results is opening  please wait a second!");
}
function MyClose(){
confirm("do you want to close this");
}