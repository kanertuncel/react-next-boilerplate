import React from "react";

export interface IHeaderProps {}
export interface IHeaderState {}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render() {
    return (
      <header>
        HeaderComponent
      </header>
    );
  }
}