// Letter Notification JavaScript functionality

class LetterNotification {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.setDynamicContent();
        this.setupEventListeners();
        this.updateTime();
        // Update time every second
        setInterval(() => this.updateTime(), 1000);
    }

    setDynamicContent() {
        // Get selected date from localStorage
        const selectedDate = localStorage.getItem('selectedDate') || '1402';

        // Map dates to background images
        const backgroundMap = {
            '1402': '../../source/lockscreen-bg.png',
            '1602': '../../source/bg02.png',
            '1702': '../../source/bg03.png',
            '1802': '../../source/bg04.png',
            '1902': '../../source/bg05.png',
            '2002': '../../source/bg06.png',
            '2102': '../../source/bg07.png',
            '2202': '../../source/bg08.png'
        };

        // Map dates to content
        const contentMap = {
            '1402': {
                smartSpaceTitle: 'let me be your green',
                smartSpaceSubtitle: "'cuz u 're my green",
                bigClock: '14\n02'
            },
            '1602': {
                smartSpaceTitle: 'can i be ur home?',
                smartSpaceSubtitle: 'the home where we belong',
                bigClock: '16\n02'
            },
            '1702': {
                smartSpaceTitle: 'our love grows another year',
                smartSpaceSubtitle: 'year over year',
                bigClock: '17\n02'
            },
            '1802': {
                smartSpaceTitle: 'cuz u’re here',
                smartSpaceSubtitle: 'every season feels worth waitin’ for',
                bigClock: '18\n02'
            },
            '1902': {
                smartSpaceTitle: 'everything’s different',
                smartSpaceSubtitle: 'i got u, others don’t',
                bigClock: '19\n02'
            },
            '2002': {
                smartSpaceTitle: '기다림이 얼마나 길든 중요하지 않아,',
                smartSpaceSubtitle: '끝에 내가 마주할 사람이 너라면',
                bigClock: '20\n02'
            },
            '2102': {
                smartSpaceTitle: 'even if I gave u 1b per month',
                smartSpaceSubtitle: 'it’d never equal what my heart wants 4 u',
                bigClock: '21\n02'
            },
            '2202': {
                smartSpaceTitle: '바보 같은 너에,',
                smartSpaceSubtitle: '나는 끝없이 마음이 간다',
                bigClock: '22\n02'
            }
        };


        const content = contentMap[selectedDate] || contentMap['1402'];
        const backgroundImage = backgroundMap[selectedDate] || '../../source/lockscreen-bg.png';

        // Update background
        const lockscreenBg = document.querySelector('.lockscreen-bg');
        if (lockscreenBg) {
            lockscreenBg.style.backgroundImage = `url('${backgroundImage}')`;
        }

        // Update smart space content
        const smartSpaceTitle = document.querySelector('.smart-space-title');
        if (smartSpaceTitle) {
            smartSpaceTitle.textContent = content.smartSpaceTitle;
        }

        const smartSpaceSubtitle = document.querySelector('.moon-text');
        if (smartSpaceSubtitle) {
            smartSpaceSubtitle.textContent = content.smartSpaceSubtitle;
        }

        console.log(`Letter notification content set for date ${selectedDate}`);
    }

    setDynamicBackground() {
        // Get selected date from localStorage
        const selectedDate = localStorage.getItem('selectedDate') || '1402';

        // Map dates to background images
        const backgroundMap = {
            '1402': '../../source/lockscreen-bg.png',
            '1602': '../../source/bg02.png',
            '1702': '../../source/bg03.png',
            '1802': '../../source/bg04.png',
            '1902': '../../source/bg05.png',
            '2002': '../../source/bg06.png',
            '2102': '../../source/bg07.png',
            '2202': '../../source/bg08.png'
        };

        const backgroundImage = backgroundMap[selectedDate] || '../source/lockscreen-bg.png';

        // Apply the background to the lockscreen-bg element
        const lockscreenBg = document.querySelector('.lockscreen-bg');
        if (lockscreenBg) {
            lockscreenBg.style.backgroundImage = `url('${backgroundImage}')`;
        }

        console.log(`Letter notification background set for date ${selectedDate}: ${backgroundImage}`);
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        });
        const timeElement = document.querySelector('.time');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }

    setupEventListeners() {
        // Yes button - open the letter
        const yesButton = document.getElementById('yes-button');
        if (yesButton) {
            yesButton.addEventListener('click', () => {
                this.openLetter();
            });
        }

        // OK button - open the letter
        const okButton = document.getElementById('ok-button');
        if (okButton) {
            okButton.addEventListener('click', () => {
                this.openLetter();
            });
        }

        // Back button - navigate to password entry
        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                this.goBack();
            });
        }

        // Back to home button
        const backToHome = document.getElementById('back-to-home');
        if (backToHome) {
            backToHome.addEventListener('click', () => {
                this.goBackToHome();
            });
        }

        // Info icon
        const infoIcon = document.getElementById('info-icon');
        if (infoIcon) {
            infoIcon.addEventListener('click', () => {
                this.showInfo();
            });
        }

        // Smart space interaction
        const smartSpace = document.querySelector('.smart-space');
        if (smartSpace) {
            smartSpace.addEventListener('click', () => {
                this.handleSmartSpaceClick();
            });
        }
    }

    openLetter() {
        // Add animation before navigating
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        });

        // Navigate to letter content screen after animation
        setTimeout(() => {
            window.location.href = 'letter-content.html';
        }, 300);
    }

    goBack() {
        // Navigate back to password entry screen
        window.location.href = 'password-entry.html';
    }

    goBackToHome() {
        // Navigate back to homescreen
        window.location.href = 'homescreen.html';
    }

    showInfo() {
        // Show some info about the letter
        console.log('Info: This is a special letter from fushi!');

        // Add visual feedback
        const infoIcon = document.getElementById('info-icon');
        infoIcon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            infoIcon.style.transform = 'scale(1)';
        }, 150);
    }

    handleSmartSpaceClick() {
        // Handle smart space interaction
        console.log('Smart space clicked');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LetterNotification();
});

// Add visual enhancements
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .letter-notification-popup {
        animation: fadeInUp 0.6s ease-out;
    }

    .button:hover span,
    .info-icon:hover span,
    .home-button:hover span {
        text-shadow: 0 0 8px rgba(0, 139, 35, 0.5);
    }
`;
document.head.appendChild(style);
