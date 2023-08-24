import { Category } from "./models/Category";

export const Students =  [
    {
      name: 'ali',
      isPass: true,
      totalMarks: 70,
      isSelected: false,
    },
    {
      name: 'akbar',
      isPass: false,
      totalMarks: 35,
      isSelected: false,
    },
    {
      name: 'adil',
      isPass: true,
      totalMarks: 80,
      isSelected: false,
    },
    {
      name: 'ruhan',
      isPass: false,
      totalMarks: 20,
      isSelected: false,
    },
    {
      name: 'azib',
      isPass: true,
      totalMarks: 90,
      isSelected: false,
    },
];

export const category: Array<Category> = [
  {
    id: 1,
    name:'ali',
    fees: 20,
    admissionDate: new Date(),
    description:'Ali, a name that resonates with strength and history, brings to mind a sense of timeless charm and significance. This name, found across various cultures and languages, carries with it stories of bravery, wisdom, and friendship.',
    marks: {
      english: 20,
      hindi: 10
    }
  },
  {
    id: 2,
    name:'fahad',
    fees: 30,
    admissionDate: new Date(),
    description:'Picture Fahad as a curious and imaginative young soul, his eyes sparkling with wonder as he explores the world around him. He approaches life with a tenacity that is both inspiring and infectious, never shying away from pushing his boundaries. '
  },
  {
    id: 3,
    name:'rahil',
    fees: 60,
    admissionDate: new Date(),
    description:'Rahil, a name that dances on the lips like a melody, evokes images of grace, kindness, and a spirit that soars'
  },
  {
    id: 4,
    name:'adil',
    fees: 50,
    admissionDate: new Date(),
    description:'Adil, a name that exudes fairness and integrity, brings to mind a figure of noble character and unwavering principles'
  },
];