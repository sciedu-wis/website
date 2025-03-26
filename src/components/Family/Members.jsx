import {Center} from "./../../public/styles";
import MembersDB from "./../../public/members";
import ICard from "./Members/ICard";
import {useState} from "react";
import FloatingICard from "./Members/FloatingICard";

const Members = () => {
	const [currentMemberSelected, setCurrentMemberSelected] = useState(null);
	const [modalState, setModalState] = useState(false);

	return <Center>
		<ICard member={MembersDB[0]} setModalState={setModalState} setCurrentMemberSelected={setCurrentMemberSelected}/>
		<ICard member={MembersDB[1]} setModalState={setModalState} setCurrentMemberSelected={setCurrentMemberSelected}/>
		<ICard member={MembersDB[2]} setModalState={setModalState} setCurrentMemberSelected={setCurrentMemberSelected}/>

		<ICard member={MembersDB[3]} setModalState={setModalState} setCurrentMemberSelected={setCurrentMemberSelected}/>
		{
			modalState ? <FloatingICard member={currentMemberSelected} setModalState={setModalState}/> : ""
		}
	</Center>;
};

export default Members;