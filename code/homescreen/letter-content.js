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
            '1402': 'source/lockscreen-bg.png',
            '1602': 'source/bg02.png',
            '1702': 'source/bg03.png',
            '1802': 'source/bg04.png',
            '1902': 'source/bg05.png',
            '2002': 'source/bg06.png',
            '2102': 'source/bg07.png',
            '2202': 'source/bg08.png'
        };

        const backgroundImage = backgroundMap[selectedDate] || 'source/lockscreen-bg.png';

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
            '1402': `heungg ah,
gửi he iu dấu như con gấu cào cấu tim fu, dị nà 2 năm hơn chúm ta bên nhau gòi, nói dài cũng không dài nhưng ngắn thì chắc chắn là không ròi. hai năm em he chỉ típ nhận fu sau 1 tỷ tỷ cuộc cãi nhau. hai năm đầu ôm tay ấp bíc về cột sống cụa nhau. gáng gáng vài năm gòi mìn chum nhà nha.
dạo này em he chuyển nhà, nên thời gian tới chắc sẽ ít gọi điện, chắc hẳn cả 2 đều bận. dù bận đến mấy thì miễn chái tym ta luôn hướng về nhau như lực hút chái đất là đượt hjhj. đến giai đoạn đi lèm gòi, phải giữ gìn sức khỏe hơn thoi, ăn chín, uống sôi, ăn no, uống đủ nhớ chưa.
nay nà ngày tìn nhân, hong béc núc này fu bếu ràu chưa, nma lúc ziết cí nì thì zẫn nghèo. chắc lúc nì em he về nội đón tết với bà nội gòi. trời xuân hanh lạnh, mặc nhìu áo ấm lên đó. gòi mụt năm nào đó chúng ta dưới pháo hoa 7 sắc cầu vồng đón tết với nhau chum 1 bầu chời nè.
fu húi hong có rì, có chái tym zàng cho iêm he hoi. mặc dù mít ướt, nma iu em he. làm fu rựn là fu tới trọ xới trọ he lên á. sợ chưa.
heungg ah, lễ tình nhân ấm áp ~
đọc xong thì hun fu 10 cái nhá hehe.
yêu em bé của fushi,
sao nhỏ của trăng nhỏ`,

            '1602': `heungg ah~,
hmm lúc đọc có nì chắc pháo hoa giao thừa nổ ngợp nhà òi, hong béc năm nay chúng ta có đón giao thừa chung hong nữa nhỉ?
nhớ năm nào ta cũm gọi điện cùng đón giao thừa với nhau, hjhj ấm áp mò. em bé của fu luôn muốn đón giao thừa cũng bà nội, vậy nên nhớ ôm bà 1 cí nè. 
năm nay có gì mới hong ta, có lạnh queo quắt hong nhỉ?
năm mới gòi, chúng ta đón giao thừa cùng nhau 3 lần gòi đó. fu hong bíc lại nhanh đến thế luôn, hjhj fu nói mà, fu chưa yêu ai quá 1 năm cả, riêng em he là nhìu năm hoi. 
năm mới gòi, lại thêm tuổi, lại trưởng thành hơn tí gòi, huhu cả 2 đứa sắp gia nhập tư bản rùi. hong béc khi nào mới gặp nhau, ôm nhao ngủ thật ngon nựa. năm nay em bé muốn đi đâu nè? muốn đi biển nữa hongg, thấy thích biển quá chời lun.
đi làm dù có bận thì cũng dành cho nhau 1 tí thời gian nè, gòi chúng ta cũng sẽ vượt qua thoi, đúng hongg? cùng thở, cùng lớn, cùng chưởng thành cùng nhau. mọi nẻo đường, hai chúm ta đều có nhau. buồn thì tìm fu giải bùn, vui thì kể nhau nghe, bựt mình thì hai đứa cùm chửi nè. 
tuổi mới, mau ăn, chóng lớn!!!
yêu em bé của fushi, 
sao bự chà bá của trăng nhỏ ~ heungg_m`,

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

            '1802': `heungg ah,
Nay là mùng 2 rùi, em bé có dui hem, lì xì được núi tiền to bù phụ cấp công ty đáng ghéc chưa?
nay em bé định làm gì, đi chơi hay đi họ hàng, có hẹn hò với ai hongg. nhớ em bé quá, muốn ôm một cí nè. trời lạnh nhiều hongg, càng lạnh càng ôm càng ấm hjhj. khi nào mới được gặp em bé ta? chưa có xếp thời gian gì cả, hy vọng sẽ gặp nhiều ơi là nhiều. 
lúc viết cí ní, là fu với em bé mới cãi nhau đùng đùng ví chuyện đi lèm cụa em bé. fu hong hỉu sao em bé cứ mún đi làm công ty đó quài, chạ hợp, mà cứng đầu. nói fu ngang như cua, chứ em bé ngang hơn cha của cua. haizz, mong em bé đi làm thuận lợi thui, chứ bíc làm dao bây giờ. rựn ròi hong péc có ngủ ngon hong, rựn mí hôm trời. ngừi ta quay clip, mà ngừi ta tập cí đó nhạc nhanh quá là ngừi ta bị lóng ngóng. bth mà cí gì nhanh quá là người ta lóng ngóng rồi cuống làm hong có được, hong giỏi lắm hjhj, nên em bé thông cảm vho fu được hong? 
mà ngừi ta thèm ngủ, gọi mãi hong dậy chắc em bé đin cí đầu lắm. :( ngừi ta cũm mún dậy lắm mà mợt mở mắt hong nổi, 😭 😭, cố hớt sức gòi. chin nỗi iem pé vì đoiẹ fu thối ngủ như châu này dậy.
hoiii, viết dị hoiii, còn để dành mai viết tiếp hehe, chúc iem pé mụt ngày tốt lành, ấm áp, iu fu hơn nè, kaka
mến thưng em bé,
fushi cụa heungg~`,

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
