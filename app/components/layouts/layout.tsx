import * as React from "react";
import { Header, Footer, Body, Main, Drawer } from "../modules";

export interface ILayoutProps {}
export interface ILayoutState {}

export class Layout extends React.Component<ILayoutProps, ILayoutState> {
  constructor(props: ILayoutProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Header key={"header"} />
        <Body key={"body"}>
          <Drawer key={"drawer"} />
          <Main key={"main"}>{this.props.children}</Main>
        </Body>
        <Footer key={"footer"} />
      </>
    );
  }
}
