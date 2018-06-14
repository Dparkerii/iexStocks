import * as React from 'react';
import {Grid} from 'semantic-ui-react';
import {Menu} from 'semantic-ui-react';
import {Segment} from 'semantic-ui-react';
import './App.css';
import About from './Components/About';
import Chart from './Components/Chart';
import Detailed from './Components/Detailed';
import MyTable from './Components/MyTable';


export interface IAppProps {
  initStock?: string;
}
export interface IAppState {
  activeItem: string;
}

export default class App extends React.Component<IAppProps, any> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      activeItem: "About"
    }
  }
  public render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid={true} vertical={true}>
            <Menu.Item 
              name='About' 
              active={this.state.activeItem === 'About'}
              onClick={this.handleMenuClick}
            />
            <Menu.Item 
            name='Table'
            active={this.state.activeItem === 'Table'}
            onClick={this.handleMenuClick}
            />
            <Menu.Item 
            name='Detailed'
            active={this.state.activeItem === 'Detailed'}
            onClick={this.handleMenuClick}
            />
            <Menu.Item 
            name='Chart'
            active={this.state.activeItem === 'Chart'}
            onClick={this.handleMenuClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched={true} width={12}>
          <Segment>
            {
              (this.state.activeItem === 'Table') ? <MyTable/> : 
              (this.state.activeItem === 'About') ? <About/> : 
              (this.state.activeItem === 'Detailed') ? <Detailed/> : 
              (this.state.activeItem === 'Chart') ? <Chart/> :null
            }
            
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
  
  private handleMenuClick = (e:any, name: any) =>{
    // tslint:disable-next-line:no-console
    // console.log(name.name);
    this.setState({
      activeItem: name.name
    })
  }
}
