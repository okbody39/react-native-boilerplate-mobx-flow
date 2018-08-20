import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import PureChart from 'react-native-pure-chart';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Overview extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
    let sampleData = [
      {
        seriesName: 'series1',
        data: [
          {x: '2018-02-01', y: 30},
          {x: '2018-02-02', y: 200},
          {x: '2018-02-03', y: 170},
          {x: '2018-02-04', y: 250},
          {x: '2018-02-05', y: 10},
          {x: '2018-02-06', y: 10},
          {x: '2018-02-07', y: 10},
          {x: '2018-02-08', y: 10},
          {x: '2018-02-09', y: 10},
          {x: '2018-02-10', y: 10},
          {x: '2018-02-11', y: 10}
        ],
        color: '#297AB1'
      },
      {
        seriesName: 'series2',
        data: [
          {x: '2018-02-01', y: 20},
          {x: '2018-02-02', y: 100},
          {x: '2018-02-03', y: 140},
          {x: '2018-02-04', y: 550},
          {x: '2018-02-05', y: 40},
          {x: '2018-02-06', y: 20},
          {x: '2018-02-07', y: 20},
          {x: '2018-02-08', y: 20},
          {x: '2018-02-09', y: 20},
          {x: '2018-02-10', y: 20},
          {x: '2018-02-11', y: 20}
        ],
        color: 'green'
      }
    ];
    let sampleData2 = [
      {
        value: 50,
        label: 'Marketing',
        color: 'red',
      }, {
        value: 40,
        label: 'Sales',
        color: 'blue'
      }, {
        value: 25,
        label: 'Support',
        color: 'green'
      }

    ];

    return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item.caption : "Overview"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					{/*<Text>{param !== undefined ? param.name.item.caption : "Create Something Awesome . . ."}</Text>*/}
          <PureChart data={sampleData} type='line' height={200} />
          <PureChart data={sampleData} type='bar' height={200} />
          <PureChart data={sampleData2} type='pie' height={200} />
				</Content>
			</Container>
		);
	}
}

export default Overview;
