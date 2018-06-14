import * as React from 'react';

export interface IAboutProps {
    desc?: string;
}

export interface IAboutState {
    desc?: string;
}

export default class About extends React.Component<IAboutProps, IAboutState> {
  constructor(props: IAboutProps) {
    super(props);

        this.state = {
    }
  }

  public render() {
    return (
      <div>
        <h1>Hello, I'm David</h1>
        <p>I created this app as a way to learn a little bit about react and why it might be useful for building web applications.  The goal of this project was to have an interactive way to access the IEX trading api.  If you find any bugs or want to contact me send an email to <a href="=mailto:drparkerii91@gmail.com">drparkerii91@gmail.com</a></p>
      </div>
    );
  }
}
