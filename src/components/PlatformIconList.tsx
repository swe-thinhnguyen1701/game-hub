import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const ICONS:{[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={"10px"}>
            {platforms.map((platform) => (
                <Icon as={ICONS[platform.slug]} color="gray.500" key={platform.id}/>
            ))}
        </HStack>
    )
}

export default PlatformIconList;