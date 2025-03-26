import {Center, PageBody, IconImg, fonts} from "../public/styles";
import icon from "./../assets/Skull Icon.svg"


const Error404 = () => {
	return <PageBody>
		<Center id={"JFDKJFKDJK"} style={{height: "inherit"}}>
			<div>
				<Center>
					<IconImg src={icon}/>
				</Center>
				<div>
					<Center>
						<h1 style={{color: "black"}}>this isn't an actual page</h1>
					</Center>
				</div>
			</div>
		</Center>

	</PageBody>;
};

export default Error404;