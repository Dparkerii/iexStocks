import * as React from 'react';
import {Menu, Table} from 'semantic-ui-react';
import Utility from './Utility';


export interface ITableProps {
    desc?: string;
}

export interface ITableState {
    activeList?: string;
    listData?: {};
}

export default class MyTable extends React.Component<ITableProps, ITableState> {
  constructor(props: ITableProps) {
    super(props);
    this.state = {
      activeList: 'Gainers'
    }
  }

  public render() {
    return (
      <div>
        <Table celled={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Trend</Table.HeaderCell>
              <Table.HeaderCell>Latest</Table.HeaderCell>
              <Table.HeaderCell>Open</Table.HeaderCell>
              <Table.HeaderCell>High</Table.HeaderCell>
              <Table.HeaderCell>Low</Table.HeaderCell>
              <Table.HeaderCell>Close</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>up</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>14</Table.Cell>
              <Table.Cell>9</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>up</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>14</Table.Cell>
              <Table.Cell>9</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan={6}>
                <Menu floated='right' pagination={true}>
                  <Menu.Item as='a' onClick={this.handleMenuClick} name={"Gainers"}>Gainers</Menu.Item>
                  <Menu.Item as='a' onClick={this.handleMenuClick} name={"Losers"}>Losers</Menu.Item>
                  <Menu.Item as='a' onClick={this.handleMenuClick} name={"Active"}>Active</Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
  public componentDidMount(){
    // fetch("https://api.iextrading.com/1.0/stock/market/list/gainers")
    // .then(data => {
    //   // tslint:disable-next-line:no-console
    //   // console.log(data.json());
    //   return data.json();
    // })
    // .then(resp => {
    //   this.setState({
    //     listData: resp
    //   })
    // })
    const util = new Utility();
    util.topLists('Gainers')
    .then(resp => {
      // tslint:disable-next-line:no-console
    console.log(resp);
    })
    
    
  }
  private handleMenuClick = (e:any, data:any) => {
    // tslint:disable-next-line:no-console
    // console.log(data.children);
    this.setState({
      activeList: data.children
    })
  }
}
