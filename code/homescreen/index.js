// Homescreen JavaScript functionality

class Homescreen {
    constructor() {
        this.timeElement = document.querySelector('.time');
        this.initialize();
    }

    initialize() {
        this.updateTime();
        this.setupEventListeners();
        // Update time every second
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        this.timeElement.textContent = timeString;
    }

    setupEventListeners() {
        // Add touch/swipe functionality for calendar days
        const calendarDays = document.querySelectorAll('.calendar-day');
        calendarDays.forEach(day => {
            day.addEventListener('click', () => {
                this.handleDayClick(day);
            });

            // Add subtle hover effect
            day.addEventListener('mouseenter', () => {
                day.style.transform = 'scale(1.05)';
                day.style.transition = 'transform 0.2s ease';
            });

            day.addEventListener('mouseleave', () => {
                day.style.transform = 'scale(1)';
            });
        });

        // Add interaction to smart space
        const smartSpace = document.querySelector('.smart-space');
        smartSpace.addEventListener('click', () => {
            this.handleSmartSpaceClick();
        });
    }

    handleDayClick(dayElement) {
        // Simple animation feedback
        dayElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
            dayElement.style.transform = 'scale(1)';
        }, 150);

        // Get the date from data attribute
        const selectedDate = dayElement.getAttribute('data-date');
        console.log(`Clicked on ${selectedDate}`);

        // Store selected date in localStorage for use in other screens
        localStorage.setItem('selectedDate', selectedDate);

        // Navigate to lockscreen
        window.location.href = 'lockscreen.html';
    }

    handleSmartSpaceClick() {
        // Smart space interaction - could open search or show more info
        const smartSpace = document.querySelector('.smart-space');
        smartSpace.style.transform = 'scale(0.98)';
        setTimeout(() => {
            smartSpace.style.transform = 'scale(1)';
        }, 150);

        console.log('Smart space clicked');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Homescreen();
});

// Add some CSS animations via JavaScript for better performance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .calendar-day {
        animation: fadeIn 0.6s ease-out;
    }

    .calendar-day:nth-child(1) { animation-delay: 0.1s; }
    .calendar-day:nth-child(2) { animation-delay: 0.2s; }
    .calendar-day:nth-child(3) { animation-delay: 0.3s; }
    .calendar-day:nth-child(4) { animation-delay: 0.4s; }
`;
document.head.appendChild(style);
