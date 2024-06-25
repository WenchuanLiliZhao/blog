/* eslint-disable @typescript-eslint/no-explicit-any */
import Pages from "../Pages/Pages";

export default function Nav(props: any) {
  const navItemArray = [
    Pages.RootPage_Home,
    Pages.RootPage_About,
  ]

  switch (props.type) {
    case "big":
      return (<>
        <div className="lili-nav">
          <div className="lili-nav-container">
            {navItemArray.map((item: any, i:number) => (
              <a href={`/${item.info.key}`} className="lili-nav-item" key={`${item}${i}`}>
                {item.info.title}
              </a>
            ))}
          </div>
        </div>
      </>);

    case "side":
      return (<>
        <div className="lili-nav">
          <div className="lili-nav-container">
            {navItemArray.map((item: any, i:number) => (
              <a href={`/${item.info.key}`} className="lili-nav-item" key={`${item}${i}`}>
                {item.info.title}
              </a>
            ))}
          </div>
        </div>
      </>);
  }
}