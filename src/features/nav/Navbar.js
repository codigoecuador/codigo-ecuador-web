import React, { useState } from "react"
import { Menu } from "semantic-ui-react"

const Navbar = () => {
	const [activeItem, setActiveItem] = useState("home")
	return (
		<div>
			<Menu>
				<Menu.Item
					as={Link}
					active={activeItem === "home"}
					onClick={() => setActiveItem("home")}
					to="/"
				>
					Home
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "about"}
					onClick={() => setActiveItem("about")}
					to="/about"
				>
					About
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "blogs"}
					onClick={() => setActiveItem("blogs")}
					to="/blogs"
				>
					Blogs
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "news"}
					onClick={() => setActiveItem("news")}
					to="/news"
				>
					News
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "partners"}
					onClick={() => setActiveItem("partners")}
					to="/partners"
				>
					Partners
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "team"}
					onClick={() => setActiveItem("team")}
					to="/team"
				>
					Meet The Team
				</Menu.Item>

				<Menu.Item
					as={Link}
					active={activeItem === "contact"}
					onClick={() => setActiveItem("contact")}
					to="/contact"
				>
					Contact Us!
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Navbar
