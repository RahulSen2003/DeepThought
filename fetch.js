document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const courseTitle1 = data.alltasks.tasks[0].assets[0].asset_title;
      const courseTitle2 = data.alltasks.tasks[0].assets[1].asset_title;
      const courseTitle3 = data.alltasks.tasks[0].assets[2].asset_title;
      const courseTitle4 = data.alltasks.tasks[0].assets[3].asset_title;

      const decription01 = data.alltasks.tasks[0].assets[0].asset_description;
      const decription02 = data.alltasks.tasks[0].assets[1].asset_description;
      const decription03 = data.alltasks.tasks[0].assets[2].asset_description;
      const decription04 = data.alltasks.tasks[0].assets[3].asset_description;

      document.getElementById('01').textContent = courseTitle1;
      document.getElementById('02').textContent = courseTitle2;
      document.getElementById('03').textContent = courseTitle3;
      document.getElementById('04').textContent = courseTitle4;
       
      
      document.getElementById('d01').textContent = decription01;
      document.getElementById('d02').textContent = decription02;
      document.getElementById('d03').textContent = decription03;
      document.getElementById('d04').textContent = decription04;

      const openNavButton = document.getElementById('navigationbtn');
      const leftSidebar = document.getElementById('leftSidebar');
      const leftblack = document.getElementById('leftblacknav');
      const navcntnt = document.getElementById('navcontent');
      openNavButton.addEventListener('click', () => {
        if (leftSidebar.style.width === '132px') {
          leftSidebar.style.width = '280px';
          leftblack.style.width = '280px';
          navcntnt.style.visibility = 'visible';
          navcntnt.style.opacity = '1';
        } else {
          leftSidebar.style.width = '132px';
          leftblack.style.width = '132px';
          navcntnt.style.visibility = 'hidden';
          navcntnt.style.visibility = 'hidden';
          navcntnt.style.opacity = '0';
        }
      });


    })
    .catch(error => console.error('Error fetching data:', error));
});
