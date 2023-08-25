import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/logo.png" />
    </Avatar>
  );
};

export default BotAvatar;
