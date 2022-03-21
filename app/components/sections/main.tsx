import React from "react";

export interface IMainProps {}
export interface IMainState {}

export class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);
  }

  render() {
    return <main>MainComponent {this.props.children}</main>;
  }
}
