import React from "react";

export interface IFooterProps {}
export interface IFooterState {}

export class Footer extends React.Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props);
  }

  render() {
    return (
      <footer>
        FooterComponent
      </footer>
    );
  }
}