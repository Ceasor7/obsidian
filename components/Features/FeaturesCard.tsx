import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  cardImage: string;
};

const FeaturesCard: React.FC<Props> = ({ title, description, cardImage }) => {
  return (
    <Card className=" shadow-xl">
      <CardHeader className=" flex justify-center items-center">
        <Image src={cardImage} alt={title} height={140} width={200} />
        <CardTitle>
          <p className=" text-xl">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className=" text-center">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
