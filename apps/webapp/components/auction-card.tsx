import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuctionCard(props: AuctionCardProps) {
  const { title, description, fundraiseGoal, maxAllocation, imagePath, badgeText, linkPath } = props;

  return (
    <Card className="bg-[#1e293b]">
      <CardHeader>
        <div className="relative">
          <img
            alt={title}
            className="w-full h-auto rounded-t-md"
            height="200"
            src={imagePath}
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <Badge className="absolute top-4 right-4" variant="secondary">
            {badgeText}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm opacity-70">{description}</p>
        <div className="flex flex-col mt-4 space-y-1">
          <div className="flex justify-between">
            <span>Fundraise Goal</span>
            <span>{fundraiseGoal}</span>
          </div>
          <div className="flex justify-between">
            <span>Max allocation</span>
            <span>{maxAllocation}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-4">
        <Link href={linkPath} className="w-full" shallow={true} passHref>
          <Button className="w-full" variant="default">
            TOKEN SALE
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

interface AuctionCardProps {
  title: string;
  description: string;
  fundraiseGoal: string;
  maxAllocation: string;
  imagePath: string;
  badgeText: string;
  linkPath: string;
}
