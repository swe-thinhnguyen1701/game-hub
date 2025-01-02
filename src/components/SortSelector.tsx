import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
    onSelectSortOrder: (sortOrder: { value: string; label: string }) => void;
    selectedSortOrder: { value: string; label: string };
}

const SORT_ORDERS = [
    {
        value: "",
        label: "Relevance"
    },
    {
        value: "-added",
        label: "Date added"
    },
    {
        value: "name",
        label: "Name"
    },
    {
        value: "-released",
        label: "Release date"
    },
    {
        value: "-metacritic",
        label: "Popularity"
    },
    {
        value: "-rating",
        label: "Average rating"
    }
]

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                {selectedSortOrder.label}
            </MenuButton>
            <MenuList onClick={(e) => {
                const target = e.target as HTMLButtonElement;
                onSelectSortOrder(SORT_ORDERS[parseInt(target.value)]);
            }}>
                {SORT_ORDERS.map((order, index) => (
                    <MenuItem key={order.value} value={index}>{order.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector;