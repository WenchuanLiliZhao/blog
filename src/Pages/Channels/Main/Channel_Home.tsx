import Gallery_MediumCards from "../../../Components/Sections/Galleries/MediumCards";
import PageSection from "../../../Components/Sections/PageSection";
import SiteInfo from "../../../SiteInfo";
import Template_Page from "../../_Templates/Template_Page";
import Posts from "../../Posts/_Posts";

const Channel_Home: Template_Page = {
  info: {
    title: "Home",
    key: "",
    brief: `${SiteInfo.brief}`,
    title_display: <>{SiteInfo.title}</>,
    type: `聯合電子出版`,
    latest_update: SiteInfo.latest_update,
    front: undefined,
    cover: "",
    authors: [],
    tags: [],
  },

  content: (
    <>
      <PageSection
        title="最新動態"
        brief="探索中華文化的奇趣魅力，開啟一段全新旅程"
      >
        <Gallery_MediumCards
          columnCount={3}
          posts={[
            Posts.Post_3
          ]}
        />
      </PageSection>
    </>
  ),
};

export default Channel_Home;
