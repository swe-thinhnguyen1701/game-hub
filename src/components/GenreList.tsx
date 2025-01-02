import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: string) => void;
    selectedGenre: string | null;
}

const GenreList = ({selectedGenre, onSelectedGenre}: Props) => {
    const { data, isLoading, error } = useGenres();
    
    if(error) return null;
    
    if (isLoading) return <Spinner />

    return (
        <List onClick={(e) => {
            const target = e.target as HTMLButtonElement;
            if (!target.id) return;
            onSelectedGenre(target.id);
        }}>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY={2}>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImgUrl(genre.image_background)} />
                        <Button fontWeight={genre.id.toString() === selectedGenre ? "bold" : "normal"} fontSize="lg" variant="link" id={genre.id.toString()}>
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList;