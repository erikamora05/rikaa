document.addEventListener('DOMContentLoaded', () => {
    const lessonCards = document.querySelectorAll('.lesson-card');

    lessonCards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelector('.item-details');

            // Close all other open details sections
            document.querySelectorAll('.item-details').forEach(otherDetails => {
                if (otherDetails !== details && otherDetails.style.display === 'block') {
                    otherDetails.style.display = 'none';
                }
            });

            // Toggle the clicked details section
            if (details) {
                if (details.style.display === 'block') {
                    details.style.display = 'none';
                } else {
                    details.style.display = 'block';
                }
            }
        });
    });

    // Optional: Smooth scrolling for quiz button (if it links to a specific quiz section)
    const quizButton = document.querySelector('.quiz-button');
    if (quizButton) {
        quizButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            // You can add logic here to start a quiz or navigate to a quiz page
            alert('Yay! Saatnya Kuis! Halaman kuis akan datang sebentar lagi!');
            // For a real quiz, you might redirect: window.location.href = 'quiz.html';
            
        });
    }
    
});