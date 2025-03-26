import Logo from './../assets/Sew Logo/svg/logo-color.svg'
import styled, {createGlobalStyle} from "styled-components";

const CompanyColorLogo = ({width, height, color}) => {
	const TempLogoStyleDesign = styled.img`
		width: ${width}px;
		height: ${height}px;
		color: ${color};

	`;
	return <TempLogoStyleDesign src={Logo} alt=""/>
}

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const AlignLeft = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const AlignRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const fonts = {
	robotFlex: 'font-family: "Roboto Flex", serif;',
	agu: 'font-family: "Agu Display", serif;',
	alata: 'font-family: "Alata", serif;'

}

const colors = {
	logo : "#1F09FF",
	lightLogo: "#006fff"
}

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}

	* {
		${fonts.robotFlex}
	}
`

const headerHeight = 60;

const PageBody = styled.div`
	height: 90vh;
`

const IconImg = styled.img`
	width: 350px;
	color: ${colors.logo};
	
	
`

export {CompanyColorLogo, IconImg, Center, AlignLeft, AlignRight, GlobalStyle, fonts, colors, headerHeight, PageBody};