import * as React from 'react';

export interface IChartProps {
    desc?: string;
}

export interface IChartState {
    desc?: string;
}

export default class Chart extends React.Component<IChartProps, IChartState> {
  constructor(props: IChartProps) {
    super(props);

        this.state = {
    }
  }

  public render() {
    return (
      <div>
        make some d3 charts stuff
      </div>
    );
  }
}
