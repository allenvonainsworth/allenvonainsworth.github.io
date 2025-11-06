// Sample movie data
const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Inception",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Inception+Backdrop",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    reviews: [
      { user: "John Doe", rating: 9, comment: "Mind-bending masterpiece!" },
      { user: "Jane Smith", rating: 8, comment: "Complex but rewarding." }
    ]
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Dark+Knight",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Dark+Knight+Backdrop",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    reviews: [
      { user: "Bob Wilson", rating: 10, comment: "Heath Ledger's Joker is iconic." },
      { user: "Alice Brown", rating: 9, comment: "Action-packed and thrilling." }
    ]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Pulp+Fiction",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Pulp+Fiction+Backdrop",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
    reviews: [
      { user: "Charlie Davis", rating: 9, comment: "Quentin Tarantino at his best." },
      { user: "Diana Evans", rating: 8, comment: "Non-linear storytelling genius." }
    ]
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Shawshank",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Shawshank+Backdrop",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    reviews: [
      { user: "Eve Foster", rating: 10, comment: "Timeless classic." },
      { user: "Frank Garcia", rating: 9, comment: "Hope and friendship prevail." }
    ]
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Forrest+Gump",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Forrest+Gump+Backdrop",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg",
    reviews: [
      { user: "Grace Hill", rating: 9, comment: "Life is like a box of chocolates." },
      { user: "Henry Ingram", rating: 8, comment: "Tom Hanks is brilliant." }
    ]
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://via.placeholder.com/300x450/001122/FFD700?text=Matrix",
    backdrop: "https://via.placeholder.com/1920x1080/000011/FFD700?text=Matrix+Backdrop",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    reviews: [
      { user: "Ivy Johnson", rating: 9, comment: "Red pill or blue pill?" },
      { user: "Jack King", rating: 8, comment: "Groundbreaking effects." }
    ]
  }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize features based on current page
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'index.html' || currentPage === '') {
    loadFeaturedMovies();
    loadLatestReviews();
  } else if (currentPage === 'movies.html') {
    loadAllMovies();
    setupSearchFilter();
  } else if (currentPage === 'movie-detail.html') {
    loadMovieDetail();
    setupTrailerModal();
  } else if (currentPage === 'reviews.html') {
    setupReviewForm();
  } else if (currentPage === 'contact.html') {
    setupContactForm();
  }

  // Initialize star ratings
  initializeStarRatings();
});

// Load featured movies on home page
function loadFeaturedMovies() {
  const featuredContainer = document.getElementById('featured-movies');
  if (!featuredContainer) return;

  const featuredMovies = movies.slice(0, 3);
  featuredContainer.innerHTML = featuredMovies.map(movie => `
    <div class="col-md-4 mb-4">
      <div class="movie-card card h-100">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.year} • ${movie.genre}</p>
          <div class="rating">
            ${generateStars(movie.rating / 2)} <span>${movie.rating}</span>
          </div>
          <a href="movie-detail.html?id=${movie.id}" class="btn btn-primary mt-3">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Load latest reviews on home page
function loadLatestReviews() {
  const reviewsContainer = document.getElementById('latest-reviews');
  if (!reviewsContainer) return;

  const latestReviews = [];
  movies.forEach(movie => {
    movie.reviews.forEach(review => {
      latestReviews.push({ ...review, movieTitle: movie.title, movieId: movie.id });
    });
  });

  latestReviews.sort(() => Math.random() - 0.5); // Shuffle for variety
  const recentReviews = latestReviews.slice(0, 3);

  reviewsContainer.innerHTML = recentReviews.map(review => `
    <div class="col-md-4 mb-4">
      <div class="card movie-card">
        <div class="card-body">
          <h6 class="card-title">${review.movieTitle}</h6>
          <div class="rating mb-2">
            ${generateStars(review.rating)} <small>by ${review.user}</small>
          </div>
          <p class="card-text">"${review.comment}"</p>
          <a href="movie-detail.html?id=${review.movieId}" class="btn btn-outline-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Load all movies on movies page
function loadAllMovies() {
  const moviesContainer = document.getElementById('movies-container');
  if (!moviesContainer) return;

  moviesContainer.innerHTML = movies.map(movie => `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4 movie-item" data-genre="${movie.genre.toLowerCase()}" data-title="${movie.title.toLowerCase()}">
      <div class="movie-card card h-100">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.year} • ${movie.genre}</p>
          <div class="rating">
            ${generateStars(movie.rating / 2)} <span>${movie.rating}</span>
          </div>
          <a href="movie-detail.html?id=${movie.id}" class="btn btn-primary mt-3">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup search and filter on movies page
function setupSearchFilter() {
  const searchInput = document.getElementById('search-input');
  const genreFilter = document.getElementById('genre-filter');

  if (!searchInput || !genreFilter) return;

  function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value.toLowerCase();

    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(item => {
      const title = item.dataset.title;
      const genre = item.dataset.genre;
      const matchesSearch = title.includes(searchTerm);
      const matchesGenre = selectedGenre === '' || genre === selectedGenre;

      if (matchesSearch && matchesGenre) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterMovies);
  genreFilter.addEventListener('change', filterMovies);
}

// Load movie detail
function loadMovieDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = parseInt(urlParams.get('id'));

  if (!movieId) return;

  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;

  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById('movie-year').textContent = movie.year;
  document.getElementById('movie-genre').textContent = movie.genre;
  document.getElementById('movie-rating').innerHTML = `${generateStars(movie.rating / 2)} <span>${movie.rating}</span>`;
  document.getElementById('movie-description').textContent = movie.description;
  document.getElementById('movie-poster').src = movie.poster;
  document.getElementById('movie-backdrop').style.backgroundImage = `url(${movie.backdrop})`;

  // Load reviews
  const reviewsContainer = document.getElementById('movie-reviews');
  reviewsContainer.innerHTML = movie.reviews.map(review => `
    <div class="review-item mb-3 p-3 border-bottom">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <strong>${review.user}</strong>
        <div class="rating">${generateStars(review.rating)}</div>
      </div>
      <p class="mb-0">${review.comment}</p>
    </div>
  `).join('');
}

// Setup trailer modal
function setupTrailerModal() {
  const trailerBtn = document.getElementById('trailer-btn');
  const trailerModal = document.getElementById('trailer-modal');

  if (!trailerBtn || !trailerModal) return;

  trailerBtn.addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
      const modal = new bootstrap.Modal(trailerModal);
      document.getElementById('trailer-iframe').src = movie.trailer;
      modal.show();
    }
  });

  trailerModal.addEventListener('hidden.bs.modal', function() {
    document.getElementById('trailer-iframe').src = '';
  });
}

// Setup review form
function setupReviewForm() {
  const reviewForm = document.getElementById('review-form');
  if (!reviewForm) return;

  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('reviewer-name').value.trim();
    const email = document.getElementById('reviewer-email').value.trim();
    const movie = document.getElementById('movie-select').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById('review-comment').value.trim();

    // Validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!email || !isValidEmail(email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!movie) {
      isValid = false;
      errorMessage += 'Please select a movie.\n';
    }

    if (!rating) {
      isValid = false;
      errorMessage += 'Please select a rating.\n';
    }

    if (!comment) {
      isValid = false;
      errorMessage += 'Comment is required.\n';
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Success
    alert('Review submitted successfully!');
    reviewForm.reset();
  });
}

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Validation
    let isValid = true;
    let errorMessage = '';

    if (!name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!email || !isValidEmail(email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!subject) {
      isValid = false;
      errorMessage += 'Subject is required.\n';
    }

    if (!message) {
      isValid = false;
      errorMessage += 'Message is required.\n';
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Success
    alert('Message sent successfully!');
    contactForm.reset();
  });
}

// Initialize star ratings
function initializeStarRatings() {
  const starContainers = document.querySelectorAll('.star-rating');

  starContainers.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index) => {
      star.addEventListener('click', function() {
        // Remove active class from all stars
        stars.forEach(s => s.classList.remove('active'));

        // Add active class to clicked star and previous stars
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('active');
        }

        // Set hidden input value
        const hiddenInput = container.querySelector('input[type="hidden"]');
        if (hiddenInput) {
          hiddenInput.value = index + 1;
        }
      });
    });
  });
}

// Generate star HTML
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
