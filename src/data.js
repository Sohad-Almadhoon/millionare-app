const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question:
      "In what country are all U.S. Major League baseballs currently manufactured?",
    answers: [
      {
        text: "Costa Rica",
        correct: true,
      },
      {
        text: "Haiti",
        correct: false,
      },
      {
        text: "Dominican Republic",
        correct: false,
      },
      {
        text: "Cuba",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "In what language was Anne Frank's original diary first published?",
    answers: [
      {
        text: "Dutch",
        correct: true,
      },
      {
        text: "English",
        correct: false,
      },
      {
        text: "French",
        correct: false,
      },
      {
        text: "German",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "What Shakespeare character says, 'Something is rotten in the state of Denmark'?",
    answers: [
      {
        text: "Hamlet",
        correct: false,
      },
      {
        text: "Marcellus",
        correct: true,
      },
      {
        text: "Horatio",
        correct: false,
      },
      {
        text: "Laertes",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "What best-selling author was born Howard Allen O'Brien?",
    answers: [
      {
        text: "Danielle Steel",
        correct: false,
      },
      {
        text: "Anne Rice",
        correct: true,
      },
      {
        text: "J.K. Rowling",
        correct: false,
      },
      {
        text: "Toni Morrison",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Who is the only Nobel laureate to win an Academy Award?",
    answers: [
      {
        text: "John Steinbeck",
        correct: false,
      },
      {
        text: "Jean-Paul Sartre",
        correct: false,
      },
      {
        text: "George Bernard Shaw",
        correct: true,
      },
      {
        text: "Toni Morrison",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Famous pediatrician and author Dr. Benjamin Spock won an Olympic gold medal in what sport?",
    answers: [
      {
        text: "Swimming",
        correct: false,
      },
      {
        text: "Rowing",
        correct: true,
      },
      {
        text: "Fencing",
        correct: false,
      },
      {
        text: "Sailing",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Now used to refer to a cat, the word 'tabby' is derived from the name of a district of what world capital?",
    answers: [
      {
        text: "Baghdad",
        correct: true,
      },
      {
        text: "New Delhi",
        correct: false,
      },
      {
        text: "Cairo",
        correct: false,
      },
      {
        text: "Moscow",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "On February 22, 1989, what group won the first Grammy award for Best Hard Rock/Metal Performance?",
    answers: [
      {
        text: "Metallica",
        correct: false,
      },
      {
        text: "AC/DC",
        correct: false,
      },
      {
        text: "Living Colour",
        correct: false,
      },
      {
        text: "Jethro Tull",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question:
      "What plant is named after the first U.S. ambassador to Mexico, who brought it to the U.S.?",
    answers: [
      {
        text: "Fuchsia",
        correct: false,
      },
      {
        text: "Juniper",
        correct: false,
      },
      {
        text: "Camellia",
        correct: false,
      },
      {
        text: "Poinsettia",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "Peace Prize to decline the prize?",
    answers: [
      {
        text: "Albert Schweitzer",
        correct: false,
      },
      {
        text: "Le Duc Tho",
        correct: true,
      },
      {
        text: "Andrei Sakharov",
        correct: false,
      },
      {
        text: "Aung San Suu Kyi",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Peace Prize to decline the prize?",
    answers: [
      {
        text: "Albert Schweitzer",
        correct: false,
      },
      {
        text: "Le Duc Tho",
        correct: true,
      },
      {
        text: "Andrei Sakharov",
        correct: false,
      },
      {
        text: "Aung San Suu Kyi",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:
      "During the Cold War, the U.S. government built a bunker to house Congress under what golf resort?",
    answers: [
      {
        text: "The Breakers",
        correct: false,
      },
      {
        text: "The Greenbrier",
        correct: true,
      },
      {
        text: "Pinehurst",
        correct: false,
      },
      {
        text: "The Broadmoor",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question:
      "In the U.S., the Sony Walkman personal cassette player was originally marketed in 1979 under what name?",
    answers: [
      {
        text: "Soundabout",
        correct: true,
      },
      {
        text: "Listener",
        correct: false,
      },
      {
        text: "Eardrummer",
        correct: false,
      },
      {
        text: "Stowaway",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Which of the following pieces of currency was the first to use the motto 'In God We Trust'?",
    answers: [
      {
        text: "Nickel",
        correct: false,
      },
      {
        text: "One dollar bill",
        correct: false,
      },
      {
        text: "Two-cent piece",
        correct: true,
      },
      {
        text: "Five dollar bill",
        correct: false,
      },
    ],
  },
];
export default data;