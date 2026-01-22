// Password Entry JavaScript functionality

class PasswordEntry {
    constructor() {
        this.password = '';
        this.maxLength = 27; // Length of dots string
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
        // Password dots input
        const passwordDots = document.getElementById('password-dots');
        if (passwordDots) {
            passwordDots.addEventListener('click', () => {
                this.handlePasswordInput();
            });
        }

        // Send button
        const sendButton = document.getElementById('send-button');
        if (sendButton) {
            sendButton.addEventListener('click', () => {
                this.submitPassword();
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

        // Keyboard input simulation
        document.addEventListener('keydown', (event) => {
            if (event.key >= '0' && event.key <= '9') {
                this.addDigit(event.key);
            } else if (event.key === 'Backspace') {
                this.removeDigit();
            } else if (event.key === 'Enter') {
                this.submitPassword();
            }
        });
    }

    handlePasswordInput() {
        const passwordDots = document.getElementById('password-dots');
        passwordDots.classList.add('active');

        // Simulate adding a digit
        this.addDigit(Math.floor(Math.random() * 10).toString());

        setTimeout(() => {
            passwordDots.classList.remove('active');
        }, 200);
    }

    addDigit(digit) {
        if (this.password.length < this.maxLength) {
            this.password += digit;
            this.updatePasswordDisplay();
        }
    }

    removeDigit() {
        if (this.password.length > 0) {
            this.password = this.password.slice(0, -1);
            this.updatePasswordDisplay();
        }
    }

    updatePasswordDisplay() {
        const passwordDots = document.getElementById('password-dots');

        if (this.password.length === 0) {
            passwordDots.textContent = '';
            passwordDots.classList.remove('filled');
            return;
        }

        passwordDots.textContent = '●'.repeat(this.password.length);
        passwordDots.classList.add('filled');
    }

    submitPassword() {
        if (this.password.length > 0) {
            const sendButton = document.getElementById('send-button');
            sendButton.classList.add('active');

            // Get selected date from localStorage
            const selectedDate = localStorage.getItem('selectedDate') || '1402';

            // Map dates to passwords (randomly generated for now)
            const passwordMap = {
                '1402': '28122023',  // Original password
                '1602': '09022024',  // Random password
                '1702': '01042024',  // Random password
                '1802': '04102024',  // Random password
                '1902': '14082025',  // Random password
                '2002': '01122025',  // Random password
                '2102': '3819',  // Random password
                '2202': '1608'   // Random password
            };

            const correctPassword = passwordMap[selectedDate] || '28122023';

            // Check password
            if (this.password === correctPassword) {
                // Correct password - proceed to next screen
                setTimeout(() => {
                    sendButton.classList.remove('active');
                    this.unlockDevice();
                }, 300);
            } else {
                // Wrong password - show error message
                setTimeout(() => {
                    sendButton.classList.remove('active');
                    this.showWrongPasswordMessage();
                }, 300);
            }
        }
    }

    showWrongPasswordMessage() {
        // Clear current password
        this.password = '';
        this.updatePasswordDisplay();

        // Show error message
        const passwordDots = document.getElementById('password-dots');
        const originalText = passwordDots.textContent;

        // Flash red to indicate wrong password
        passwordDots.style.color = '#FF4444';
        passwordDots.textContent = 'Wrong password - try again';

        setTimeout(() => {
            passwordDots.style.color = '';
            passwordDots.textContent = originalText;
        }, 2000);
    }

    unlockDevice() {
        // Navigate to letter notification screen after successful password entry
        window.location.href = 'letter-notification.html';
    }

    goBack() {
        // Navigate back to lockscreen
        window.location.href = 'lockscreen.html';
    }

    handleQuickControl() {
        // Handle camera quick control
        console.log('Quick control activated');
    }

    handleSmartSpaceClick() {
        // Handle smart space interaction
        console.log('Smart space clicked');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordEntry();
});

// Add visual enhancements
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .password-dots:hover {
        animation: pulse 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);
