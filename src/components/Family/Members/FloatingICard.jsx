import styled from "styled-components";
import {Center, colors, fonts} from "../../../public/styles";
import {RxExitFullScreen} from "react-icons/rx";
import GmailLink from "../../GmailLink";
import PhoneLink from "../../PhoneNumberLink";

const ModalBackground = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const ModalContainer = styled.div`
	width: 70vw;
	max-width: 90%;
	background-color: white;
	border-radius: 12px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 20px 30px;
`;

const StyledExitIcon = styled(RxExitFullScreen)`
	background-color: transparent;
	color: black;
	border-radius: 100%;
	padding: 3px;
	cursor: pointer;
	font-size: 30px;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${colors.lightLogo}; /* Replace with your actual color variable */
		color: white;
	}
`

const ICardTitle = styled.h1`
	font-family: "Alata", serif;
	font-weight: 300;
	font-style: normal;
	font-size: 45px;
	padding: 0;
	margin: 0;
`

const ProfilePicture = styled.img`
	width: 170px;
	margin-left: 2px;
	border-radius: 5%;
	margin-top: 15px;

	border: 3px solid black`

const DH3 = styled.h3`
	font-family: ${fonts.alata};
	font-weight: 500;
	font-style: normal;
	font-size: 15px;
	padding: 0;
	margin: 1px 5px 1px 0;
	text-align: left;
`

const DH3A = styled.h3`
	font-family: ${fonts.alata};
	font-weight: 200;
	font-style: normal;
	font-size: 13px;
	padding: 0;
	margin: 0;
	text-align: left;
`

const ExternalLinkIcon = styled.a`
	padding: 5px;
	margin: 3px;
	border-radius: 50%;
	font-size: 20px;
	transition: 300ms ease;
	background: ${colors.logo};
	color: white;
	display: flex;

	&:hover {
		background: ${colors.lightLogo};
	}
`

const Prop = ({text, prop}) =>
(
	<div style={{display: "flex", justifyContent: "flex-start", alignItems: 'center'}}>
		<DH3>{text} : </DH3>
		<DH3A>{prop}</DH3A>
	</div>
)

const FloatingICard = ({member, setModalState}) => {
	console.log(member)

	return <ModalBackground>
		<ModalContainer>
			<Center style={{width: "100%"}}>
				<Center style={{width: "50%", display: "flex", justifyContent: "flex-start"}}>
					<ICardTitle>{member.name}</ICardTitle>
				</Center>
				<Center style={{width: "50%", display: "flex", justifyContent: "flex-end"}}>
					<div style={{margin: '0', padding: '0'}}>
						<StyledExitIcon onClick={() => setModalState(false)}/>
					</div>
				</Center>
			</Center>


			<Center style={{width: '100%', marginBottom: '20px'}}>
				<div style={{margin: 0, display: "flex", justifyContent: 'flex-start', alignItems: 'center'}}>
					<ProfilePicture src={member.pfp}/>
				</div>
				<div style={{font: fonts.alata, marginLeft: 10,  display: "flex", justifyContent: 'flex-start'}}>
					<div>
						<Prop text={'Name'} prop={`${member.name} ${member.lastName}`}/>
						<Prop text={'Role'} prop={member.role}/>
						<Prop text={'Email'} prop={
							<GmailLink email={member.personalEmail} subject="Hello!" body="I wanted to reach out to you." />
						}/>
						<Prop text={'Phone'} prop={
							<PhoneLink number={member.phone} />
						}/>
						<Prop text={'Graduation Year'} prop={member.graduationYear}/>

						<p style={{font: fonts.alata,fontSize: '12px', textAlign: "left", margin: '2px 0'}}>{member.description}</p>
						<DH3>Custom Links </DH3>
						<div style={{display: "flex", justifyContent: "flex-start", alignItems: 'center'}}>

							{
								member.links.map(
									(link, index) => <ExternalLinkIcon key={index} href={link.link} target={"_blank"}>{link.icon}</ExternalLinkIcon>
								)
							}
						</div>
					</div>

				</div>
			</Center>

		</ModalContainer>
	</ModalBackground>;
};

export default FloatingICard;