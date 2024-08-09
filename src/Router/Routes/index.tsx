import HomeScreen from '../../screens/Home';
import ExpensesScreen from '../../screens/Expenses';
import FoodScreen from '../../screens/Food';
import WorkoutScreen from '../../screens/Workout';
import NotesScreen from '../../screens/Notes';
import React from 'react';

interface NavItemProps {
  name?: string;
  component?: React.FC;
  color?: string;
  icon?: React.ReactNode;
}

export const NavItems: NavItemProps[] = [
  {
    name: 'home',
    component: HomeScreen,
  },
  {
    name: 'expenses',
    component: ExpensesScreen,
  },
  {
    name: 'food',
    component: FoodScreen,
  },
  {
    name: 'workout',
    component: WorkoutScreen,
  },
  {
    name: 'notes',
    component: NotesScreen,
  },
];
