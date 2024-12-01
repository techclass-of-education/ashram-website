
// js for modal 
document.addEventListener("DOMContentLoaded", function () {
    //  Show modal when the page loads
  //   const modal = new bootstrap.Modal(document.getElementById('fullPageModal'));
  //   modal.show();
  
  
  //   //  Close modal after 2 seconds
  //   setTimeout(() => {
  //     document.getElementById('modal-img').style.opacity = 1;
  //   }, 100); // 2000 ms = 2 seconds
  //   setTimeout(() => {
  //     modal.hide();
  //   }, 5000); // 2000 ms = 2 seconds
  });
  
  
  
  // Katha Data
  const kathaData = {
      bhagwat: {
          title: "Shreemad Bhagwat Katha",
          days: [
              { title: "Day 1: Introduction to Shreemad Bhagwat", description: "An overview of the Katha's significance and its timeless spiritual messages.", image: "assets/imgs/day1.jpg" },
              { title: "Day 2: The Creation of the Universe", description: "Exploration of cosmic origins as described in the Bhagwat, with stories of creation.", image: "assets/imgs/day2.jpg" },
              { title: "Day 3: Incarnations of Lord Vishnu", description: "A narration of the various Avatars of Lord Vishnu, highlighting their roles and significance.", image: "assets/imgs/day3.jpg" },
              { title: "Day 4: The Devotion of Prahlad", description: "The inspiring story of young Prahlad’s unwavering devotion to Lord Vishnu.", image: "assets/imgs/day4.jpg" },
              { title: "Day 5: The Story of King Bharat", description: "Lessons in renunciation and self-realization through King Bharat’s story.", image: "assets/imgs/day5.jpg" },
              { title: "Day 6: Devotion and Grace of Lord Krishna", description: "Exploring the divine leelas of Lord Krishna, emphasizing love and devotion.", image: "assets/imgs/day6.jpg" },
              { title: "Day 7: Moksha and the Journey Beyond", description: "Concluding reflections on liberation and the soul’s journey toward union with the divine.", image: "assets/imgs/day7.jpg" }
          ]
      },
      // Add similar data for Ramayan and Shiv Puran
  
      ramayan: {
          title: "Shri Ram Katha",
          days: [
              { title: "Day 1: Introduction to Shreemad Bhagwat", description: "An overview of the Katha's significance and its timeless spiritual messages.", image: "assets/imgs/day1.jpg" },
              { title: "Day 2: The Creation of the Universe", description: "Exploration of cosmic origins as described in the Bhagwat, with stories of creation.", image: "assets/imgs/day2.jpg" },
              { title: "Day 3: Incarnations of Lord Vishnu", description: "A narration of the various Avatars of Lord Vishnu, highlighting their roles and significance.", image: "assets/imgs/day3.jpg" },
              { title: "Day 4: The Devotion of Prahlad", description: "The inspiring story of young Prahlad’s unwavering devotion to Lord Vishnu.", image: "assets/imgs/day4.jpg" },
              { title: "Day 5: The Story of King Bharat", description: "Lessons in renunciation and self-realization through King Bharat’s story.", image: "assets/imgs/day5.jpg" },
              { title: "Day 6: Devotion and Grace of Lord Krishna", description: "Exploring the divine leelas of Lord Krishna, emphasizing love and devotion.", image: "assets/imgs/day6.jpg" },
              { title: "Day 7: Moksha and the Journey Beyond", description: "Concluding reflections on liberation and the soul’s journey toward union with the divine.", image: "assets/imgs/day7.jpg" },
              { title: "Day 8: Devotion and Grace of Lord Krishna", description: "Exploring the divine leelas of Lord Krishna, emphasizing love and devotion.", image: "assets/imgs/day6.jpg" },
              { title: "Day 9: Moksha and the Journey Beyond", description: "Concluding reflections on liberation and the soul’s journey toward union with the divine.", image: "assets/imgs/day7.jpg" }
  
          ]
      },
  
      shivpuran: {
          title: "Shiv Mahapuran Katha",
          days: [
              { title: "Day 1: Introduction to Shreemad Bhagwat", description: "An overview of the Katha's significance and its timeless spiritual messages.", image: "assets/imgs/day1.jpg" },
              { title: "Day 2: The Creation of the Universe", description: "Exploration of cosmic origins as described in the Bhagwat, with stories of creation.", image: "assets/imgs/day2.jpg" },
              { title: "Day 3: Incarnations of Lord Vishnu", description: "A narration of the various Avatars of Lord Vishnu, highlighting their roles and significance.", image: "assets/imgs/day3.jpg" },
              { title: "Day 4: The Devotion of Prahlad", description: "The inspiring story of young Prahlad’s unwavering devotion to Lord Vishnu.", image: "assets/imgs/day4.jpg" },
              { title: "Day 5: The Story of King Bharat", description: "Lessons in renunciation and self-realization through King Bharat’s story.", image: "assets/imgs/day5.jpg" },
              { title: "Day 6: Devotion and Grace of Lord Krishna", description: "Exploring the divine leelas of Lord Krishna, emphasizing love and devotion.", image: "assets/imgs/day6.jpg" },
              { title: "Day 7: Moksha and the Journey Beyond", description: "Concluding reflections on liberation and the soul’s journey toward union with the divine.", image: "assets/imgs/day7.jpg" },
              { title: "Day 8: Devotion and Grace of Lord Krishna", description: "Exploring the divine leelas of Lord Krishna, emphasizing love and devotion.", image: "assets/imgs/day6.jpg" },
              { title: "Day : Moksha and the Journey Beyond", description: "Concluding reflections on liberation and the soul’s journey toward union with the divine.", image: "assets/imgs/day7.jpg" }
  
          ]
      },
  };
  
  // Function to display Katha based on selection
  function showKathaInfo(kathaKey) {
      const katha = kathaData[kathaKey];
      document.getElementById("katha-title").textContent = katha.title;
  
      // Clear previous day cards
      const container = document.getElementById("day-cards-container");
      container.innerHTML = "";
  
      // Generate day cards for selected Katha
      katha.days.forEach((day, index) => {
          const dayCard = document.createElement("div");
          dayCard.className = "col-12 col-md-6 mb-4";
  
          // Card structure with image on one side and text on the other
          dayCard.innerHTML = `
              <div class="card h-100">
                  <div class="row g-0 align-items-center">
                      <!-- Image Section -->
                      <div class="col-6">
                          <img src="${day.image}" alt="Day ${index + 1} Image" class="img-fluid rounded-start">
                      </div>
                      <!-- Content Section -->
                      <div class="col-6">
                          <div class="card-body">
                              <h5 class="card-title">${day.title}</h5>
                              <p class="card-text">${day.description}</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
  
          // Append day card to container
          container.appendChild(dayCard);
      });
  }
  // Katha data with 9-day topics
  const slotsData = {
      bhagwat: {
          image: 'assets/imgs/button-image/krishna1.png',
          infoImage: 'assets/imgs/button-image/lord-krishna.jpg',
          title: 'Bhagwat Katha Booking Information',
          info: 'The Bhagwat Katha is a narration of the stories of Lord Krishna as mentioned in the Bhagwat Purana.',
          topics: [
              'Day 1: Creation of the Universe',
              'Day 2: Lord Krishna’s Birth',
              'Day 3: Childhood Lilas of Krishna',
              'Day 4: Killing of Demons',
              'Day 5: Krishna and Radha',
              'Day 6: Govardhan Leela',
              'Day 7: Mahabharata Intro',
              'Day 8: Bhagavad Gita Teachings',
              'Day 9: Departure from Earth'
          ]
      },
      ram: {
          image: 'assets/imgs/button-image/ram.png',
          infoImage: 'assets/imgs/button-image/lord-ram.jpg',
          title: 'Ram Katha Booking Information',
          info: 'Ram Katha recounts the life and values of Lord Rama, emphasizing righteousness and devotion.',
          topics: [
              'Day 1: Lord Rama’s Birth',
              'Day 2: Childhood of Rama',
              'Day 3: Marriage to Sita',
              'Day 4: Exile to the Forest',
              'Day 5: Encounter with Demons',
              'Day 6: The Golden Deer',
              'Day 7: Abduction of Sita',
              'Day 8: Battle with Ravana',
              'Day 9: Rama’s Return to Ayodhya'
          ]
      },
      shiv: {
          image: 'assets/imgs/button-image/shiv.png',
          infoImage: 'assets/imgs/button-image/lord-shiva.jpg',
          title: 'Shiv Puran Booking Information',
          info: 'Shiv Puran Katha is a deep exploration of Lord Shiva\'s life, teachings, and powers.',
          topics: [
              'Day 1: Origin of Shiva',
              'Day 2: Shiva and Parvati',
              'Day 3: Marriage of Shiva',
              'Day 4: Birth of Ganesha',
              'Day 5: Tales of Kailash',
              'Day 6: Destroying Demons',
              'Day 7: Shiva as Mahadeva',
              'Day 8: Significance of Linga',
              'Day 9: Shiva’s Blessings'
          ]
      }
  };
  
  // Open modal and populate with data
  function openModal(kathaType) {
      const katha = slotsData[kathaType];
      document.getElementById('kathaTitleModal').innerText = katha.title;
      document.getElementById('kathaInfo').innerText = katha.info;
      document.getElementById('kathaInfoImg').src = katha.infoImage;
      
      // Populate topics
      const topicsList = document.getElementById('topicsList');
      topicsList.innerHTML = '';
      katha.topics.forEach(topic => {
          const li = document.createElement('li');
          li.innerText = topic;
          topicsList.appendChild(li);
      });
  
      document.getElementById('kathaModal').style.display = 'block';
  }
  
  // Close modal
  function closeModal() {
      document.getElementById('kathaModal').style.display = 'none';
  }
  