import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RxAvatar } from "react-icons/rx";

type Props = {
  name: string;
  feedback: string;
};

const TestimonialsCard = ({ name, feedback }: Props) => {
  return (
    <Card>
      <CardHeader className=" flex justify-center items-center">
        <RxAvatar size={50} />
      </CardHeader>
      <CardContent>
        <p>{feedback}</p>
      </CardContent>
      <CardFooter>
        <p className=" text-sm italic">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsCard;
