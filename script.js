// Birthday Webapp Interactive Features

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Create floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.color = getRandomPinkColor();
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'floatUp 3s linear forwards';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
    
    // Get random pink color
    function getRandomPinkColor() {
        const pinkColors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ff91a4'];
        return pinkColors[Math.floor(Math.random() * pinkColors.length)];
    }
    
    // Create confetti effect
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.fontSize = Math.random() * 25 + 20 + 'px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = 'confettiFall 4s linear forwards';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 4000);
    }
    
    // Add click interaction to birthday card
    const birthdayCard = document.querySelector('.birthday-card');
    if (birthdayCard) {
        birthdayCard.addEventListener('click', function() {
            // Create multiple hearts and confetti
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createFloatingHeart(), i * 200);
                setTimeout(() => createConfetti(), i * 300);
            }
            
            // Add a special glow effect
            this.style.boxShadow = '0 0 30px rgba(255, 105, 180, 0.8)';
            setTimeout(() => {
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }, 1000);
        });
    }
    
    // Automatic floating hearts every few seconds
    setInterval(createFloatingHeart, 2000);
    
    // Automatic confetti every few seconds
    setInterval(createConfetti, 3000);
    
    // Add hover effect to wish items
    const wishItems = document.querySelectorAll('.wish-item');
    wishItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, #ff6b9d, #f9ca24)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(45deg, #ff9a9e, #fecfef)';
        });
    });
    
    // Special birthday message that appears after a delay
    setTimeout(() => {
        const specialMessage = document.createElement('div');
        specialMessage.innerHTML = '✨ আজকের দিনটি তোমার জন্য খুব বিশেষ! ✨';
        specialMessage.style.position = 'fixed';
        specialMessage.style.top = '20px';
        specialMessage.style.left = '50%';
        specialMessage.style.transform = 'translateX(-50%)';
        specialMessage.style.background = 'linear-gradient(45deg, #ff6b9d, #f9ca24)';
        specialMessage.style.color = 'white';
        specialMessage.style.padding = '10px 20px';
        specialMessage.style.borderRadius = '25px';
        specialMessage.style.fontSize = '16px';
        specialMessage.style.fontWeight = 'bold';
        specialMessage.style.zIndex = '10000';
        specialMessage.style.opacity = '0';
        specialMessage.style.transition = 'opacity 1s ease';
        
        document.body.appendChild(specialMessage);
        
        // Fade in the message
        setTimeout(() => {
            specialMessage.style.opacity = '1';
        }, 100);
        
        // Fade out after 5 seconds
        setTimeout(() => {
            specialMessage.style.opacity = '0';
            setTimeout(() => {
                if (specialMessage.parentNode) {
                    specialMessage.parentNode.removeChild(specialMessage);
                }
            }, 1000);
        }, 5000);
    }, 2000);
    
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);