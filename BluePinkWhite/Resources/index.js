function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

const quotes = shuffleArray ([
    ['"I am transgender and this doesn\'t mean that I am unlovable."', "Lana Wachowski, HRC Visibility Award Acceptance Speech.",],
    ['"Love him and let him love you. Do you think anything else under heaven really matters?"', "James Baldwin, \'Giovanni\'s Room\', 1956."],
    ['"There isn\'t a trans moment… It\'s just a presence where there was an absence. We deserve so much more."', "Hari Nef, The New Yorker, 2016." ],
    ['"Remember this, whoever you are, however you are, you are equally valid, equally justified, and equally beautiful."', 'Juno Dawson, \'The Gender Games: The Problems With Men and Women, From Someone Who Has Been Both,\' 2017.'],
    ['"I would like them to understand that we are people. We\'re human beings, and this is a human life. This is reality for us, and all we ask for is acceptance and validation for what we say that we are. It\'s a basic human right."', 'Andreja Pejic, Vogue Exclusive Interview, 2014.'],
    ['"But you can only lie about who you are for so long without going crazy."','Ellen Wittlinger, \'Parrotfish\', 2007.'],
    ['"Include everyone, no matter their gender, sexual orientation, race, or religion. We are all human beings and we are part of society."', 'Lea T, BBC Interview, 2016.'],
    ['"It\'s not just about one person, it\'s about thousands of people. It\'s not just about me, it\'s about all of us accepting one another. We\'re all different."', 'Caitlyn Jenner, Arthur Ashe Courage Award, 2015.'],
    ['"I did not want to cheat my own reality. I simply wasn\'t able to do that. My education, my very being was telling me to be honest with myself."','Manabi Bandyopadhyay, Interview with Caravan, 2015.'],
    ['"To all trans youth out there, I would like to say respect yourself and be proud of who you are. All human beings deserve equal treatment no matter their gender identity or sexuality. To be perceived as what you say you are is a basic right."','Andreja Pejic, GLAAD magazine, 2014.'],
    ['"If a transvestite doesn\'t say I\'m gay and I\'m proud and I\'m a transvestite, then nobody else is going to hop up there and say I\'m gay and I\'m proud and I\'m a transvestite for them."','Marsha P. Johnson, \'Out of the Closets: Voices of Gay Liberation,\' 1972.'],
    ['"Please remember, especially in these times of group-think and the right-on chorus, that no person is your friend (or kin) who demands your silence, or denies your right to grow and be perceived as fully blossomed as you were intended."','Alice Walker, \'In Search of Our Mothers\' Gardens,\' 1983.'],
    ['"The Lord is my Shepherd and he knows I\'m gay."','Troy Perry, \'The Autobiography of Rev. Troy D. Perry,\' 1972.'],
    ['"Openness may not completely disarm prejudice, but it\'s a good place to start."','Jason Collins, The Gay Athlete, Sports Illustrated, 2013.'],
    ['"We should indeed keep calm in the face of difference, and live our lives in a state of inclusion and wonder at the diversity of humanity."','George Takei, \'Lions and Tigers and Bears: The Internet Strikes Back,\' 2013.'],
    ['"I think trans women, and trans people in general, show everyone that you can define what it means to be a man or woman on your own terms. A lot of what feminism is about is moving outside of roles and moving outside of expectations of who and what you\'re supposed to be to live a more authentic life."','Laverne Cox, DAME Interview, 2014.'],
    ['"Nature made a mistake, which I have corrected."','Christine Jorgensen, Letter to her parents.'],
    ['"Trans people are extraordinary, strong, intelligent, persistent and resilient. We have to be. And we will not stand for the picking and choosing of rights. We still have hope."','Grace Dolan-Sandrino, Interview with the Washington Post, 2017.'],
    ['"Race, gender, religion, sexuality, we are all people and that\'s it. We\'re all people. We\'re all equal."','Connor Franta, Coming Out Youtube Video, 8 December 2014.'],
    ['"If I wait for someone else to validate my existence, it will mean that I\'m shortchanging myself."','Zanele Muholi.'],
    ['"Being transgender, like being gay, tall, short, white, black, male, or female, is another part of the human condition that makes each individual unique and something over which we have no control. We are who we are in the deepest recesses of our minds, hearts, and identities."','Linda Thompson.'],
    ['"All of us are put in boxes by our family, by our religion, by our society, our moment in history, even our own bodies. Some people have the courage to break free."','Geena Rocero, TED Talk, 2014.'],
    ['"In trans woman\'s eyes, I see a wisdom that can only come from having to fight for your right to be recognized as female, a raw strength that only comes from unabashedly asserting your right to be feminine in an inhospitable world."','Julia Serano, \'Whipping Girl: A Transsexual Woman on Sexism and the Scapegoating of Femininity,\' 2007.'],
    ['"My silences had not protected me. Your silence will not protect you."','Audre Lorde, \'The Cancer Journals,\' 1980.'],
    ['"I\'m not missing a minute of this. It\'s the revolution!"','Sylvia Rivera, New York Times, 1969.'],
    ['"If a bullet should enter my brain, let that bullet destroy every closet door."','Harvey Milk, \'Randy Shilt\'s The Mayor of Castro Street: The Life and Times of Harvey Milk,\' 1977.'],
    ['"There will not be a magic day when we wake up and it\'s now OK to express ourselves publicly. We make that day by doing things publicly until it\'s simply the way things are."','Tammy Baldwin, \'Never Doubt\', Speech at Millennium March for Equality, 2000.'],
    ['"Every gay and lesbian person who has been lucky enough to survive the turmoil of growing up is a survivor. Survivors always have an obligation to those who will face the same challenges."','Bob Paris, \'Straight from the Heart,\' 1995.'],
    ['"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one\'s definition of your life; define yourself."','Harvey Fierstein.'],
    ['"The beauty of standing up for your rights is others see you standing and stand up as well."','Cassandra Duffy.']
    ]);

let quoteCount = 0;
let cnt = 0;

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

function play(index) {
    const [q, a] = quotes[index];
    let elementHeading = document.getElementById('quoteheadingID');
    let elementAuthor = document.getElementById('quoteauthorID');
            
    document.querySelector(".quoteheading").className = "quoteheading";
    requestAnimationFrame(function(time) {
        requestAnimationFrame(function(time) {
            elementHeading.textContent = q;
            document.querySelector(".quoteheading").className = "quoteheading fadein";
        });
    });

    document.querySelector(".quoteauthor").className = "quoteauthor";
    requestAnimationFrame(function(time) {
        requestAnimationFrame(function(time) {
            elementAuthor.textContent = a;
            document.querySelector(".quoteauthor").className = "quoteauthor fadein";
        });
    });

}

function clickEvent(event) {
    if (whichButton = event.target.classList.contains('next')|| event.type==='load') {
        quoteCount++;
        if (quoteCount === quotes.length) quoteCount = 0;
        clearInterval(cnt);
        setTimeout(play(quoteCount),8000);
    } else
    if (whichButton = event.target.classList.contains('previous')) {
        quoteCount--;
        if (quoteCount < 0) quoteCount=0;
        clearInterval(cnt);
        setTimeout(play(quoteCount),8000);
    }

    cnt = setInterval(getQuote, 8000);
}


function getQuote() {
    if (quoteCount === quotes.length) quoteCount = 0;
    play(quoteCount);
    quoteCount++;
    
    document.querySelector('.next').addEventListener('click', clickEvent);
    document.querySelector('.previous').addEventListener('click', clickEvent);
}

function openNav() {
    document.getElementById('open').style.display = "none";
    document.getElementById('mobile_nav').style.width = "90vw";
}

function closeNav() {
    document.getElementById('mobile_nav').style.width = '0';
    document.getElementById('open').style.display = 'block';
}


    document.onload = clickEvent;
    cnt = setInterval(getQuote, 8000);
    

    
