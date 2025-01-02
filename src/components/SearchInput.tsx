import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input borderRadius="20px" placeholder="Search games..." variant="filled" />
        </InputGroup>
    )
}

export default SearchInput;