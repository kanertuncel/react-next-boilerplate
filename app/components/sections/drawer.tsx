import React from "react";

export interface IDrawerProps {}
export interface IDrawerState {}

export class Drawer extends React.Component<IDrawerProps, IDrawerState> {
  constructor(props: IDrawerProps) {
    super(props);
  }

  render() {
    return <nav>DrawerComponent</nav>;
  }
}
