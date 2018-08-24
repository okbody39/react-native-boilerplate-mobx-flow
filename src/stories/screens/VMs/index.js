import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, List, ListItem } from "native-base";
import Sparkline from 'react-native-sparkline';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class VMs extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
    const data2 = Array.from({ length: 20 }).map(
      (unused, i) => i + (i + 1) * Math.random()
    )

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>VM List</Title>
					</Body>

					<Right />
				</Header>

				<Content>
          <List>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="power" />
                </Button>
              </Left>
              <Body>
              <Text>홍길동</Text>
              </Body>
              <Right>
                <Sparkline data={data2} width={100} height={30} >
                  <Sparkline.Line />
                  <Sparkline.Fill />
                  {/*<Sparkline.Spots />*/}
                  {/*<Sparkline.Band />*/}
                </Sparkline>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
				</Content>
			</Container>
		);
	}
}

export default VMs;
