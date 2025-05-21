
document.addEventListener("DOMContentLoaded", function () {
    /* 모바일 gnb */
    const closeBtn = document.querySelector('.top .close');
    const ham = document.querySelector('.top .hamMenu');
    const moblienav = document.querySelector('.mobilenav');

    ham.addEventListener('click', function () {
        this.classList.add('off');
        closeBtn.classList.add('on');
        moblienav.classList.add('on');
        console.log('클릭')
    });

    closeBtn.addEventListener('click', function () {
        this.classList.remove('on');
        ham.classList.remove('off');
        moblienav.classList.remove('on');
    });
    /* 알람박스 */
const alarm = document.querySelector('.top .lefticon .alarm');
const alarmImgs = alarm.querySelectorAll('img');
const alarmBox = alarm.querySelector('.alarmbox');

alarm.addEventListener('click', function (e) {
  e.stopPropagation(); // 클릭이 document까지 전파되지 않게

  // 이미지 toggle
  alarmImgs.forEach(img => img.classList.toggle('active'));

  // alarmbox toggle
  alarmBox.classList.toggle('active');
});

// 외부 클릭 시 알림창 닫기
document.addEventListener('click', function () {
  // 만약 alarmBox가 열려있으면 닫기
  if (alarmBox.classList.contains('active')) {
    alarmBox.classList.remove('active');

    // 이미지 원래 상태로 되돌리기
    alarmImgs.forEach(img => img.classList.toggle('active'));
  }

  
});

 const fileInput = document.querySelector('.fileinput input[type="file"]');
  const fileButton = document.querySelector('.fileinput .file-btn');
  const fileName = document.querySelector('.fileinput .file-name');

  // 버튼 클릭 시 input[type="file"]을 클릭
  fileButton.addEventListener('click', function () {
    fileInput.click();
  });

  // 파일 선택 시 파일명 출력
  fileInput.addEventListener('change', function () {
    const selectedFile = fileInput.files[0];
    fileName.textContent = selectedFile ? selectedFile.name : '선택된 파일이 없습니다.';
  });



});
