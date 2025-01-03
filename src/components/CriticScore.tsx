import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX="10px" borderRadius="5px">
        {score}
    </Badge>
  )
}

export default CriticScore;