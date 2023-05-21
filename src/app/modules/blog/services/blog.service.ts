import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Why cats are adorable?',
      description:
        'The cat, a domesticated feline mammal, is a beloved companion known for its grace, agility, and independence. With its soft fur, enchanting eyes, and soothing purrs, the cat is both charming and comforting. Whether lounging in sunlit spots or engaging in playful antics, cats bring warmth and joy to our lives, making them a cherished presence in many homes.',
      author: 'Leo Cruz',
      comments: ['wow', 'i love cats'],
      isDeleted: false,
    },
    {
      id: 2,
      title: 'Benefits of sleeping early',
      description:
        'Sleeping early refers to the practice of going to bed and getting sufficient rest during the early hours of the night. It is a beneficial habit that promotes physical and mental well-being. By aligning our sleep schedule with the natural rhythms of daylight, we can improve sleep quality, enhance cognitive function, boost mood, and increase overall productivity. ',
      author: 'Sleep Apnea',
      comments: ['nice article', 'better'],
      isDeleted: false,
    },
    {
      id: 3,
      title: 'Pawsome Puzzles: A Feline Adventure',
      description:
        'Embark on a feline-themed puzzle extravaganza where you will solve cat-themed riddles, unravel whimsical mazes, and piece together delightful jigsaw puzzles. Challenge your wits and unleash your inner cat lover as you navigate through a world filled with adorable whiskered companions and colorful challenges.',
      author: 'Leo Cruz',
      comments: ['wow', 'nice'],
      isDeleted: false,
    },
    {
      id: 4,
      title: 'Dance Party Mania: Groove to the Beat!',
      description:
        'Get ready to bust a move and show off your dance skills in this high-energy rhythm game. From hip-hop to salsa, tap your feet to the electrifying beats and follow the dance routines. Unlock new dance styles, compete with friends, and earn the title of the ultimate dance champion.',
      author: 'Keshi',
      comments: ['wow', 'nice'],
      isDeleted: false,
    },
    {
      id: 5,
      title: 'Kitchen Master: Cooking with Chaos',
      description:
        'Enter the kitchen chaos and take on the role of a culinary mastermind in this hilarious cooking simulation game. Navigate through crazy cooking challenges, concoct bizarre recipes, and overcome unexpected obstacles. From cooking with unconventional ingredients to managing kitchen mishaps, embrace the madness and become a legendary chef in this culinary adventure.',
      author: 'Cooking Mama',
      comments: ['wow', 'nice'],
      isDeleted: false,
    },
  ];
  constructor() {}

  getBLogs = () => {
    return this.blogs;
  };
}
