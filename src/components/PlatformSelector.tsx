import usePlatforms from "../hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
    onSelectPlatform: (platform: { name: string | null; id: string | null }) => void;
    selectedPlatform: {name: string | null, id: string | null};
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) => {
    const {data, error} = usePlatforms();
    console.log(selectedPlatform);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                {selectedPlatform.name ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList onClick={(e) => {
                const target = e.target as HTMLButtonElement;
                if (!target.id) return;
                const platform = {
                    id: target.value,
                    name: target.innerText
                }
                console.log(platform);
                
                onSelectPlatform(platform);
            }}>
                {data.map((platform) => (
                    <MenuItem key={platform.id} value={platform.id.toString()}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector;