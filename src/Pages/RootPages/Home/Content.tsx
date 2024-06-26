
import { BlockMath, InlineMath } from "react-katex";
import MathRenderer from "../../../Components/MathRender";
import RootPageLayout from "../RootPageLayout";
import Blogs from "../../Public/BlogContents/Blogs";

export default function Content() {

  return (<>
    <RootPageLayout>
      

      This is Home

      <MathRenderer>
        {Blogs.Blog_0.content}

        <p>Let $X$ ($X$ is finite to $f(x)$ <em>x</em>) be a set, and let $y \in x$.</p>
        

        $$
        f(x) \in \mathcal P(x)
        $$

        <p><strong>Definition 1.1</strong> Let $x$ be a set and let <InlineMath math={`\\mathfrak{Pr}(x)`} /></p> 

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro dolore sequi sunt eum hic obcaecati deserunt suscipit, beatae ipsa harum consectetur veniam recusandae vel sint molestiae qui cumque cum.</p>

        <BlockMath math={`
            \\begin{aligned}
            x &= 1 \\\\
            &= 2
            \\end{aligned}
          `} />

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus eius quidem, eligendi quibusdam minus incidunt commodi ipsum impedit atque distinctio, illo molestiae totam deleniti unde et, enim laboriosam tempora earum.</p>

        
      </MathRenderer>


    </RootPageLayout>
  </>)
}