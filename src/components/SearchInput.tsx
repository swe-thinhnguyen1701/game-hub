import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
    onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value);
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<FaSearch />} />
                <Input ref={ref} borderRadius="20px" placeholder="Search games..." variant="filled" />
            </InputGroup>
        </form>
    )
}

export default SearchInput;