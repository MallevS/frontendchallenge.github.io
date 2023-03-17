fetch('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  const itemsHtml = data.map(item => `
  <div class="cards-container"> 
  <div class="card">
  <div class="card-profile">
  <img class="card-profile-image" src="${item.profile_image}">
  <span class="card-profile-name">${item.name}</span>
  <div class="card-profile-details">
  <p class="card-profile-date">${item.date}</p>
  </div>
</div>
      <div class="card-info">
      <img src="${item.image}" alt="${item.caption}">
      <div class="card-text">
      <p class="card-caption">${item.caption}</p>
      <p class="card-details">Image type: ${item.type}</p>
      <p class="card-details">Image Source: ${item.source_type}</p><span class="card-details-icon"><img class="card-details-icon" src="${getIcon(item.source_type)}" style="width: 45px; height: 45px;"></span>
      </div>
      </div>
      <p class="card-details">
      <span class="like-count">${item.likes}</span>
      <span class="like-icon">&hearts;</span></p>
    </div>
  </div>
  `).join("");
  document.querySelector("#debug").innerHTML = itemsHtml;

  const likeIcons = document.querySelectorAll('.like-icon');
  likeIcons.forEach((likeIcon, index) => {
    let likesCount = data[index].likes;
    let isLiked = false;

    likeIcon.addEventListener('click', () => {
      if (isLiked) {
        likesCount--;
        likeIcon.classList.remove('liked');
        isLiked = false;
      } else {
        likesCount++;
        likeIcon.classList.add('liked');
        isLiked = true;
      }

      const likeCountElem = document.querySelectorAll('.like-count')[index];
      likeCountElem.textContent = likesCount;
    });
  });
})
.catch(error => console.error(error));

function getIcon(source_type) {
  switch (source_type) {
    case "instagram":
      return "instagram-logo.svg";
    case "facebook":
      return "facebook.svg";
    default:
      return "";
  }
}

const modeRadios = document.querySelectorAll('input[name="theme"]');
      const body = document.querySelector('body');
      const radioSelects = document.querySelectorAll('.radio-select');

      for (const radio of modeRadios) {
        radio.addEventListener('change', function() {
          if (this.value === 'darkTheme') {
            body.classList.add('darkTheme');
            for (const radioSelect of radioSelects) {
              radioSelect.classList.add('darkTheme');
            }
          } else {
            body.classList.remove('darkTheme');
            for (const radioSelect of radioSelects) {
              radioSelect.classList.remove('darkTheme');
            }
          }
        });
      }
