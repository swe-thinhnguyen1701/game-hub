import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: {
        id: string | null;
        name: string | null;
    }) => void;
    selectedGenre: {
        id: string | null;
        name: string | null;
    };
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize="2xl" marginBottom="20px">Genres</Heading>
            <List onClick={(e) => {
                const target = e.target as HTMLButtonElement;
                if (!target.id) return;
                onSelectedGenre({ id: target.id, name: target.textContent });
            }}>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY={2}>
                        <HStack>
                            <Image boxSize="32px" objectFit="cover" borderRadius={8} src={getCroppedImgUrl(genre.image_background)} />
                            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id.toString() === selectedGenre.id ? "bold" : "normal"} fontSize="lg" variant="link" id={genre.id.toString()}>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList;