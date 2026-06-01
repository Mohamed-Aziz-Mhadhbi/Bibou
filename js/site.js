const classesData = [
  {
    title: "Little Explorers Nursery",
    age: "Ages 0 - 18 months",
    image: "images/nursery_classroom.jpg",
    maxKids: "8 children",
    ratio: "1:4",
    focus: "Sensory play, motor development, daily routines, and warm bonding.",
    teachers: [
      {
        name: "Miss Amira Ben Salah",
        role: "Lead Teacher",
        photo: "images/miss 1.jpg",
        bio: "7 years of experience with infants and responsive caregiving."
      },
      {
        name: "Miss Leila Trabelsi",
        role: "Assistant Teacher",
        photo: "images/miss 1.jpg",
        bio: "Loves music, songs, and gentle movement activities."
      }
    ]
  },
  {
    title: "Curious Toddlers",
    age: "Ages 18 - 36 months",
    image: "images/toddler_calssroom.jpg",
    maxKids: "12 children",
    ratio: "1:6",
    focus: "Language development, independence, and social skills through play.",
    teachers: [
      {
        name: "Miss Sara Mahmoud",
        role: "Lead Teacher",
        photo: "images/miss 1.jpg",
        bio: "Passionate about early language and creative play."
      },
      {
        name: "Miss Fatma Khelifi",
        role: "Assistant Teacher",
        photo: "images/miss 1.jpg",
        bio: "Supports routines, confidence, and early independence."
      }
    ]
  },
  {
    title: "Bright Stars Pre-K",
    age: "Ages 3 - 5 years",
    image: "images/pre-k.jpg",
    maxKids: "16 children",
    ratio: "1:8",
    focus: "Pre-literacy, math concepts, science exploration, and school readiness.",
    teachers: [
      {
        name: "Miss Nour Hammami",
        role: "Lead Teacher",
        photo: "images/miss 1.jpg",
        bio: "Experienced in preparing children for primary school."
      },
      {
        name: "Miss Aya Ben Romdhane",
        role: "Assistant Teacher",
        photo: "images/miss 1.jpg",
        bio: "Creative arts and music specialist."
      }
    ]
  }
];

function showClassDetail(index) {
  const cls = classesData[index];
  if (!cls) return;

  const teachers = cls.teachers.map(function (teacher) {
    return `
      <div class="teacher-row">
        <img src="${teacher.photo}" alt="${teacher.name}">
        <div>
          <h4>${teacher.name}</h4>
          <p class="text-primary"><strong>${teacher.role}</strong></p>
          <p>${teacher.bio}</p>
        </div>
      </div>`;
  }).join("");

  document.getElementById("classModalLabel").textContent = cls.title;
  document.getElementById("classModalBody").innerHTML = `
    <div class="row">
      <div class="col-sm-6">
        <img src="${cls.image}" alt="${cls.title}" class="img-responsive img-rounded">
      </div>
      <div class="col-sm-6">
        <p class="lead">${cls.age}</p>
        <div class="info-card">
          <div class="card-body">
            <h4>Class Information</h4>
            <p><strong>Maximum children:</strong> ${cls.maxKids}</p>
            <p><strong>Teacher-child ratio:</strong> ${cls.ratio}</p>
            <p><strong>Focus:</strong> ${cls.focus}</p>
          </div>
        </div>
        <h4>Meet the Teachers</h4>
        ${teachers}
      </div>
    </div>`;

  $("#classModal").modal("show");
}

function filterClasses(category) {
  $(".class-card").each(function () {
    const show = category === "all" || $(this).data("category") === category;
    $(this).closest(".class-col").toggle(show);
  });

  $(".class-filter").removeClass("active");
  $(".class-filter[data-filter='" + category + "']").addClass("active");
}

$(function () {
  $(".class-filter").on("click", function () {
    filterClasses($(this).data("filter"));
  });

  $(".navbar-collapse a:not(.dropdown-toggle)").on("click", function () {
    $(".navbar-collapse.in").collapse("hide");
  });

  $("a[href^='#']").on("click", function (event) {
    const target = $($.attr(this, "href"));

    if (!target.length) return;

    event.preventDefault();
    $("html, body").animate({
      scrollTop: target.offset().top - $(".site-header").outerHeight()
    }, 420);
  });
});
