import React from "react";
import styled from "styled-components";
import { colors } from "../public/styles";

const ExternalLinkIcon = styled.a`
  transition: 300ms ease;
  color: ${colors.lightLogo};

  &:hover {
    color: ${colors.logo};
  }
`;

// Function to format phone number (XXXXXXXXXX → (XXX)-XXX-XXXX)
const formatPhoneNumber = (number) => {
	const numStr = number.toString(); // Ensure it's a string
	if (numStr.length !== 10) return number; // Return as is if not 10 digits
	return `(${numStr.slice(0, 3)})-${numStr.slice(3, 6)}-${numStr.slice(6)}`;
};

const PhoneLink = ({ number }) => {
	const formattedNumber = formatPhoneNumber(number);
	const telLink = `tel:${number}`;

	return (
		<ExternalLinkIcon href={telLink} style={{ textDecoration: "none" }}>
			{formattedNumber}
		</ExternalLinkIcon>
	);
};

export default PhoneLink;
