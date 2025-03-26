import React from "react";
import styled from "styled-components";
import {colors} from "../public/styles";

const ExternalLinkIcon = styled.a`
	transition: 300ms ease;
	color: ${colors.lightLogo};

	&:hover {
		color: ${colors.logo};
	}
`


const GmailLink = ({ email, subject, body }) => {
	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	return (
		<ExternalLinkIcon href={mailtoLink} style={{ textDecoration: "none" }}>
			{email}
		</ExternalLinkIcon>
	);
};

export default GmailLink;
