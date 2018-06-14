import * as React from 'react';

export interface IDetailedProps {
    desc?: string;
}

export interface IDetailedState {
    desc?: string;
}

export default class Detailed extends React.Component<IDetailedProps, IDetailedState> {
  constructor(props: IDetailedProps) {
    super(props);

        this.state = {
    }
  }

  public render() {
    return (
      <div>
        Display all the data available for a single stock
      </div>
    );
  }
}
