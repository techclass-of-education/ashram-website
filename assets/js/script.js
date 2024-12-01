// document.addEventListener("DOMContentLoaded", function () {
//     // Show modal when the page loads
//   const modal = new bootstrap.Modal(document.getElementById('fullPageModal'));
//     modal.show();

//     // Fade in image after a brief delay
//    setTimeout(() => {
//        document.getElementById('modal-img').style.opacity = 1;
//    }, 100); // Fade in after 100 ms

//     // Close modal after 5 seconds
//   setTimeout(() => {
//        modal.hide();
//   }, 5000);
// });

$(document).ready(function () {
  $("#btn-upcoming-events").click(function () {
    $("#upcoming-events").fadeToggle();
  });
  $("#btn-fix-box").click(function () {
    $(this).fadeOut();
    $("#fix-box").fadeIn();
  });
  $("#btn-fix-close").click(function () {
    $("#btn-fix-box").fadeIn();
    $("#fix-box").fadeOut();
  });
});
// Function to open the sidebar
function openSidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById("mySidebar").style.display = "none";
}

// Function to smoothly scroll to the section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
  closeSidebar(); // Close sidebar after clicking a link
}

// Show or hide the button based on scroll position
window.onscroll = function () {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// tool tip code 

document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});


// Define katha schedules with titles, info, images, and topics
const kathaSchedule = {
  shivPuranSchedule: {
    title: "Shiv MahaPuran Katha",
    info: "Shiv Puran Katha is a deep exploration of Lord Shiva's life, teachings, and powers.",
    image: "assets/imgs/schedule-modal/shiv.png",
    topics: [
      "Day 1: Origin of Shiva",
      "Day 2: Shiva and Parvati",
      "Day 3: Marriage of Shiva",
      "Day 4: Birth of Ganesha",
      "Day 5: Tales of Kailash",
      "Day 6: Destroying Demons",
      "Day 7: Shiva as Mahadeva",
      "Day 8: Significance of Linga",
      "Day 9: Shiva’s Blessings",
    ],
  },
  ramKathaSchedule: {
    title: "Shri Ram Katha",
    info: "Ram Katha tells the sacred story of Lord Ram, his journey, and teachings.",
    image: "assets/imgs/schedule-modal/ram.png",
    topics: [
      "Day 1: Birth of Ram",
      "Day 2: Ram in Gurukul",
      "Day 3: Sita Swayamvar",
      "Day 4: Vanvas of Ram",
      "Day 5: Ram and Hanuman",
      "Day 6: Building the Bridge",
      "Day 7: War with Ravan",
      "Day 8: Ram Rajya",
      "Day 9: Return to Ayodhya",
    ],
  },
  bhagwatKathaSchedule: {
    title: "Shrimad Bhagwat Katha",
    info: "Bhagwat Katha narrates the divine stories of Lord Krishna and his teachings.",
    image: "assets/imgs/schedule-modal/krishna.png",
    topics: [
      "Day 1: Birth of Krishna",
      "Day 2: Childhood Miracles",
      "Day 3: Krishna and the Gopis",
      "Day 4: Lifting Govardhan",
      "Day 5: Kansa Vadh",
      "Day 6: Rasa Lila",
      "Day 7: Geeta Updesh",
      "Day 8: Dwarka City",
      "Day 9: Krishna’s Legacy",
    ],
  },
};

// Function to open the schedule modal and display selected katha details
function openScheduleModal(kathaKey) {
  const katha = kathaSchedule[kathaKey];

  // Check if the selected katha exists in the schedule
  if (katha) {
    document.getElementById("scheduleModalTitle").innerText = katha.title;
    document.getElementById("scheduleModalInfo").innerText = katha.info;

    // Clear and populate the topics list
    const topicsList = document.getElementById("scheduleModalTopics");
    topicsList.innerHTML = "";
    katha.topics.forEach((topic) => {
      const listItem = document.createElement("li");
      listItem.innerText = topic;
      topicsList.appendChild(listItem);
    });

    // Set the image for the selected katha
    document.getElementById("scheduleModalImage").src = katha.image;

    // Show the modal by setting display to flex
    document.getElementById("kathaScheduleModal").style.display = "flex";
  } else {
    console.error("Katha schedule not found for key:", kathaKey);
  }
}

// Function to close the schedule modal
function closeScheduleModal() {
  document.getElementById("kathaScheduleModal").style.display = "none";
}

// aasharm booking

// function showImages(roomId) {
//   const images = {
//     "ac-room-images": [
//       "assets/imgs/rooms-images/AC-rooms/img-1.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//       "assets/imgs/rooms-images/AC-rooms/img-3.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//       "assets/imgs/rooms-images/AC-rooms/img-3.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//     ],
//     "single-deluxe-images": [
//       "assets/imgs/rooms-images/AC-rooms/img-1.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//       "assets/imgs/rooms-images/AC-rooms/img-3.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//       "assets/imgs/rooms-images/AC-rooms/img-3.jpg",
//       "assets/imgs/rooms-images/AC-rooms/img-2.jpeg",
//     ],
//     "washroom-images": [
//       "assets/imgs/rooms-images/washroom-images/img1.png",
//       "assets/imgs/rooms-images/washroom-images/img2.jpg",
//       "assets/imgs/rooms-images/washroom-images/img3.jpg",
//       "assets/imgs/rooms-images/washroom-images/img1.png",
//       "assets/imgs/rooms-images/washroom-images/img2.jpg",
//       "assets/imgs/rooms-images/washroom-images/img3.jpg",
//     ],
//     "ashram-images": [
//       "assets/imgs/rooms-images/asharm-images/img-1.bmp",
//       "assets/imgs/rooms-images/asharm-images/img-4.jpg",
//       "assets/imgs/rooms-images/asharm-images/img-2.jpg",
//       "assets/imgs/rooms-images/asharm-images/img-3.jpg",
//       "assets/imgs/rooms-images/asharm-images/img-3.jpg",
//       "assets/imgs/rooms-images/asharm-images/img-1.bmp",
//     ],
//   };

//   const overlayImagesContainer = document.getElementById("overlay-images");
//   overlayImagesContainer.innerHTML = "";

//   images[roomId].forEach((src) => {
//     const img = document.createElement("img");
//     img.src = src;
//     overlayImagesContainer.appendChild(img);
//   });

//   document.getElementById("imageOverlay").style.display = "flex";
// }

function closeOverlay() {
  document.getElementById("imageOverlay").style.display = "none";
}

// Function to open the booking modal
function openBookingModal() {
  document.getElementById("ashramBookingModal").style.display = "flex";
}

// Function to close the booking modal
function closeBookingModal() {
  document.getElementById("ashramBookingModal").style.display = "none";
}

// Gaushala Gallery code

function showGallery(type) {
  document.getElementById("gaumata-gallery").classList.add("d-none");
  document.getElementById("chara-gallery").classList.add("d-none");
  if (type === "gaumata") {
    document.getElementById("gaumata-gallery").classList.remove("d-none");
  } else {
    document.getElementById("chara-gallery").classList.remove("d-none");
  }
}


// modal for katha videos
document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.querySelector(".comments-list");
  const commentItems = document.querySelectorAll(".comment-item");

  // Duplicate the comment items to create a seamless scrolling effect
  const duplicateComments = [...commentItems].map(comment => comment.cloneNode(true));
  commentsList.append(...duplicateComments);

  // Adjust the animation speed and timing based on the total number of comments
  const commentHeight = commentItems[0].offsetHeight;
  const totalHeight = commentHeight * commentItems.length * 2; // Total height for the duplicated items
  const scrollDuration = 10; // Time in seconds for the entire scroll

  // Update the animation duration dynamically based on the total height
  commentsList.style.animationDuration = `${totalHeight / 10}s`; // Adjust timing to scroll based on height
});
