import { M16, M40, L30 } from "../services/Items";
import { Entity } from "../services/Entities";

export const entitiesInitialValues = [
  {
    name: "John Rambo",
    age: 40,
    hp: 95,
    maxHp: 100,
    icon: "😠",
    isBreathing: true,
    isFriendly: true,
    position: { x: 8, y: 8 },
    inventory: [{ name: "KA-BAR" }, new M16()],
    equipment: { head: "Red Bandana", hands: null },
  },
  {
    name: "Ellen Replay",
    age: 30,
    hp: 50,
    maxHp: 65,
    icon: "👩",
    isBreathing: true,
    isFriendly: true,
    position: { x: 1, y: 8 },
    inventory: [new M40(), { name: "Motion Detector" }],
    equipment: { head: "Afro" },
  },
  {
    name: "Lazer Blady",
    age: 60,
    hp: 75,
    maxHp: 100,
    icon: "🧑🏻",
    isBreathing: true,
    isFriendly: true,
    position: { x: 4, y: 8 },
    inventory: [new L30(), new M16()],
    equipment: {},
  },
  {
    name: "Lux Aeterna",
    age: 20,
    hp: 50,
    maxHp: 50,
    icon: "👱‍♀️",
    isBreathing: true,
    isFriendly: true,
    position: { x: 1, y: 1 },
    inventory: [new L30()],
    equipment: {},
  },
  {
    name: "Robot",
    age: 1,
    hp: 50,
    maxHp: 50,
    icon: "🤖",
    isBreathing: false,
    position: { x: 4, y: 5 },
  },
  {
    name: "Octo",
    age: 8,
    hp: 200,
    maxHp: 200,
    icon: "🐙",
    isBreathing: true,
    position: { x: 8, y: 2 },
    bleedingReductionPerTurn: 0,
    bleeding: 1,
  },
  {
    name: "Squid",
    age: 5,
    hp: 100,
    maxHp: 100,
    icon: "🦑",
    isBreathing: true,
    position: { x: 5, y: 5 },
  },
  {
    name: "Ant",
    age: 1,
    hp: 45,
    maxHp: 50,
    icon: "🐜",
    isBreathing: true,
    position: { x: 7, y: 6 },
  },
  {
    name: "Spider",
    age: 1,
    hp: 100,
    maxHp: 150,
    icon: "🕷️",
    isBreathing: true,
    position: { x: 9, y: 3 },
    bleedingReductionPerTurn: 1,
  },
  {
    name: "Mosquito",
    age: 1,
    hp: 12,
    maxHp: 20,
    icon: "🦟",
    isBreathing: true,
    position: { x: 2, y: 7 },
  },
  {
    name: "Microbe",
    age: 1,
    hp: 1,
    maxHp: 5,
    icon: "🦠",
    isBreathing: true,
    position: { x: 3, y: 5 },
  },
];

export const entitiesInstances = entitiesInitialValues.map((entry) => new Entity(entry));
export default entitiesInstances;