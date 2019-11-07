import React, { Component } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Research.css'
import Slider from "react-slick"
import { researchLinks } from "./ResearchLinks"
import ResearchCard from "./ResearchCard"

class ResearchContainer extends Component {
	constructor(props) {
	super()

		this.state = {
				width: window.innerWidth
			}
		}

		componentDidMount() {
			window.addEventListener('resize', this.handleWindowSizeChange);
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleWindowSizeChange);
		}

		handleWindowSizeChange = () => {
			this.setState({ width: window.innerWidth });
		}

		render(){
			let isMobile
			const width = this.state.width
			width <= 760 ? isMobile = true : isMobile = false

			let num

			isMobile? num = 1 : num = 2


			let settings = {
				dots: true,
				infinite: true,
				speed: 4000,
				slidesToShow: num,
				slidesToScroll: 1,
				autoplay: false,
				autoplayspeed: 8000
			}

			return (
				<div className="research-container">
					<br />

					<div className="research-banner">
						<div className="center">
							<span className="gold headline">Research</span>
						</div>

						<div className="research-container-text">
							<h1 className="center">
								We model Código Ecuador on research and insights from
								reputable economic development experts.
							</h1>

							<p>
								Coding education is making a huge impact throughout the
								developing world. People are learning the technical skills
								necessary to build tomorrow's cutting-edge applications.
								From Colombia to Lebanon, nonprofit education is opening
								doors in high paying technology careers for thousands of
								women and individuals. The work our organizations do are
								sparking a new wave of research in how we can create a more
								equal world.
							</p>
						</div>

						<br />
						<Slider {...settings}>
							{researchLinks.map((research, index) => (
								<ResearchCard key={index} research={research} />
							))}

							<br />
						</Slider>

						<br />
						<br />
						<br />
					</div>

					<br />
				</div>
			)

	}
}

export default ResearchContainer
