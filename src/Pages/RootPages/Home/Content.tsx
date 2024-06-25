import Blog_0001 from "../../Public/BlogContents/Blog_0001/0_Repo";
import RootPageLayout from "../RootPageLayout";

export default function Content() {
  return (<>
    <RootPageLayout>

      This is Home

      {Blog_0001.content.zh}

    </RootPageLayout>
  </>)
}