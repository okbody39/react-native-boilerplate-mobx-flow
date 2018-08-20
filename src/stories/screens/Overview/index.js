import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Overview extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
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
					<Text>{param !== undefined ? param.name.item.caption : "Create Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}

export default Overview;
