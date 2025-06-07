import { Bolt } from "lucide-react";
import { PageContainer } from "../../../components/layouts/PageContainer";
import { SectionContainer } from "../../../components/layouts/SectionContainer";
import { Button } from "../../../components/ui/button";

const CreatePostPage = () => {
  return (
    <PageContainer withFooter={false} withHeader={false} postPage={true}>
      <SectionContainer>
        <div className="w-full flex max-w-5xl justify-end px-9">
          <div className="bg-background w-full rounded-md p-15 flex flex-col gap-4 items-start mt-2">
            <Button variant="outline">Add cover image</Button>
            <input
              placeholder="New post title here..."
              className="placeholder:text-5xl placeholder:text-foreground/70 placeholder:font-bold flex h-12 w-full min-w-0 rounded-md bg-transparent px-0 py-1 text-5xl  outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <input type="text" placeholder="Add up to 4 tags..." />
          </div>
        </div>
        <div className="w-full flex max-w-5xl justify-end px-9">
          <div className="bg-background w-full rounded-md p-15 flex flex-col gap-4 items-start mt-2">
            <textarea
              placeholder="Write your post content here..."
              className="w-full"
            />
          </div>
        </div>
        <div className="p-9 gap-2 flex">
          <Button className="cursor-pointer">Publish</Button>
          <Button className="cursor-pointer" variant="ghost">
            Save Draft
          </Button>
          <Button className="cursor-pointer" size="icon" variant="ghost">
            <Bolt size={30} />
          </Button>
          <Button className="cursor-pointer" variant="ghost">
            Revert new changes
          </Button>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default CreatePostPage;
