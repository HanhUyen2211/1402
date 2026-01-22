// Letter Content JavaScript functionality

class LetterContent {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.setDynamicBackground();
        this.setDynamicLetterContent();
        this.setupEventListeners();
        this.updateTime();
        // Update time every second
        setInterval(() => this.updateTime(), 1000);
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

        const backgroundImage = backgroundMap[selectedDate] || '../../source/lockscreen-bg.png';

        // Apply the background to the lockscreen-bg element
        const lockscreenBg = document.querySelector('.lockscreen-bg');
        if (lockscreenBg) {
            lockscreenBg.style.backgroundImage = `url('${backgroundImage}')`;
        }

        console.log(`Letter content background set for date ${selectedDate}: ${backgroundImage}`);
    }

    setDynamicLetterContent() {
        // Get selected date from localStorage
        const selectedDate = localStorage.getItem('selectedDate') || '1402';

        // Map dates to different letter content
        const letterContentMap = {
            '1402': `Although Scott said it didn't matter to him, he knew deep
                    inside that it did. They had been friends as long as he could
                    remember and not once had he had to protest that something Joe
                    apologized for doing didn't really matter. Scott stuck to his
                    lie and insisted again and again that everything was fine as
                    Joe continued to apologize. Scott already knew that despite
                    his words accepting the apologies that their friendship would
                    never be the same.

                    It wasn't supposed to end that way. The plan had been
                    meticulously thought out and practiced again and again. There
                    was only one possible result once it had been implemented, but
                    as they stood there the result wasn't anything close to what
                    it should have been. The fog was as thick as pea soup. This
                    was a problem. Gary was driving but couldn't see a thing in
                    front of him. He knew he should stop, but the road was narrow
                    so if he did, it would be right in the center of the road. He
                    was sure that another car would end up rear-ending him, so he
                    continued forward despite the lack of visibility. This was an
                    unwise move.

                    Debbie had taken George for granted for more than fifteen
                    years now. He wasn't sure what exactly had made him choose
                    this time and place to address the issue, but he decided that
                    now was the time. He looked straight into her eyes and just as
                    she was about to speak, turned away and walked out the door.

                    Colors bounced around in her head. They mixed and threaded
                    themselves together. Even colors that had no business being
                    together. They were all one, yet distinctly separate at the
                    same time. How was she going to explain this to the others?`,

            '1602': `The rain was coming down in sheets now, making it nearly
                    impossible to see the road ahead. Sarah gripped the steering
                    wheel tighter, her knuckles turning white. She knew she should
                    pull over, but the thought of being stranded in this weather
                    terrified her more than continuing. The radio crackled with
                    warnings about flash flooding, but she turned it down. She
                    just needed to get home.

                    Michael stared at the computer screen, his eyes burning from
                    hours of staring at code. The bug was elusive, hiding somewhere
                    in the thousands of lines he'd written. He rubbed his temples,
                    trying to clear his mind. Sometimes programming felt like
                    hunting for a needle in a haystack, except the haystack was
                    made of digital ones and zeros.

                    The old bookstore on the corner had been there for as long as
                    anyone could remember. Its shelves sagged under the weight of
                    countless stories, each book a portal to another world. Emma
                    loved coming here, losing herself in the musty smell of aged
                    paper and forgotten adventures. Today, she found a first
                    edition that made her heart skip a beat.`,

            '1702': `The coffee shop was unusually quiet this morning. Alex sat
                    by the window, watching raindrops race down the glass. His
                    laptop screen reflected in his glasses, showing half-written
                    code that refused to cooperate. He sighed and took another
                    sip of his now-cold coffee. Sometimes creativity needed a
                    nudge, and today seemed to be one of those days.

                    The museum exhibit on ancient civilizations had always
                    fascinated her. As a child, she'd spend hours imagining what
                    life was like for those people thousands of years ago. Now,
                    as an archaeologist, she got to uncover those secrets for
                    real. The latest dig had revealed artifacts that would
                    rewrite history books.

                    He found the old photograph while cleaning out his
                    grandmother's attic. It showed a young woman standing in
                    front of what looked like a small cottage, smiling brightly
                    at the camera. On the back, in faded ink, were the words
                    "Summer 1942." He wondered who she was and what her story
                    might be.`,

            '1802': `The mountain trail was steeper than she'd anticipated. Every
                    step sent small rocks tumbling down the path behind her. The
                    view from up here was breathtaking though - valleys spread
                    out like a patchwork quilt, dotted with lakes that sparkled
                    in the sunlight. She paused to catch her breath, wiping sweat
                    from her brow. This was why she hiked, for moments like these.

                    The jazz club was dimly lit, the kind of place where secrets
                    were whispered and dreams were born. The saxophone player
                    on stage poured his soul into every note, and the crowd
                    swayed as if under a spell. She closed her eyes, letting
                    the music wash over her. For a moment, all her worries
                    melted away.

                    He'd been collecting vintage cameras for years. Each one
                    told a story - where it had been, who had used it, what
                    moments it had captured. His latest acquisition was a
                    beautiful Rolleiflex from the 1950s. As he held it, he
                    imagined the photographs it might have taken.`,

            '1902': `The library was her sanctuary. Row after row of bookshelves
                    stretched into infinity, each volume containing worlds waiting
                    to be explored. She ran her fingers along the spines, feeling
                    the texture of countless stories. Today she was looking for
                    something specific - a book about forgotten myths and legends.
                    The librarian had mentioned it might be in the restricted
                    section.

                    The bakery smelled like heaven. Fresh bread, cinnamon rolls,
                    and the rich aroma of brewing coffee filled the air. He came
                    here every morning for his ritual - a black coffee and a
                    croissant. The owner knew him by name, and they often chatted
                    about life while he waited for his order.

                    She watched the sunset from her balcony, paintbrush in hand.
                    The sky was a canvas of oranges, pinks, and purples, constantly
                    changing as the sun dipped below the horizon. She tried to
                    capture it all, knowing that no matter how hard she tried,
                    nature's masterpiece would always be more beautiful than her
                    rendition.`,

            '2002': `The train rattled through the countryside, each car swaying
                    gently with the rhythm of the tracks. He stared out the
                    window, watching fields blur past. This journey was both
                    an end and a beginning - leaving behind the familiar for
                    the unknown. His mind wandered to what awaited him at the
                    other end of this trip.

                    The workshop was filled with the scent of sawdust and oil.
                    Tools hung neatly on the walls, each one with a specific
                    purpose. He was restoring an old violin, carefully repairing
                    the cracks and polishing the wood. Music was his passion,
                    and bringing instruments back to life was his way of keeping
                    that music alive.

                    She danced in the empty studio, the hardwood floor cool
                    beneath her bare feet. The music flowed through her like
                    a river, carrying away all her worries. This was her therapy,
                    her meditation, her joy. In these moments, she was completely
                    free.`,

            '2102': `The ocean waves crashed against the rocks, sending sprays
                    of water into the air. She stood at the cliff's edge, feeling
                    the wind whip through her hair. The vastness of the sea
                    always made her feel small, yet connected to something much
                    larger. She closed her eyes and listened to the rhythm of
                    the waves, letting it calm her restless mind.

                    The telescope revealed wonders he never knew existed. Stars
                    that were born billions of years ago, galaxies swirling in
                    cosmic dances, planets orbiting distant suns. He spent his
                    nights on the roof, charting the heavens and dreaming of
                    what lay beyond. Each discovery fueled his curiosity further.

                    The garden was her pride and joy. She'd planted each seed
                    with care, watched them sprout and grow into beautiful
                    flowers and vegetables. Now, in the golden light of evening,
                    she harvested her crops. There was something deeply satisfying
                    about growing your own food, about nurturing life from the
                    earth.`,

            '2202': `The city lights twinkled like stars brought down to earth.
                    From her apartment window, she watched people hurrying along
                    the sidewalks, each with their own story, their own dreams.
                    She wondered where they were going, what they were thinking,
                    what made their hearts beat faster. The anonymity of the
                    city both comforted and saddened her.

                    The piano keys felt cool under his fingers. He played scales
                    first, warming up his muscles, then moved into the piece he'd
                    been practicing. Music had always been his escape, his way
                    of expressing emotions that words couldn't capture. As the
                    notes filled the room, he felt a sense of peace settle over him.

                    She found the message in a bottle while walking along the
                    beach. The paper inside was yellowed with age, the ink faded
                    but still legible. It told of love lost at sea, of dreams
                    that never came true. She wondered who had written it, and
                    if they ever found what they were looking for.`
        };

        // Map dates to letter content screen smart space (different from other screens)
        const smartSpaceContentMap = {
            '1402': {
                smartSpaceTitle: 'your letter awaits',
                smartSpaceSubtitle: 'read the words of love'
            },
            '1602': {
                smartSpaceTitle: 'memory revealed',
                smartSpaceSubtitle: 'treasure every word'
            },
            '1702': {
                smartSpaceTitle: 'heartfelt message',
                smartSpaceSubtitle: 'crafted with endless love'
            },
            '1802': {
                smartSpaceTitle: 'dream in writing',
                smartSpaceSubtitle: 'our shared tomorrow unfolds'
            },
            '1902': {
                smartSpaceTitle: 'warm embrace found',
                smartSpaceSubtitle: 'in every loving sentence'
            },
            '2002': {
                smartSpaceTitle: 'infinite connection',
                smartSpaceSubtitle: 'through these eternal words'
            },
            '2102': {
                smartSpaceTitle: 'our universe explored',
                smartSpaceSubtitle: 'one beautiful word at a time'
            },
            '2202': {
                smartSpaceTitle: 'passion ignited',
                smartSpaceSubtitle: 'in letters that never fade'
            }
        };

        const letterText = letterContentMap[selectedDate] || letterContentMap['1402'];
        const smartSpaceContent = smartSpaceContentMap[selectedDate] || smartSpaceContentMap['1402'];

        // Apply the content to the letter text element
        const letterTextElement = document.querySelector('.letter-text');
        if (letterTextElement) {
            letterTextElement.textContent = letterText;
        }

        // Update smart space content
        const smartSpaceTitle = document.querySelector('.smart-space-title');
        if (smartSpaceTitle) {
            smartSpaceTitle.textContent = smartSpaceContent.smartSpaceTitle;
        }

        const smartSpaceSubtitle = document.querySelector('.moon-text');
        if (smartSpaceSubtitle) {
            smartSpaceSubtitle.textContent = smartSpaceContent.smartSpaceSubtitle;
        }

        console.log(`Letter content set for date ${selectedDate}`);
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
        // Back to home button
        const backToHome = document.getElementById('back-to-home');
        if (backToHome) {
            backToHome.addEventListener('click', () => {
                this.goBackToHome();
            });
        }

        // Smart space interaction
        const smartSpace = document.querySelector('.smart-space');
        if (smartSpace) {
            smartSpace.addEventListener('click', () => {
                this.handleSmartSpaceClick();
            });
        }

        // Letter text interaction
        const letterText = document.querySelector('.letter-text');
        if (letterText) {
            letterText.addEventListener('click', () => {
                this.handleLetterClick();
            });
        }
    }

    goBackToHome() {
        // Navigate back to homescreen
        window.location.href = 'index.html';
    }

    handleSmartSpaceClick() {
        // Handle smart space interaction
        console.log('Smart space clicked');
    }

    handleLetterClick() {
        // Handle letter text interaction
        console.log('Letter clicked - you can read the beautiful message!');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LetterContent();
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

    .letter-paper {
        animation: fadeInUp 0.8s ease-out;
    }

    .back-to-home:hover span {
        text-shadow: 0 0 8px rgba(0, 139, 35, 0.5);
    }

    .letter-text:hover {
        cursor: text;
        user-select: text;
    }
`;
document.head.appendChild(style);
