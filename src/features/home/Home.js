import React from "react"
import Banner from "./Banner"
import Top from "./Top"
import { Container, Header } from "semantic-ui-react"

const Home = () => {
	return (
		<div>
			{/* <Container fluid> */}
			<Header as="h1">Home!</Header>
			<br />
			<br />

			<Banner />
			<Top />
			{/* </Container> */}
		</div>
	)
}

export default Home
