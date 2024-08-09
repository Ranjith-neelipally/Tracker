import {Icons} from './icons';

export interface IconProps {
  icon?: keyof Icons;
  isActive?: boolean;
  strokeColor?: string;
  fillColor?: string;
}

export interface Icons {
  home: (props: IconProps) => React.ReactElement;
  expenses: (props: IconProps) => React.ReactElement;
  food: (props: IconProps) => React.ReactElement;
  workout: (props: IconProps) => React.ReactElement;
  notes: (props: IconProps) => React.ReactElement;
}

export const AllIcons: Icons = {
  home: props => Icons.home(props),
  expenses: props => Icons.expenses(props),
  food: props => Icons.food(props),
  workout: props => Icons.workout(props),
  notes: props => Icons.notes(props),
};
