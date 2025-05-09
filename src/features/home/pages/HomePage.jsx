import { PageContainer } from "../../../components/layouts/PageContainer"
import { SectionContainer } from "../../../components/layouts/SectionContainer"
const HomePage = () => {
    return (
      <PageContainer>
        <SectionContainer
          padded
          className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center mx-auto"
        >
          <h1>home page</h1>
        </SectionContainer>
      </PageContainer>
    )
}

export default HomePage