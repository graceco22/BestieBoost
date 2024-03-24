"use client"
import Image from "next/image";
import dynamic from 'next/dynamic';
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Separator } from "@/components/ui/separator";

const LeaderboardPage = async () => {

  const DeepChat = dynamic(
    () => import('deep-chat-react').then((mod) => mod.DeepChat),
    {
      ssr: false,
    }
  );

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6" style={{ backgroundImage: 'url(/back2.png)' }}>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image
            src="/chat.png"
            alt="Leaderboard"
            height={90}
            width={90}
          />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Bestie Chat
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Ask me anything about your health journey!
          </p>

          <br></br>
          <br></br>

          {/* <Separator className="mb-4 h-0.5 rounded-full" /> */}
          <DeepChat
          directConnection={{
            cohere: {
              key: process.env.REACT_APP_COHERE_API_KEY
            }
          }}
        style={{ borderRadius: '10px' }}
        />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
