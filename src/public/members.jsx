import Kevin from './../assets/MemberPhotos/pfps/Kevin.jpg';
import Aryav from './../assets/MemberPhotos/pfps/Aryav.jpg';
import Shivansh from './../assets/MemberPhotos/pfps/Shivansh.jpg';
import Ben from './../assets/MemberPhotos/pfps/Benjamin.jpg';

import KevinE from './../assets/MemberPhotos/pictures/Kevin1.png';
import AryavE from './../assets/MemberPhotos/pictures/Aryav.png';
import ShivanshE from './../assets/MemberPhotos/pictures/Shivansh.png';
import BenE from './../assets/MemberPhotos/pictures/Benjamin.png';

import {FaInstagram} from "react-icons/fa";
import {IoMdGrid} from "react-icons/io";
import {GiTennisRacket} from "react-icons/gi";
import {FaGears} from "react-icons/fa6";
import {TbSwimming} from "react-icons/tb";
import {AiOutlineGithub, AiOutlineYoutube} from "react-icons/ai";


const MembersDB = [
	{
		id: 0,
		name: "Shivansh",
		lastName: "Upadhyay",
		birthdate: "22-Oct-09",
		description: "I am a student that is interested in computer science, data analysis. I hope to pursue a future in a tem field, and currently am on track to do such. I love to play tennis, lift weights, hang out with my friends, code and finally I also love to speedcube (kinda nerdy ik). I have done a lot of science based clubs and activities before, making nationals for science bowl, and have been competing in science olympiad as of 2024.",
		gender: "Male",
		graduationYear: 2028,
		howDidYouFindUs: "Other",
		personalEmail: "shivanshupadhyay22@gmail.com",
		phone: 2624022737,
		pfp: Shivansh,
		photo: ShivanshE,
		schoolGmail: "28upadhs@elmbrookstudents.org",
		role: '',
		links: [
			{
				icon: <FaInstagram/>,
				link: "https://www.instagram.com/shiva_dev229/"
			},
			{
				icon: <IoMdGrid/>,
				link: "https://www.worldcubeassociation.org/persons/2024UPAD01"
			},
			{
				icon: <AiOutlineYoutube/>,
				link: "https://www.youtube.com/@shiva_dev_22"
			},
			{
				icon: <AiOutlineGithub/>,
				link: "https://github.com/shivansh-max"
			}
		]
	},
	{
		id: 1,
		name: "Aryav",
		lastName: "Agarwal",
		birthdate: "28-Nov-09",
		description: "I am a Freshman at Brookfield Central High School with a strong passion for STEM. I actively participate in clubs like Key Club, Science Olympiad, DECA, FIRST Tech Challenge (FTC), and HOSA, where I explore engineering, healthcare, and scientific problem-solving. Outside of STEM, I enjoy playing tennis, singing, playing guitar, and playing the piano.",
		gender: "Male",
		graduationYear: 2028,
		howDidYouFindUs: "Someone in your non-profit recommended me, Through School",
		personalEmail: "aryavemail@gmail.com",
		phone: "262-666-9820",
		pfp: Aryav,
		photo: AryavE,
		schoolGmail: "28agarwa@elmbrookstudents.org",
		role: '',
		links: [
			{
				icon: <GiTennisRacket/>,
				link: "https://sites.google.com/elmbrookschools.org/bchsathleticsartsactivities/athletics/spring-sports/boys-tennis"
			},
			{
				icon: <FaGears/>,
				link: "https://gearheads.elementor.cloud/"
			}
		]
	},
	{
		id: 2,
		name: "Kevin",
		lastName: "Li",
		birthdate: "3-Dec-09",
		description: "Hello. My name is Kevin Li. I am a swimmer and tennis player with future aspirations of becoming a neurosurgeon. I plan to major in biochemistry or biology.",
		gender: "Male",
		graduationYear: 2028,
		howDidYouFindUs: "Someone in your non-profit recommended me, Through School",
		personalEmail: "kevinli12309@gmail.com",
		phone: "262-327-1983",
		pfp: Kevin,
		photo: KevinE,
		schoolGmail: "28lik@elmbrookstudents.org",
		role: '',
		links: [
			{
				icon: <FaInstagram/>,
				link: "https://www.instagram.com/kevinlii09/"
			},
			{
				icon: <TbSwimming/>,
				link: "https://www.swimcloud.com/swimmer/2055747/"
			},
			{
				icon: <GiTennisRacket/>,
				link: "https://app.utrsports.net/profiles/4552312"
			}
		]
	},
	{
		name: "Benjamin",
		lastName: "Cai",
		birthdate: "February 23, 2010",
		description: "I’m Ben. I’m the high school class of 2028. I want to go into aerospace engineering.",
		gender: "Male",
		graduationYear: 2028,
		howDidYouFindUs: "Someone in your non-profit recommended me, Through School",
		personalEmail: "yogebear1945@icloud.com",
		phone: 2622827508,
		pfp: Ben,
		photo: BenE,
		schoolGmail: "28caib@elmbrookstudents.org",
		role: '',
		links: [
			{
				icon: <FaInstagram/>,
				link: "https://www.instagram.com/benbensomething12?igsh=czl4dnB0aWE4M2Vr&utm_source=qr"
			},
			{
				icon: <IoMdGrid/>,
				link: "https://www.worldcubeassociation.org/persons/2024CAIB02"
			}
		]
	}
];

export default MembersDB;