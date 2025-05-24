import { useAtom } from "jotai";
import { Bookmark, Ellipsis, MessageSquare, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { usernameStorage } from "../../../jotai/atoms";
const HomePage = () => {
  const [username] = useAtom(usernameStorage);
  return (
    <PageContainer withFooter={false}>
      <SectionContainer className="md:py-4">
        <main className="">
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_4.3fr] lg:grid-cols-[1.5fr_3fr_1.5fr] xl:grid-cols-[1.2fr_3.2fr_1.6fr] gap-4 max-w-7xl mx-auto md:px-2">
            {/* left side */}
            <section className="hidden md:block">
              <div className="">
                <NavLink
                  to="/settings/profile"
                  className="flex items-center gap-2 p-2 hover:bg-foreground/5 rounded-md"
                >
                  <span className="text-xl">🏠</span>
                  <span>Profile</span>
                </NavLink>
                <NavLink
                  to="/settings/profile"
                  className="flex items-center gap-2 p-2 hover:bg-foreground/5 rounded-md"
                >
                  <span className="text-xl">📖</span>
                  <span>Reading List</span>
                </NavLink>
                <NavLink
                  to="/settings/profile"
                  className="flex items-center gap-2 p-2 hover:bg-foreground/5 rounded-md"
                >
                  <span className="text-xl">😎</span>
                  <span>About</span>
                </NavLink>
              </div>
            </section>

            {/* main section */}
            <section className="space-y-2 mb-50">
              <div className="bg-background p-2 rounded-md">
                <input
                  className="border w-full p-2 rounded-md"
                  placeholder="What's on your mind?"
                />
              </div>
              <div>
                <Button className="cursor-pointer">Discover</Button>
                <Button variant="ghost" className="cursor-pointer">
                  Following
                </Button>
              </div>
              <div className="bg-background rounded-md">
                <div className="flex justify-between px-4 pt-5 items-center">
                  <span className="text-sm text-foreground/70">
                    👋 DEV Challenges
                  </span>
                  <div className="flex">
                    <Button
                      className="cursor-pointer"
                      size="icon"
                      variant="ghost"
                    >
                      <Ellipsis />
                    </Button>
                    <Button
                      className="cursor-pointer"
                      size="icon"
                      variant="ghost"
                    >
                      <X />
                    </Button>
                  </div>
                </div>
                <div className="px-14">
                  <img
                    src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fekpfy5pcfkyf7vmmfch6.png"
                    alt="banner"
                    className="rounded-md"
                  />
                  <h2 className="font-bold py-4 text-xl">Deadline Extended!</h2>
                  <div className="border p-8 space-y-1">
                    <p className="font-bold text-xl">
                      Join the Bright Data Real-Time AI Agents Challenge: $3,000
                      in prizes!
                    </p>
                    <p className="text-sm text-foreground/70 font-semibold">
                      dev.to staff for The DEV Team <span>- May 7</span>
                    </p>
                    <div className="flex text-xs gap-2">
                      <p>#brightdatachallenge</p>
                      <p>#devchallenge</p>
                      <p>#ai</p>
                      <p>#webdev</p>
                    </div>
                  </div>
                  <p className="py-4">Gooooood luck!</p>
                </div>
              </div>
              <div className="bg-background rounded-md">
                <img
                  src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftqnkkzw25yftwhrtuduy.png"
                  alt=""
                  className="w-full rounded-t-md"
                />
                <div className="flex items-center gap-2 p-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{username}</p>
                    <p className="text-xs text-foreground/70">
                      May 16 (13 hours ago)
                    </p>
                  </div>
                </div>
                <div className="pl-14 space-y-4">
                  <h1 className=" text-3xl font-bold">
                    You can replace popular frameworks using these methods! 🔥
                  </h1>
                  <div className="flex text-xs gap-2">
                    <p>#brightdatachallenge</p>
                    <p>#devchallenge</p>
                    <p>#ai</p>
                    <p>#webdev</p>
                  </div>
                  <div className="flex items-center justify-between mr-4">
                    <div className="flex">
                      <Button
                        variant="ghost"
                        className="relative w-56 cursor-pointer"
                      >
                        <div className="">
                          <p className="absolute left-2 z-50 top-1/2 -translate-y-1/2 border-2 border-background bg-accent rounded-full p-1">
                            💖
                          </p>
                          <p className="absolute left-7 z-40 top-1/2 -translate-y-1/2 border-2 border-background bg-accent rounded-full p-1">
                            🦄
                          </p>
                          <p className="absolute left-12 z-30 top-1/2 -translate-y-1/2 border-2 border-background bg-accent rounded-full p-1">
                            🤯
                          </p>
                          <p className="absolute left-17 z-20 top-1/2 -translate-y-1/2 border-2 border-background bg-accent rounded-full p-1">
                            🙌
                          </p>
                          <p className="absolute left-22 z-10 top-1/2 -translate-y-1/2 border-2 border-background bg-accent rounded-full p-1">
                            🔥
                          </p>
                        </div>
                        <p className="ml-26 text-sm text-foreground/80">
                          110 Reactions
                        </p>
                      </Button>
                      <Button variant="ghost" className="cursor-pointer">
                        <MessageSquare />3 Comments
                      </Button>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="cursor-pointer"
                    >
                      <Bookmark />
                    </Button>
                  </div>
                </div>

                {/* reply section */}
                <div className="flex items-start gap-2 p-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="bg-foreground/5 rounded-sm p-4 text-sm space-y-2">
                    <p className="font-semibold text-base">
                      {username}{" "}
                      <span className="text-foreground/70 font-normal text-sm">
                        7 Hours ago
                      </span>
                    </p>
                    <p>
                      pretty cool seeing someone call out the basics like this -
                      i always feel like we forget how much can be done just by
                      keeping things simple
                    </p>
                    <p>
                      you ever notice how sometimes old tools end up working
                      even better when things get too complicated?
                    </p>
                  </div>
                </div>

                {/* button see all comments */}
                <div className="pl-14">
                  <Button variant="ghost" className="cursor-pointer">
                    See all 16 comments
                  </Button>
                </div>
              </div>
            </section>

            {/* right side */}
            <section className="space-y-4 hidden lg:block">
              <div className="bg-background rounded-md py-4">
                <h1 className="font-bold text-lg px-4">Active discussions</h1>
                <Separator className="w-full my-3" />
                <div className="px-4">
                  <p className="text-foreground/70">
                    What was your win this week?
                  </p>
                  <p className="text-sm text-foreground/70">27 comments</p>
                </div>
                <Separator className="w-full my-3" />
                <div className="px-4">
                  <p className="text-foreground/70">
                    Build a Therapy Marketplace using Next.js and Firebase
                  </p>
                  <p className="text-sm text-foreground/70">9 comments</p>
                </div>
              </div>
              <div className="bg-background rounded-md p-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-foreground/70">
                    👋 What's happening this week
                  </p>
                  <Button size="icon" variant="ghost">
                    <Ellipsis />
                  </Button>
                </div>
                <h2 className="text-lg font-semibold text-foreground/80">
                  Challenges 🤗
                </h2>
                <div className="border-foreground/80 rounded-md p-3 border-2 space-y-3">
                  <p>Happening Now 🌟</p>
                  <img
                    src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fekpfy5pcfkyf7vmmfch6.png"
                    alt="img"
                    className="rounded-md"
                  />
                  <a
                    href=""
                    className="underline font-bold text-foreground/90 "
                  >
                    Bright Data Real-Time AI Agents Challenge
                  </a>
                  <p className="italic font-normal text-foreground/80">
                    Submissions Due May 25.
                  </p>
                </div>
                <p className="pt-4 font-bold text-foreground/80">
                  Have a great week ❤️
                </p>
              </div>
            </section>
          </div>
        </main>
      </SectionContainer>
    </PageContainer>
  );
};

export default HomePage;
