export interface StateProps {
  readonly title: string;
}

export interface DispatchProps {
  readonly setTitle: (title: string) => void;
}

export interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
