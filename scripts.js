// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       const targetId = this.getAttribute('href');
//       const targetElement = document.querySelector(targetId);
  
//       if (window.innerWidth < 960 && targetElement) {
//         e.preventDefault();
        
//         // Scroll to the main section ignoring the header
//         const headerHeight = document.getElementById('.header').offsetHeight;
//         const elementPosition = targetElement.offsetTop;
        
//         // If the target is the main section, adjust scroll
//         const offsetPosition = (targetId === "#mainSection") ? elementPosition - headerHeight : elementPosition;
  
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       } else if (targetElement) {
//         // Default scroll behavior for screens 960px and wider
//         window.scrollTo({
//           top: targetElement.offsetTop,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
  