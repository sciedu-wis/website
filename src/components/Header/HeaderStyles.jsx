import {AlignLeft, AlignRight, Center, colors, fonts, headerHeight} from "../../public/styles";
import {NavLink} from "react-router";
import styled from "styled-components";

const HeaderWrapper = ({left, right}) => {
	const percentageLeft = 10;
	return <Center style={{height: `${headerHeight}px`, padding: "3px 10px"}}>
		<AlignLeft style={{width: `${percentageLeft}%`}}>{left}</AlignLeft>
		<AlignRight style={{width: `${100-percentageLeft}%`}}>
			{right}
		</AlignRight>
	</Center>
}

const HeaderLink = styled(NavLink)`
	margin: 0 20px;
	color: #606060;
	text-decoration: none; /* no underline */
	${fonts.alata}
	font-size: 27px;
	font-weight: lighter;
	transition: 350ms ease-in-out;
	
	&:hover {
		color: ${colors.lightLogo};
	}
`

const HeaderLogoText = styled.h1`

	${fonts.agu}
	font-size: 40px;
	font-weight: lighter;
	color: ${colors.logo};
`

export {HeaderWrapper, HeaderLink, HeaderLogoText}