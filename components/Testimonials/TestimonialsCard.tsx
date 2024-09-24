import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  feedback: string;
  rating: number;
};

const TestimonialsCard = ({ name, feedback, rating }: Props) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card>
      <CardHeader className="flex justify-center items-center">
        <RxAvatar size={50} />
      </CardHeader>
      <CardContent>
        <div className="flex justify-center mb-4">{renderStars()}</div>{" "}
        {/* Star rating */}
        <p>{feedback}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm italic">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialsCard;
