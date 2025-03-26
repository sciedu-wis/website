import {CompanyColorLogo} from "../../public/styles";
import {NavLinks} from "../../public/routes";
import {HeaderLink, HeaderLogoText, HeaderWrapper} from "./HeaderStyles";
import {useNavigate} from "react-router";

const Header = () => {

	const router = useNavigate()

	const left = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={() => router('/')}>
			<CompanyColorLogo width={60} height={60}/>
			<HeaderLogoText>sew</HeaderLogoText>
	</div>
	const right = <>
		{
			NavLinks.map((link, index) =>
				<HeaderLink key={index} to={link.route}>
					{link.displayText}
				</HeaderLink>
			)
		}
	</>

	return <div style={{height:"10vh"}}>
		<HeaderWrapper left={left} right={right}/>
	</div>
}

export default Header;