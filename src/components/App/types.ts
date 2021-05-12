export interface StateProps {
  readonly title: string;
  readonly text: string;
}

export interface DispatchProps {
  readonly setTitle: (title: string) => void;
  readonly setText: (text: string) => void;
}

export interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
