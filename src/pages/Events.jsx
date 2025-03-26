import {Center, PageBody, IconImg} from "../public/styles";
import icon from "./../assets/Frame Reload Icon.svg"


const Events = () => {
	return <PageBody>
		<Center id={"CENTER"} style={{height: "inherit"}}>
			<div>
				<Center>
					<IconImg src={icon}/>
				</Center>
				<div>
					<Center>
						<h2 style={{color: "black"}}>come back in a little bit</h2>
					</Center>
					<Center>
						<h2 style={{color: "black"}}>we're working on our first event</h2>
					</Center>
				</div>
			</div>
		</Center>

	</PageBody>;
};

export default Events;