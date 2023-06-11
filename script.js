// Intersection Observer 1 (working)

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Interaction Observer 2 (working)

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('square-animation');
    });
  });
  
  observer2.observe(document.querySelector('.square-wrapper'));
  observer2.observe(document.querySelector('.square-wrapper-2'));

  // Interaction Observer 3 (working)

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const photo = entry.target.querySelector('.photo');

        if (entry.isIntersecting) {
          photo.classList.add('photo-animation');
          return;
        }

        photo.classList.remove('photo-animation');
    });
});
  
observer3.observe(document.querySelector('.photo-wrapper'));
observer3.observe(document.querySelector('.photo-wrapper-2'));
observer3.observe(document.querySelector('.photo-wrapper-3'));
  
  // Interaction Observer 4 (not working)

  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.image');

        if (entry.isIntersecting) {
          photo.classList.add('image-animation');
          return;
        }

        photo.classList.remove('image-animation');
    });
});
  
observer4.observe(document.querySelectorAll('.image-wrapper'));

// Interaction Observer 5 (not working)

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const years = entry.target.querySelector('.years');
  
      if (entry.isIntersecting) {
        years.classList.add('years-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      years.classList.remove('years-animation');
    });
  });
  
  observer5.observe(document.querySelector('.years-wrapper'));
  
  // Intersection Observer 6 (not working)

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }

    });
});

const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el) => observer6.observe(el));