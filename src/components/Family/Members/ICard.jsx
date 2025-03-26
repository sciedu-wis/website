import styled from "styled-components";
import {Center, colors, fonts} from "../../../public/styles";

const ICardContainer = styled.div`
	border: 2px solid ${colors.logo};
	border-radius: 15px;
	width: 200px;
	margin: 20px;
	font: ${fonts.agu} !important;
	padding: 5px;
`

const ICardImg = styled.img`
	width: 100px;
	height: 100px;
	margin: 20px 0;
	border-radius: 50%;
	outline: 1px solid black;
	font: ${fonts.agu} !important;
`

const ICardTitle = styled.h2`
	font-family: "Alata", serif;
	font-weight: 400;
	font-style: normal;
	font-size: 30px;
	padding: 0;
	margin: 0;
`

const ICard = ({member, setCurrentMemberSelected, setModalState}) => {
	return <>
		<ICardContainer onClick={() => {
			setCurrentMemberSelected(member)
			setModalState(true)
		}}>
			<Center>
				<ICardImg src={member["pfp"]}/>
			</Center>
			<div style={{marginBottom: "20px"}}>
				<Center>
					<ICardTitle style={{fontFamily: fonts.agu}}>
						{member.name}
					</ICardTitle>
				</Center>
				<Center>
					<ICardTitle>
						{member.lastName}
					</ICardTitle>
				</Center>
			</div>

		</ICardContainer>
	</>;
};

export default ICard;