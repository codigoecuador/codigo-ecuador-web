import React from 'react'

const ActivitiesData = () => {
  const programming = {
    id: 1,
    title: "Computer Programming Education",
    subtitle: "One Step at a Time",
    description: "With gender equity always in mind, we strive to find new strategies for dealing with the challenge of advancing global economic development. Computer literacy is something that we take very seriously, and our team is working each and every day to make a positive impact. Contact us to learn more about our commitment to this cause.",
    buttonLink: "Help us Succeed"
  }

  const internship = {
    id: 2,
    title: "Internship Placement",
    subtitle: "Experiential Learning",
    description: "At Código Ecuador, we are dedicated to connecting Ecuadorian high school students to rewarding hands-on experiences. Through cooperation and global community empowerment, we believe we can facilitate access to valuable learning opportunities. We are always striving to make a difference, and invite you to learn more and lend your support.",
    buttonLink: "Become a Partner"
  }

const entrepreneurship = {
  id: 3,
  title: "Encourage Entrepreneurship",
  subtitle: "One Step at a Time",
  description: "With our organization’s mission always in mind, we strive to find new strategies to reach our goal. To preserve Ecuador's beautiful culture of entrepreneurship, Código Ecuador works to tear down walls, pave roads to resources, and encourage women to build opportunity. Contact us to learn more about how we make this happen.",
  buttonLink: "Get in Touch"
}

let projects = [programming, internship, entrepreneurship]
    return (
        <div>
          {projects}
        </div>
    )
}

export default ActivitiesData
