import React from "react";

export interface IBodyProps {}
export interface IBodyState {}

export class Body extends React.Component<IBodyProps, IBodyState> {
  constructor(props: IBodyProps) {
    super(props);
  }

  render() {
    return (
      <body>
        {this.props.children}
      </body>
    );
  }
}