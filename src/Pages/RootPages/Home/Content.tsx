import Blogs from "../../Public/BlogContents/Blogs";
import RootPageLayout from "../RootPageLayout";

export default function Content() {
  return (<>
    <RootPageLayout>

      This is Home

      {Blogs.Blog_0001.content}

    </RootPageLayout>
  </>)
}