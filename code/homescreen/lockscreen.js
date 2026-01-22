// Lockscreen JavaScript functionality

class Lockscreen {
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

        // Update big clock
        const bigClock = document.querySelector('.clock-time');
        if (bigClock) {
            bigClock.innerHTML = content.bigClock;
        }

        console.log(`Lockscreen content set for date ${selectedDate}`);
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
        // Fingerprint unlock
        const fingerprint = document.querySelector('.fingerprint');
        if (fingerprint) {
            fingerprint.addEventListener('click', () => {
                this.unlockDevice();
            });
        }

        // Click to open text
        const clickToOpen = document.querySelector('.click-to-open');
        if (clickToOpen) {
            clickToOpen.addEventListener('click', () => {
                this.unlockDevice();
            });
        }

        // Back button
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                this.goBack();
            });
        }

        // Quick controls
        const quickControls = document.querySelector('.quick-controls');
        if (quickControls) {
            quickControls.addEventListener('click', () => {
                this.handleQuickControl();
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

    unlockDevice() {
        // Add unlock animation
        const lockscreen = document.querySelector('.lockscreen');
        lockscreen.classList.add('unlock-animation');

        // Navigate to password entry screen after animation
        setTimeout(() => {
            window.location.href = 'password-entry.html';
        }, 300);
    }

    handleQuickControl() {
        // Handle camera quick control
        console.log('Quick control activated');
        // Could open camera or show options
    }

    goBack() {
        // Navigate back to homescreen
        window.location.href = 'index.html';
    }

    handleSmartSpaceClick() {
        // Handle smart space interaction
        console.log('Smart space clicked');
        // Could show notifications or additional info
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Lockscreen();
});

// Add some visual enhancements
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .fingerprint:hover .fingerprint-icon {
        animation: pulse 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);
